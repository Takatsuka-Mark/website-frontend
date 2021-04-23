<template>
  <div class="wrap">
    <Loader></Loader>
    <svg id="logo" width="205" height="113" viewBox="0 0 205 113" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.4375 5L55.9062 88.5312L89.375 5H106.883V107.375H93.3828V67.5078L94.6484
        24.4766L61.0391 107.375H50.7031L17.1641 24.6875L18.5 67.5078V107.375H5V5H22.4375Z"
        mask="url(#path-1-outside-1)"/>
      <path d="M199.344 16.1094H166.438V107.375H153.008V16.1094H120.172V5H199.344V16.1094Z"
            mask="url(#path-1-outside-1)"/>
    </svg>
<!--    <button class="menu"-->
<!--            onclick="this.classList.toggle('opened');-->
<!--            this.setAttribute('aria-expanded',-->
<!--            this.classList.contains('opened'))"-->
<!--            aria-label="Main Menu">-->
    <button class="menu" v-bind:class="[hamburgerIsActive? 'opened': null]"
            v-on:click="toggleHamburger">
      <svg id="hamburger" width="50" height="50" viewBox="0 0 100 100">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046
        94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246
        85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942
        L 25.000021,25.000058"/>
        <path class="line line2" d="M 20,50 H 80"/>
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954
        94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754
        85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058
        L 25.000021,74.999942"/>
      </svg>
    </button>
  </div>
</template>

<script>

import Loader from '@/components/Loader/Loader.vue';

export default {
  name: 'Header2.vue',
  components: { Loader },
  data() {
    return {
      hamburgerIsActive: false,
    };
  },
  methods: {
    toggleHamburger() {
      this.hamburgerIsActive = !this.hamburgerIsActive;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../styles/new_theme';

#logo {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 50px;
  height: 35px;
  stroke: $theme-0;
  stroke-width: 5;
}

#logo path:nth-child(1) {
  stroke-dasharray: 801px;
  stroke-dashoffset: 801px;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: logo-anim 2s ease forwards;
}

#logo path:nth-child(2) {
  stroke-dasharray: 363px;
  stroke-dashoffset: 363px;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: logo-anim 2s ease forwards;
}

@keyframes logo-anim {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fill {
  to {
    fill: $theme-0;
  }
}

.menu {
  background-color:transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  padding: 0;
}

#hamburger {
  position: absolute;
  top: 12px;
  right: 12px;
  height: 35px;
  width: 35px;
  stroke: $theme-0;
  stroke-width: 6;
}

.line {
  fill: none;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
  stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}

</style>
