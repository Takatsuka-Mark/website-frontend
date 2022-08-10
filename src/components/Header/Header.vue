<template>
  <div>
    <div class="app-header">
      <!-- Logo -->
      <svg id="logo" width="205" height="113" viewBox="0 0 205 113" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.4375 5L55.9062 88.5312L89.375 5H106.883V107.375H93.3828V67.5078L94.6484
          24.4766L61.0391 107.375H50.7031L17.1641 24.6875L18.5 67.5078V107.375H5V5H22.4375Z"
          mask="url(#path-1-outside-1)"/>
        <path d="M199.344 16.1094H166.438V107.375H153.008V16.1094H120.172V5H199.344V16.1094Z"
              mask="url(#path-1-outside-1)"/>
      </svg>
      <div class="routes">
        <router-link to="/home">
          <h2><b>Home</b></h2>
        </router-link>
      </div>
      <div class="routes">
        <router-link to="/math">
          <h2><b>Math</b></h2>
        </router-link>
      </div>
        <!-- TODO reimplement hamburger when more pages are added -->
  <!--      <button class="menu" v-bind:class="[hamburgerIsActive? 'opened': null]"-->
  <!--              v-on:click="toggleHamburger">-->
  <!--        <svg id="hamburger" width="50" height="50" viewBox="0 0 100 100">-->
  <!--          <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046-->
  <!--          94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246-->
  <!--          85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942-->
  <!--          L 25.000021,25.000058"/>-->
  <!--          <path class="line line2" d="M 20,50 H 80"/>-->
  <!--          <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954-->
  <!--          94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754-->
  <!--          85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058-->
  <!--          L 25.000021,74.999942"/>-->
  <!--        </svg>-->
  <!--      </button>-->
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header.vue',
  data() {
    return {
      hamburgerIsActive: false,
      show_navbar: true,
    };
  },
  methods: {
    toggleHamburger() {
      this.hamburgerIsActive = !this.hamburgerIsActive;
    },
  },
};
</script>

<style src="./Header.scss" lang="scss" />
