<template>
  <b-navbar toggleable="md" class="app-header d-print-none">
    <b-navbar-nav class="navbar-nav-mobile ml-auto">
      <b-nav-item class="d-md-none" @click="switchSidebarMethod">
        <i class="la la-navicon px-2"/>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      showNavbarAlert: true,
    };
  },
  computed: {
    ...mapState('layout', {
      sidebarClose: (state) => state.sidebarClose,
      sidebarStatic: (state) => state.sidebarStatic,
    }),
  },
  methods: {
    ...mapActions('layout', ['toggleSidebar', 'switchSidebar', 'changeSidebarActive']),
    switchSidebarMethod() {
      if (!this.sidebarClose) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      } else {
        this.switchSidebar(false);
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
  },
};
</script>

<style src="./Header.scss" lang="scss" />
