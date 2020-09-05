<template>
  <div id="math">
    <div class="container">
      <div id="content">
        <form class="form-inline">
          <div class="input-group">
            <input v-on:submit="evaluateExpression" v-model="expression" type="text" id="expression" placeholder="Enter Expression to Evaluate" class="form-control search-form">
            <span class="input-group-btn" style="width:39px">
              <button v-on:click="evaluateExpression" id="search-this" type="button" class="pull-right btn btn-default search-btn">
                <i class="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import {AxiosInstance as axios} from "axios";
import axios from 'axios'

export default {
  name: 'Math',
  data () {
    return {
      expression: ''
    }
  },
  watch: {
    // '$route': 'fetchData'
  },
  methods: {
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
#content {
  padding: 25% 25% 5%;
}

.search-form {
  border-radius: 30px 0 0 30px;
}

.input-group {
  width:100%;
}

.input-group-btn {
  max-width:38px;
}

#search {
  border: 1px;
}

.search-btn {
  cursor:pointer;
  border-radius: 0 30px 30px 0;
  background-color:#fff;
  color:#669;
}
</style>
