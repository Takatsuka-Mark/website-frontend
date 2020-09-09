<template>
  <nav :class="{sidebar: true}">
    <ul class="nav">
      <h5 class="navTitle">TEMPLATE</h5>
      <nav-link
        header="Typography"
        link="/app/typography"
        icon-name="flaticon-list"
        index="typography"
        is-header/>
    </ul>
  </nav>
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
