<template>
  <b-collapse class="sidebar-collapse" id="sidebar-collapse" :visible="sidebarOpened">
  <nav :class="{sidebar: true}">
    <header class="logo">
      <router-link to="/app/about_me">Mark <span class="fw-semi-bold">Takatsuka</span></router-link>
    </header>
    <ul class="nav">
      <nav-link
        header="About Me"
        link="/app/about_me"
        icon-name="flaticon-user-3"
        index="about_me"
        is-header/>
<!--      <h5 class="navTitle">PAGES</h5>-->
<!--      <nav-link-->
<!--        header="Personal Stats"-->
<!--        link="/app/personal_stats"-->
<!--        icon-name="flaticon-percent-1"-->
<!--        index="persona_stats"-->
<!--        is-header/>-->
<!--      <NavLink-->
<!--        :active-item="activeItem"-->
<!--        header="Landing Page"-->
<!--        link="/app/landing_page"-->
<!--        icon-name="flaticon-home"-->
<!--        index="landing_page"-->
<!--        is-header/>-->
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
