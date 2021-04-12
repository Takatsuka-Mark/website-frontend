<template>
  <div class="wrap">
    <Loader></Loader>
    <svg id="logo" width="205" height="113" viewBox="0 0 205 113" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <!-- eslint-disable-next-line -->
      <!--        <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0" y="0" width="205" height="113" fill="black">-->
      <!--          <rect fill="white" width="205" height="113"/>-->
      <!-- eslint-disable-next-line -->
      <!--          <path d="M22.4375 5L55.9062 88.5312L89.375 5H106.883V107.375H93.3828V67.5078L94.6484 24.4766L61.0391 107.375H50.7031L17.1641 24.6875L18.5 67.5078V107.375H5V5H22.4375Z"/>-->
      <!-- eslint-disable-next-line -->
      <!--          <path d="M199.344 16.1094H166.438V107.375H153.008V16.1094H120.172V5H199.344V16.1094Z"/>-->
      <!--        </mask>-->
      <path
        d="M22.4375 5L55.9062 88.5312L89.375 5H106.883V107.375H93.3828V67.5078L94.6484
        24.4766L61.0391 107.375H50.7031L17.1641 24.6875L18.5 67.5078V107.375H5V5H22.4375Z"
        mask="url(#path-1-outside-1)"/>
      <path d="M199.344 16.1094H166.438V107.375H153.008V16.1094H120.172V5H199.344V16.1094Z"
            mask="url(#path-1-outside-1)"/>
    </svg>
  </div>
</template>

<script>

import Loader from '@/components/Loader/Loader.vue';

export default {
  name: 'Header2.vue',
  components: { Loader },
};
</script>

<style scoped>

#logo {
  position: absolute;
  top: 12px;
  left: 2.5%;
  width: 50px;
  height: 35px;
  stroke: #3b3d3d;
  stroke-width: 5;
}

#logo path:nth-child(1) {
  stroke-dasharray: 801px;
  stroke-dashoffset: 801px;
  animation: logo-anim 2s ease forwards;
}

#logo path:nth-child(2) {
  stroke-dasharray: 363px;
  stroke-dashoffset: 363px;
  animation: logo-anim 2s ease forwards;
}

@keyframes logo-anim {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes fill {
  to {
    fill: #3b3d3d;
  }
}
</style>
