<template>
  <b-collapse class="sidebar-collapse" id="sidebar-collapse" :visible="sidebarOpened">
  <nav :class="{sidebar: true}">
    <header class="logo">
      <router-link to="/app/about_me">Mark <span class="fw-semi-bold">Takatsuka</span></router-link>
    </header>
<!--    <h5 class="navTitle">NAVIGATION</h5>-->
    <ul class="nav">
      <h5 class="navTitle">ABOUT ME</h5>
      <nav-link
        header="Resume"
        link="/app/resume"
        icon-name="flaticon-user-3"
        index="about_me"
        is-header/>
      <nav-link
        header="Overview"
        link="/app/construction"
        icon-name="flaticon-warning"
        index="about_me"
        is-header/>
      <nav-link
        header="Employment"
        link="/app/construction"
        icon-name="flaticon-warning"
        index="about_me"
        is-header/>
      <nav-link
        header="Education"
        link="/app/construction"
        icon-name="flaticon-warning"
        index="about_me"
        is-header/>
      <nav-link
        header="Projects"
        link="/app/construction"
        icon-name="flaticon-warning"
        index="about_me"
        is-header/>
      <nav-link
        header="Awards"
        link="/app/construction"
        icon-name="flaticon-warning"
        index="about_me"
        is-header/>
      <nav-link
        header="Extra-Curriculars"
        link="/app/construction"
        icon-name="flaticon-warning"
        index="about_me"
        is-header/>
      <h5 class="navTitle">PROJECTS</h5>
      <nav-link
        header="Interpreter"
        link="/app/construction"
        icon-name="flaticon-warning"
        index="about_me"
        is-header/>
      <nav-link
        header="Cluster Computing"
        link="/app/construction"
        icon-name="flaticon-warning"
        index="about_me"
        is-header/>
      <nav-link
        header="HikeLine"
        link="/app/construction"
        icon-name="flaticon-warning"
        index="about_me"
        is-header/>
      <nav-link
        header="Swarming"
        link="/app/construction"
        icon-name="flaticon-warning"
        index="about_me"
        is-header/>
    </ul>
  </nav>
  </b-collapse>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavLink from '@/components/NavBar/NavLink/NavLink.vue';

export default {
  name: 'NavBar',
  components: { NavLink },

  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarOpened: (state) => !state.sidebarClose,
      activeItem: (state) => state.sidebarActiveElement,
    }),
  },
};
</script>

<style src="./NavBar.scss" lang="scss" scoped />
