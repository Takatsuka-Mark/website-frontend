<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>About Me</b-breadcrumb-item>
      <b-breadcrumb-item active>Resume</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      Resume - <span class="fw-semi-bold">A Quick Overview</span>
    </h1>
    <b-row>
      <b-col>
      <Widget>
        <pdf :src="image" style="display: inline-block; width: 100%"></pdf>
      </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget.vue';
import pdf from 'vue-pdf';

const loadingTask = pdf.createLoadingTask('Takatsuka_Resume.pdf');

export default {
  name: 'resume',
  title: 'Mark Takatsuka - Resume',
  components: {
    Widget,
    pdf,
  },
  data() {
    return {
      image: loadingTask,
    };
  },
};
</script>

<style scoped>

</style>
