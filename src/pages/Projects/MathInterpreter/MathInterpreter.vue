<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>Projects</b-breadcrumb-item>
      <b-breadcrumb-item active>Interpreter</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      Math Interpreter - <span class="fw-semi-bold">v0.0.1 ʅʕ•ᴥ•ʔʃ</span>
    </h1>
    <div class="expressionInput">
      <b-input id="expression-input" size="lg" placeholder="Enter your expression here"
               v-model="inputExpression" v-on:keyup.enter="getResult"/>
      <b-row>
        <b-col>
          <span>Display Precision: {{ displayPrecision }}
          </span>
        </b-col>
        <b-col>
          <b-input style="display:inline-block" v-model="displayPrecision"
                   id="precisionRange"
                   type="range" min="1" max="100"/>
        </b-col>
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
    <Widget title="<h2><b>Implemented Functions</b> - More Functions In Testing</h2>"
            custom-header class="bg-transparent">
      <h4><b>Note:</b> Coming 2/10/2021</h4>
<!--      <h4><b>Note:</b> [ ] notation is used to represent parameters</h4>-->
<!--      <b-row>-->
<!--      <b-col sm="3">-->
<!--      <b-list-group id="functionsListGroup">-->
<!--        <b-list-group-item v-bind:class="{ 'active' : isSelected(0) }"-->
<!--            v-on:click="selected = 0">Basic Operators</b-list-group-item>-->
<!--        <b-list-group-item v-bind:class="{ 'active' : isSelected(1) }"-->
<!--            v-on:click="selected = 1">Exponential Functions</b-list-group-item>-->
<!--        <b-list-group-item v-bind:class="{ 'active' : isSelected(2) }"-->
<!--            v-on:click="selected = 2">Trigonometric Functions</b-list-group-item>-->
<!--      </b-list-group>-->
<!--      </b-col>-->
<!--      <b-col>-->
<!--        <b-table striped hover :items="basicOps" v-if="selected === 0"></b-table>-->
<!--        <b-table striped hover :items="expFuncs" v-if="selected === 1"></b-table>-->
<!--        <b-table striped hover :items="trigFuncs" v-if="selected === 2"></b-table>-->
<!--      </b-col>-->
<!--      </b-row>-->
    </Widget>
  </div>
</template>

<script>
import { get } from 'axios';
import { SelfBuildingSquareSpinner } from 'epic-spinners';
import Widget from '@/components/Widget/Widget.vue';
import * as https from 'https';
// import { readFileSync } from 'fs';

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
    expFuncs: [
      { operator: 'lg([ℝ])', description: '' },
      { operator: 'log([ℝ])', description: '' },
      { operator: 'modPow([ℝ], [ℝ], [ℝ])', description: '' },
    ],
    trigFuncs: [
      {},
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
      // eslint-disable-next-line no-return-assign
        .then((response) => { this.result = response.data; this.loading = false; })
        .catch(() => { this.result = 'An error occurred when contacting the endpoint'; this.loading = false; });
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
