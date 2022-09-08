<template>
  <div>
<!--<div :class="{root: true, sidebarClose}">-->
    <Transition name="hide-navbar">
      <Header v-if="show_navbar && show_navbar2" class="header"/>
    </Transition>
    <Loader class="loader"/>
  <!--  <NavBar/>-->
    <div ref="content" class="content">
     <transition name="router-fade" mode="out-in">
        <router-view/>
     </transition>
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
      show_navbar2: false,
      last_y: 0,
    };
  },
  methods: {
    handleScroll() {
      const scrollY = document.body.getBoundingClientRect().top;
      if (scrollY > this.last_y || scrollY >= 0) {
        this.show_navbar = true;
      } else {
        this.show_navbar = false;
      }
      this.last_y = scrollY;
    },
  },
  computed: {
  },
  created() {
    this.last_y = window;
    // eslint-disable-next-line no-return-assign
    setTimeout(() => this.show_navbar2 = true, 2850);
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
