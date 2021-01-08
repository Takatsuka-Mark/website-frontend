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
    </div>
    <div style="padding: 5%">
      <h2>{{ result }}</h2>
      <div class="expressionOutput">
      </div>
    </div>
  </div>
</template>

<script>
import { get } from 'axios';

export default {
  name: 'MathInterpreter',
  title: 'Evaluator',
  data: () => ({
    inputExpression: '',
    result: 'Results shown here!',
  }),
  methods: {
    getResult() {
      const searchParams = new URLSearchParams();
      searchParams.append('expression', this.inputExpression);

      get(`http://35.185.254.123:8085/math/evaluate?${searchParams.toString()}`)
        // eslint-disable-next-line no-return-assign
        .then((response) => (this.result = response));
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
