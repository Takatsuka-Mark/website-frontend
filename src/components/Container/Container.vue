<template>
<!--  <div>-->
<!--  <section class="container" v-if="HT || HT_Right">-->
    <section class="container">
    <h5 v-if="container_title && typeof container_title === 'string'" class="title">{{container_title}}</h5>
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

<script setup lang="ts">
defineProps<{   // TODO determine how to set defaults.
  container_title: string,
  HT: boolean,
  HT_Right: boolean,
  FULL: boolean
}>()
</script>

<style src="./Container.scss" lang="scss"/>
