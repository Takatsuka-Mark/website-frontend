<template>
<!--  <div>-->
<!--  <section class="container" v-if="HT || HT_Right">-->
    <section class="container">
    <h5 v-if="title && typeof title === 'string'" class="title">{{title}}</h5>
    <!-- Horizontal Double Box -->
    <div v-if="HT || HT_Right" class="ht_wrapper">
      <div class="ht_title" v-if="!HT_Right">
        <slot name="ht_title"></slot>
      </div>
      <div class="ht_body">
        <slot class="ht_body" name="ht_body"></slot>
      </div>
      <div class="ht_title" v-if="HT_Right">
        <slot name="ht_title"></slot>
      </div>
    </div>
    <div v-if="FULL" class="full">
      <div class="full_body">
        <slot class="full_body" name="full_body"></slot>
      </div>
    </div>
    <slot></slot>
  </section>
<!--  <section class="verticalContainer" v-if="FULL">-->
<!--    <div v-if="FULL" class="full">-->
<!--      <div class="full_body">-->
<!--        <slot class="full_body" name="full_body"></slot>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->
<!--  </div>-->
</template>

<script>
export default {
  name: 'Container',
  props: {
    title: { default: '' },
    HT: { default: false },
    HT_Right: { default: false },
    FULL: { default: false },
  },
};
</script>

<style src="./Container.scss" lang="scss"/>
