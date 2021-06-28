<template>
  <div>
    <Container horizontal_title="true">
      <template slot="ht_title">
        Hi, I'm Mark <span style="width: 2rem"/> (^o^)/
      </template>
      <template slot="ht_body">
        Welcome to my experimental website!
        this is a lot of text that I am just
        putting in here so that it gets filled with even more text
      </template>
    </Container>
  </div>
</template>

<script>
import Container from '@/components/Container/Container.vue';

export default {
  name: 'TestPage.vue',
  components: { Container },
};
</script>

<style scoped>
</style>
