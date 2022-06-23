<template>
  <div>
<!--<div :class="{root: true, sidebarClose}">-->
    <transition name="hide-navbar">
      <Header v-if="show_navbar"/>
<!--      <Header/>-->
    </transition>
    <Loader/>
  <!--  <NavBar/>-->
    <div ref="content" class="content">
  <!--    <transition name="router-animation">-->
        <router-view/>
  <!--    </transition>-->
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Loader from '@/components/Loader/Loader.vue';

import './Layout.scss';

export default {
  name: 'Layout',
  components: { Header, Loader },
  data() {
    return {
      show_navbar: true,
      last_y: 0,
    };
  },
  methods: {
    handleScroll() {
      const { scrollY } = window;
      this.show_navbar = scrollY <= this.last_y;
      this.last_y = scrollY;
    },
  },
  computed: {
  },
  created() {
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style src="./Layout.scss" lang="scss" />
