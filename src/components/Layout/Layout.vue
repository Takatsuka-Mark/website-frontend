<template>
<div :class="{root: true, sidebarClose}">
  <Header/>
  <NavBar/>
  <div ref="content" class="content animated fadeInUp">
    <transition name="router-animation">
      <router-view/>
    </transition>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import NavBar from '@/components/NavBar/NavBar.vue';
import Header from '@/components/Header/Header.vue';

import './Layout.scss';

export default {
  name: 'Layout',
  components: { NavBar, Header },
  methods: {
    ...mapActions(
      'layout', ['switchSidebar', 'changeSidebarActive'],
    ),
  },
  computed: {
    ...mapState('layout', {
      sidebarClose: (state) => state.sidebarClose,
    }),
  },
  created() {
  },
  mounted() {
    this.$refs.content.addEventListener('animationend', () => {
      this.$refs.content.classList.remove('animated');
      this.$refs.content.classList.remove('fadeInUp');
    });
  },
};
</script>

<style src="./Layout.scss" lang="scss" />
