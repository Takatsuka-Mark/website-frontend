<template>
<div class="expression_input">
  <Container FULL="true">
    <template slot="full_body">
      <h1><b>Math Interpreter</b></h1>
      <h5>Version: {{ version }}</h5>
      <div class="expressionInput">
        <b-input id="expression-input" size="lg" placeholder="Enter an expression here"
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
  name: 'MathInterpreter.vue',
  title: 'Evaluator',
  components: {
    Container,
    SelfBuildingSquareSpinner,
  },
  data: () => ({
    inputExpression: '',
    version: 'Loading version...',
    result: 'Type an equation!',
    displayPrecision: '10',
    loading: false,
    agent: null,
  }),
  mounted() {
    this.agent = new https.Agent({ rejectUnauthorized: false });
    this.getVersion();
  },
  methods: {
    getResult() {
      this.result = 'Waiting for BE.';
      this.loading = true;
      const searchParams = new URLSearchParams();
      searchParams.append('expression', this.inputExpression);
      get(`https://backend.marktakatsuka.com:8085/math/evaluate?${searchParams.toString()}`,
        { httpsAgent: this.agent })
        .then((response) => { this.result = response.data; this.loading = false; })
        .catch(() => {
          this.result = 'An error occurred'; this.loading = false;
        });
      // eslint-disable-next-line
      console.log(this.result);
    },
    isSelected(i) {
      return i === this.selected;
    },
    getVersion() {
      get('https://backend.marktakatsuka.com:8085/version',
        { httpsAgent: this.agent })
        .then((response) => { this.version = response.data; })
        .catch(() => { this.version = 'Failed fetching version'; });
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
