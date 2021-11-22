<template>
<div class="expression_input">
  <Container FULL="true">
    <template slot="full_body">
      <h1>Math Interpreter</h1>
      <div class="expressionInput">
        <b-input id="expression-input" size="lg" placeholder="Enter some maths here"
                 v-model="inputExpression" v-on:keyup.enter="getResult"/>
      </div>
      <div style="padding: 5%" class="expressionOutput">
        <h2 v-show="!loading">{{ result }}</h2>
        <SelfBuildingSquareSpinner
          v-show="loading"
          :animation-duration="6000"
          :size="40"
          color="#ff1d5e"/>
      </div>
    </template>
  </Container>
</div>
</template>

<script>
import https from 'https';
import { get } from 'axios';
import { SelfBuildingSquareSpinner } from 'epic-spinners';
import Container from '@/components/Container/Container.vue';

export default {
  name: 'MathInterpreter2.vue',
  title: 'Evaluator',
  components: {
    Container,
    SelfBuildingSquareSpinner,
  },
  data: () => ({
    inputExpression: '',
    result: 'Results shown here',
    displayPrecision: '10',
    loading: false,
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
      // TODO: Change this back
      get(`http://localhost:8085/math/evaluate?${searchParams.toString()}`, { httpsAgent: agent })
        .then((response) => { this.result = response.data; this.loading = false; })
        .catch(() => { this.result = 'An error occurred when contacting the endpoint'; this.loading = false; });
      // get(`https://backend.marktakatsuka.com:8085/math/evaluate?${searchParams.toString()}`,
      //  { httpsAgent: agent })
      //   .then((response) => { this.result = response.data; this.loading = false; })
      //   .catch(() => {
      //   this.result = 'An error occurred when contacting the endpoint'; this.loading = false; });
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
  display: block;
}

.expressionOutput {
  font-size: large;
  display: block;
}
</style>
