<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>Projects</b-breadcrumb-item>
      <b-breadcrumb-item active>Interpreter</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      Math Interpreter - <span class="fw-semi-bold">v0.0.1 ʅʕ•ᴥ•ʔʃ</span>
    </h1>
    <b-input type="text" placeholder="Expression" label="Expression" v-model="expressionValue"/>
  </div>
</template>

<script>
export default {
  name: 'MathInterpreter',
  title: 'Evaluator',
};
</script>

<style scoped>

</style>
