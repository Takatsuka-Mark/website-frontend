<template>
  <div class="visits-page">
    <h1 class="page-title">Personal Stats
      <small>
        <small>We on the Personal Stats Now ʕ•́ᴥ•̀ʔっ</small>
      </small>
    </h1>
    <b-row>
      <b-col lg="7">
        <Widget class="bg-transparent">
          <ClassesStankey/>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ClassesStankey from '@/components/Charts/ClassesSankey/ClassesSankey.vue';
import Widget from '@/components/Widget/Widget.vue';

export default {
  name: 'PersonalStats',
  components: {
    Widget,
    ClassesStankey,
  },
};
</script>

<style src="./PersonalStats.scss" lang="scss" />
