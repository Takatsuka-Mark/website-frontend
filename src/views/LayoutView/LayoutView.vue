<script setup lang="ts">
import Header from '../../components/Header/Header.vue'
import PreLoader from '../../components/PreLoader/PreLoader.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      show_navbar: true,
      show_navbar2: false,
      last_y: 0,
    }
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
  created() {
    // this.last_y = window // TODO(mark) determine why this was used in original
    setTimeout(() => this.show_navbar2 = true, 2850);
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<template>
  <div>
    <Transition name="hide-navbar">
      <Header v-if="show_navbar && show_navbar2" class="header"/>
    </Transition>
    <PreLoader class="loader"/>
    <div ref="content" class="content">
      <router-view v-slot="{ Component, route }">
        <Transition name="router-fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </router-view>
    </div>
  </div>
</template>


<style src="./LayoutView.scss" lang="scss"/>

