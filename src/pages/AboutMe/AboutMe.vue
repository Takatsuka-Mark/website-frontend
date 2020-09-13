<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>About Me</b-breadcrumb-item>
      <b-breadcrumb-item active>Overview</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      About Me - <span class="fw-semi-bold">A Quick Overview</span>
    </h1>
    <b-row>
      <b-col xs="12" md="6">
        <Widget
          title="<h5>Overview</h5" custom-header>
        </Widget>
        <Widget
          title="<h5>Projects</h5" custom-header>
        </Widget>
        <Widget
          title="<h5>Skills</h5" custom-header>
        </Widget>
      </b-col>
      <b-col xs="12" md="6">
        <Widget
          title="<h5>Education</h5" custom-header>
        </Widget>
        <Widget
          title="<h5>Employment</h5" custom-header>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget.vue';

export default {
  name: 'AboutMe',
  components: { Widget },
};
</script>

<style scoped>

</style>
