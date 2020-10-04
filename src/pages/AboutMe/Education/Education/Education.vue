<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>About Me</b-breadcrumb-item>
      <b-breadcrumb-item active>Education</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      Education - <span class="fw-semi-bold">Getting Schooled ʕ•́ᴥ•̀ʔっ</span>
    </h1>
    <b-row>
<!--      <b-col lg="7">-->
      <b-col>
        <Widget title="<h5>Timeline</h5>" custom-header>
          <EducationTimeline/>
        </Widget>
        <Widget title="<h5>Mountlake Terrace High School</h5>" custom-header>

        </Widget>
        <Widget title="<h5>Edmonds Community College</h5>" custom-header>

        </Widget>
        <Widget title="<h5>Rochester Institute of Technology</h5>" custom-header>

        </Widget>
        <Widget title="<h5>Graduate School?</h5>" custom-header>

        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget.vue';
import EducationTimeline from '@/components/Charts/Timeline/EducationTimeline/EducationTimeline.vue';

export default {
  name: 'Education',
  title: 'Mark Takatsuka - Education',
  components: { EducationTimeline, Widget },
};
</script>

<style src="./Education.scss" lang="scss"/>
