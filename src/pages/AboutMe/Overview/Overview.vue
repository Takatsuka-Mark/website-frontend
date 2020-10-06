<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>About Me</b-breadcrumb-item>
      <b-breadcrumb-item active>Overview</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      Update - <span class="fw-semi-bold">Working ʕ•́ᴥ•̀ʔっ</span>
    </h1>
    <b-row>
      <!--      <b-col lg="7">-->
      <b-col>
        <Widget title="<h2>Timeline</h2>" custom-header class="bg-transparent">
          <AboutMeTimeline/>
        </Widget>
        <Widget title="<h2>Education</h2>"
                custom-header collapse class="bg-transparent">
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import AboutMeTimeline from '@/components/Charts/Timeline/AboutMeTimeline/AboutMeTimeline.vue';
import Widget from '@/components/Widget/Widget.vue';

export default {
  name: 'Overview',
  title: 'Mark Takatsuka - Overview',
  components: {
    AboutMeTimeline,
    Widget,
  },
};
</script>

<style scoped>

</style>
