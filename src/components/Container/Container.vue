<template>
  <section ref="container">
    <div class="container-contents">
    <h5 v-if="title && typeof title === 'string'" class="title">{{title}}</h5>
    <div :class="`widgetBody`" ref="widgetBodyRef">
      <slot></slot>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Container',
  props: {
    title: { default: '' },
  },
};
</script>

<style src="./Container.scss" lang="scss"/>
