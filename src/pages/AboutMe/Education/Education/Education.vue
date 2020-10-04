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
      <b-col lg="7">
        <Widget>
          <p>text</p>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget.vue';

export default {
  name: 'Education',
  title: 'Mark Takatsuka - Education',
  components: { Widget },
};
</script>

<style scoped>

</style>
