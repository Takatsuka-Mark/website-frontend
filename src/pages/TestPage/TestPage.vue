<template>
  <div>
    <Container>
      <div class="wrapper">
        <div class="title-block">
          Hi, I'm Mark :D
        </div>
        <div class="text-block">
          Welcome to my experimental website!
        </div>
      </div>
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

.wrapper {
  display: flex;
  align-items: center;
}

.title-block .text-block {
  width: 50%
}

@media screen and (min-width: 900px) {
  .title-block .text-block {
    width: 100%
  }
}

@media screen and (max-width: 900px) {
  .wrapper {
    display: block;
  }
}
.text-block{

}
</style>
