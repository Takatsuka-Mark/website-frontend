<template>
  <section ref="container">
    <div class="container-contents">
      <h5 v-if="title && typeof title === 'string'" class="title">{{title}}</h5>
      <!-- Horizontal Double Box -->
      <div v-if="horizontal_title" class="ht_wrapper">
        <div class="ht_title" v-if="horizontal_title_left">
          <slot name="ht_title"></slot>
        </div>
        <div class="ht_body">
          <slot class="ht_body" name="ht_body"></slot>
        </div>
        <div class="ht_title" v-if="!horizontal_title_left">
          <slot name="ht_title"></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Container',
  props: {
    title: { default: '' },
    horizontal_title: { default: false },
    horizontal_title_left: { default: true },
  },
};
</script>

<style src="./Container.scss" lang="scss"/>
