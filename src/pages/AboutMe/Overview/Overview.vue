<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>About Me</b-breadcrumb-item>
      <b-breadcrumb-item active>Overview</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      Current Status - <span class="fw-semi-bold">Working ʕ•́ᴥ•̀ʔっ</span>
    </h1>
    <b-col>
      <!--        <Widget title="<h2>Timeline</h2>" custom-header class="bg-transparent">-->
      <!--          <AboutMeTimeline/>-->
      <!--        </Widget>-->
      <Widget title="<h2><b>Rochester Institute of Technology</b></h2>"
              custom-header class="bg-transparent">
        <h4><b>Bachelors Computer Science</b></h4>
        <h4>Aug. 2018 - Dec. 2021</h4>
        <h5>Minor in Mathematics</h5>
        <h5><b>GPA: 3.86</b></h5>
      </Widget>
      <Widget title="<h2><b>SecureCloudDB</b></h2>"
              custom-header class="bg-transparent">
        <h4><b>Software Engineering Intern</b></h4>
        <h4>May 2020 - Current</h4>
        <h5>Backend Developer</h5>
      </Widget>
      <b-container>
        <b-row>
          <b-col>
            <Widget title="<h2><b>Programming Languages</b></h2>"
                    custom-header class="bg-transparent">
              <h5>Experience in Months</h5>
              <language-gauge/>
            </Widget>
          </b-col>
          <b-col>
            <Widget title="<h2><b>Software Skills</b></h2>" custom-header
                    class="bg-transparent">
              <b-container>
                <b-col sm="4">
                  <b-img src="Logos/AWS.png" height="30px" style="margin-right: 10px"/>
                  <b-link href="https://aws.amazon.com/" target="_blank"><h3>Amazon Web Services</h3></b-link>
                </b-col>
                <b-col sm="4">
                  <b-img src="Logos/Google.png" height="30px" style="margin-right: 10px"/>
                  <b-link href="https://cloud.google.com/" target="_blank"><h3>Google Cloud</h3></b-link>
                </b-col>
                <b-col sm="4">
                  <b-img src="Logos/Kubernetes.png" height="30px" style="margin-right: 10px"/>
                  <b-link href="https://kubernetes.io/" target="_blank"><h3>Kubernetes</h3></b-link>
                </b-col>
                <b-col sm="4">
                  <b-img src="Logos/psql.png" height="30px" style="margin-right: 10px"/>
                  <b-link href="https://postgresql.org/" target="_blank"><h3>PostgreSQL</h3></b-link>
                </b-col>
                <b-col sm="4">
                  <b-img src="Logos/Tensorflow.png" height="30px" style="margin-right: 10px"/>
                  <b-link href="https://tensorflow.org/" target="_blank"><h3>Tensorflow</h3></b-link>
                </b-col>
                <b-col sm="4">
                  <b-img src="Logos/Spring.png" height="30px" style="margin-right: 10px"/>
                  <b-link href="https://spring.io/" target="_blank"><h3>Spring</h3></b-link>
                </b-col>
              </b-container>
            </Widget>
          </b-col>
        </b-row>
      </b-container>
    </b-col>
  </div>
</template>

<script>
// import AboutMeTimeline from '@/components/Charts/Timeline/AboutMeTimeline/AboutMeTimeline.vue';
import Widget from '@/components/Widget/Widget.vue';
import LanguageGauge from '@/components/Charts/LanguageGauge/LanguageGauge.vue';

export default {
  name: 'Overview',
  title: 'Mark Takatsuka - Overview',
  components: {
    LanguageGauge,
    // AboutMeTimeline,
    Widget,
  },
};
</script>

<style scoped>

</style>
