<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>About Me</b-breadcrumb-item>
      <b-breadcrumb-item active>Overview</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      Current Status - <span class="fw-semi-bold">Working ʕ•́ᴥ•̀ʔっ</span>
    </h1>
    <b-row>
      <!--      <b-col lg="7">-->
      <b-col>
        <!--        <Widget title="<h2>Timeline</h2>" custom-header class="bg-transparent">-->
        <!--          <AboutMeTimeline/>-->
        <!--        </Widget>-->
        <Widget title="<h2>Rochester Institute of Technology</h2>"
                custom-header collapse class="bg-transparent">
          <h4><b>Bachelors Computer Science</b></h4>
          <h4>Aug. 2018 - Dec. 2021</h4>
          <h5>Minor in Mathematics</h5>
          <h5><b>GPA: 3.86</b></h5>
        </Widget>
        <Widget title="<h2>SecureCloudDB</h2>"
                custom-header collapse class="bg-transparent">
          <h4><b>Software Engineering Intern</b></h4>
          <h4>May 2020 - Current</h4>
<!--          <h5>Backend Developer</h5>-->
<!--          <h5>Skills Acquired</h5>-->

        </Widget>
        <Widget title="<h2>Languages</h2>"
                custom-header collapse class="bg-transparent">
        </Widget>
        <Widget title="<h2>Software Skills</h2>"
                custom-header collapse class="bg-transparent">
          <b-row>
            <b-col class="col-md-4">
              <b-img src="Logos/AWS.png" fluid/> AWS
            </b-col>
            <b-col class="col-md-4">
              <b-img src="Logos/Google.png" fluid/> Google
            </b-col>
            <b-col class="col-md-4">
              <b-img src="Logos/Kubernetes.png" fluid/> Kubernetes
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-md-4">
              <b-img src="Logos/psql.png" fluid/> PostgreSQL
            </b-col>
            <b-col class="col-md-4">
              <b-img src="Logos/Tensorflow.png" fluid/> Tensorflow
            </b-col>
            <b-col class="col-md-4">
              <b-img src="Logos/Spring.png" fluid/> Spring
            </b-col>
          </b-row>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import AboutMeTimeline from '@/components/Charts/Timeline/AboutMeTimeline/AboutMeTimeline.vue';
import Widget from '@/components/Widget/Widget.vue';

export default {
  name: 'Overview',
  title: 'Mark Takatsuka - Overview',
  components: {
    // AboutMeTimeline,
    Widget,
  },
};
</script>

<style scoped>

</style>
