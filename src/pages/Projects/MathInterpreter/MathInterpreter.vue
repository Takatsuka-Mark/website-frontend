<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>Projects</b-breadcrumb-item>
      <b-breadcrumb-item active>Interpreter</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      Math Interpreter - <span class="fw-semi-bold">v0.0.4 ʅʕ•ᴥ•ʔʃ</span>
    </h1>
    <div class="expressionInput">
      <b-input id="expression-input" size="lg" placeholder="Enter your expression here"
               v-model="inputExpression" v-on:keyup.enter="getResult"/>
      <b-row>
<!--        <b-col>-->
<!--          <span>Display Precision: {{ displayPrecision }}-->
<!--          </span>-->
<!--        </b-col>-->
<!--        <b-col>-->
<!--          <b-input style="display:inline-block" v-model="displayPrecision"-->
<!--                   id="precisionRange"-->
<!--                   type="range" min="1" max="100"/>-->
<!--        </b-col>-->
      </b-row>
    </div>
    <div style="padding: 5%">
      <h2 v-show="!loading">{{ result }}</h2>
      <SelfBuildingSquareSpinner
        v-show="loading"
        :animation-duration="6000"
        :size="40"
        color="#ff1d5e"/>
    </div>
    <Widget title="<h2><b>Project Info</b></h2>" custom-header class="bg-transparent" collapse>
      <br/>
      <h3>How Does it Work?</h3>
      Once you submit your expression, it hits a backend I constructed with the data.
      There, the expression is tokenized, a parse table is created, and execution begins!
      <br/>More docs are coming soon, but they take forever to write!
      <br/>
      <br/>
      <h5>Some quick notes:</h5>
      Case is critical. For example, <b>`sin(1)`</b> works, but <b>`SIN(1)`</b> does not.
      <br/>Unrecognized functions are skipped at this moment.
      This allows for some weird functionality, like <b>`a(5 * 6) = 30`</b>.
      I'm working on fixing this.
      <br/>Spacing is not critical. For example, <b>`abs(-1)+1`</b> = <b>`abs( -1 ) + 1`</b>
      <h5>
      <br/>To find more information, check out the source code at
        <a href="https://github.com/Takatsuka-Mark/website-backend" target="_blank">
          https://github.com/Takatsuka-Mark/website-backend</a>
      </h5>

      <br/>
      <br/>
      <h3>Why Did You Make This?</h3>
      <ol>
        <li>To learn how interpreters work</li>
        <li>To use it for my nefarious purposes</li>
        <li>But most of all: For Fun! (I'm a nerd)</li>
      </ol>

    </Widget>
    <Widget title="<h2><b>Implemented Functions</b> - More In Testing Now!</h2>"
            custom-header class="bg-transparent" collapse collapsed>
      <b-row>
      <b-col sm="3">
      <b-list-group id="functionsListGroup">
        <b-list-group-item v-bind:class="{ 'active' : isSelected(0) }"
            v-on:click="selected = 0">Basic Operators</b-list-group-item>
        <b-list-group-item v-bind:class="{ 'active' : isSelected(1) }"
                           v-on:click="selected = 1">Basic Functions</b-list-group-item>
        <b-list-group-item v-bind:class="{ 'active' : isSelected(2) }"
            v-on:click="selected = 2">Exponential Functions</b-list-group-item>
        <b-list-group-item v-bind:class="{ 'active' : isSelected(3) }"
            v-on:click="selected = 3">Trigonometric Functions</b-list-group-item>
      </b-list-group>
      </b-col>
      <b-col>
        <b-table striped hover :items="basicOps" v-if="selected === 0"></b-table>
        <b-table striped hover :items="basicFuncs" v-if="selected === 1"></b-table>
        <b-table striped hover :items="expFuncs" v-if="selected === 2"></b-table>
        <b-table striped hover :items="trigFuncs" v-if="selected === 3"></b-table>
      </b-col>
      </b-row>
    </Widget>
  </div>
</template>

<script>
import { get } from 'axios';
import { SelfBuildingSquareSpinner } from 'epic-spinners';
import Widget from '@/components/Widget/Widget.vue';
import * as https from 'https';

export default {
  name: 'MathInterpreter',
  title: 'Evaluator',
  components: {
    Widget,
    SelfBuildingSquareSpinner,
  },
  data: () => ({
    inputExpression: '',
    result: 'Results shown here!',
    displayPrecision: '10',
    loading: false,
    selected: 0,
    basicOps: [
      { operator: '[ℝ]  +  [ℝ]', description: 'Addition' },
      { operator: '[ℝ]  -  [ℝ]', description: 'Subtraction' },
      { operator: '[ℝ]  *  [ℝ]', description: 'Multiplication' },
      { operator: '[ℝ]  /  [ℝ]', description: 'Division' },
      { operator: '[ℕ]  ^  [ℕ]', description: 'Exponentiation' },
      { operator: '[ℝ]  //  [ℝ]', description: 'Integer divide two reals' },
      { operator: '[ℝ]  %  [ℕ]', description: 'Perform the modulo of a real, and a natural number' },
    ],
    basicFuncs: [
      { function: 'abs( param1 )', parameters: 'Any real number', description: 'Absolute value' },
      { function: 'sqrt( param1 )', parameters: 'Any positive real number', description: 'Square Root' },
      { function: 'rng( param1, param2 )', parameters: '2 Integers, min and max', description: 'Random number | param1 <= n < param2' },
      { function: 'lcm( param1, ..., paramN )', parameters: 'A comma separated list of integers', description: 'Lowest Common Multiple' },
      { function: 'gcd( param1, ..., paramN )', parameters: 'A comma separated list of integers', description: 'Greatest Common Divisor' },
      { function: 'min( param1, ..., paramN )', parameters: 'A comma separated list of integers', description: 'Minimum' },
      { function: 'max( param1, ..., paramN )', parameters: 'A comma separated list of integers', description: 'Maximum' },
    ],
    expFuncs: [
      { function: 'lg( param1 )', parameters: 'Any real number', description: 'Computes the log base 2' },
      { function: 'log( param1 )', parameters: 'Any real number', description: 'Computes the log base 10' },
      { function: 'modPow( param1, param2, param3 )', parameters: '3 integers, base, exponent, and modulous', description: 'Computes (param1 ^ param2) % param3' },
    ],
    trigFuncs: [
      { function: 'sine( param1 )', parameters: 'Any real number', description: 'Sine in radians' },
      { function: 'cos( param1 )', parameters: 'Any real number', description: 'Cosine in radians' },
      { function: 'tan( param1 )', parameters: 'Any real number', description: 'Tangent in radians' },
      {},
      { function: 'asin( param1 )', parameters: 'Any real number', description: 'Inverse Sine in radians' },
      { function: 'acos( param1 )', parameters: 'Any real number', description: 'Inverse Cosine in radians' },
      { function: 'atan( param1 )', parameters: 'Any real number', description: 'Inverse Tangent in radians' },
      {},
      { function: 'sinh( param1 )', parameters: 'Any real number', description: 'Hyperbolic Sine in radians' },
      { function: 'cosh( param1 )', parameters: 'Any real number', description: 'Hyperbolic Cosine in radians' },
      { function: 'tanh( param1 )', parameters: 'Any real number', description: 'Hyperbolic Tangent in radians' },
      {}, {},
      { function: 'sec( param1 )', parameters: 'Any real number', description: 'Secant in Radians' },
      { function: 'csc( param1 )', parameters: 'Any real number', description: 'Cosecant in Radians' },
      { function: 'cot( param1 )', parameters: 'Any real number', description: 'Cotangent in Radians' },
      {},
      { function: 'asec( param1 )', parameters: 'Any real number', description: 'Inverse Secant in Radians' },
      { function: 'acsc( param1 )', parameters: 'Any real number', description: 'Inverse Cosecant in Radians' },
      { function: 'acot( param1 )', parameters: 'Any real number', description: 'Inverse Cotangent in Radians' },
      {},
      { function: 'sech( param1 )', parameters: 'Any real number', description: 'Hyperbolic Secant in Radians' },
      { function: 'csch( param1 )', parameters: 'Any real number', description: 'Hyperbolic Cosecant in Radians' },
      { function: 'coth( param1 )', parameters: 'Any real number', description: 'Hyperbolic Cotangent in Radians' },
    ],
  }),
  methods: {
    getResult() {
      this.result = 'Waiting for BE.';
      this.loading = true;
      const searchParams = new URLSearchParams();
      searchParams.append('expression', this.inputExpression);
      const agent = new https.Agent({
        rejectUnauthorized: false,
      });
      get(`https://backend.marktakatsuka.com:8085/math/evaluate?${searchParams.toString()}`, { httpsAgent: agent })
        .then((response) => { this.result = response.data; this.loading = false; })
        .catch(() => { this.result = 'An error occurred when contacting the endpoint'; this.loading = false; });
      // eslint-disable-next-line
      console.log(this.result);
    },
    isSelected(i) {
      return i === this.selected;
    },
  },
};
</script>

<style scoped>
.expressionInput {
  padding-top: 5%;
  padding-right: 5%;
  padding-left: 5%;
}

.expressionOutput {
  font-size: large;
}
</style>
