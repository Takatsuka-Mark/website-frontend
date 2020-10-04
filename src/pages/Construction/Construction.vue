<template>
  <div class="error-page">
    <b-container>
      <div class="errorContainer mx-auto">
        <img class="errorCode" :src="errorImg">
        <p class="errorInfo">
          This page is currently under construction!<br>
          Check back in soon :)

        </p>
      </div>
    </b-container>
  </div>
</template>

<script>
import errorImg from '@/assets/error.png';

export default {
  name: 'Construction',
  title: 'Mark Takatsuka - Construction',
  data() {
    return {
      errorImg,
    };
  },
};
</script>

<style src="./Construction.scss" lang="scss" scoped />
