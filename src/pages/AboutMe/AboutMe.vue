<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>You Are Here</b-breadcrumb-item>
      <b-breadcrumb-item active>Typography</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      About Me - <span class="fw-semi-bold">A Quick Overview</span>
    </h1>
    <b-row>
      <b-col xs="12" md="6">
        <Widget
          title="<h5>Education</h5" custom-header collapse>

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
