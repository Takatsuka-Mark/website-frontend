<template>
  <div id="math">
    <h1>Here is some math</h1>
    <p><input type="number" id="primeNum" v-model="primeNum" placeholder="Enter Prime Number">
      <button v-on:click="isPrime">Check Primality</button>
    </p>
    <p><input type="number" id="primeFactor" v-model="primeFactor" placeholder="Enter Number to Factor">
      <button v-on:click="getFactors">Find Prime Factors</button>
    </p>
    <p><input type="number" id="totient" v-model="totient" placeholder="totient(num)">
      <button v-on:click="getTotient">Find totient</button>
    </p>
    <p><input type="text" id="expression" v-model="expression" placeholder="Enter Expression to Evaluate">
      <button v-on:click="evaluateExpression">Evaluate</button>
    </p>
    <!--        <p> {{primality}}</p>-->
  </div>
</template>

<script>
// import {AxiosInstance as axios} from "axios";
import axios from 'axios'

export default {
  name: 'Math',
  data () {
    return {
      primeNum: '',
      primeFactor: '',
      totient: '',
      expression: ''
      // primality: ''
    }
  },
  watch: {
    // '$route': 'fetchData'
  },
  methods: {
    isPrime: function () {
      // fetch('http://localhost:8085/' primeNum)
      axios.get('http://localhost:8085/math/prime', { params: { num: this.primeNum } })
        // .then(response => {
        //     // return response.text()
        // })
        .then(data => {
          // this.primality = data.data.toString();
          alert(data.data.toString())
        })
    },
    getFactors: function () {
      // fetch('http://localhost:8085/' primeNum)
      axios.get('http://localhost:8085/math/primeFac', { params: { num: this.primeFactor } })
        .then(data => {
          alert(data.data.toString())
        })
    },
    getTotient: function () {
      axios.get('http://localhost:8085/math/totient', { params: { num: this.totient } })
        .then(data => {
          alert(data.data.toString())
        })
    },
    evaluateExpression: function () {
      axios.get('http://localhost:8085/math/evaluate', { params: { expression: this.expression } })
        .then(data => {
          alert(data.data.toString())
        })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
