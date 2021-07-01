<template>
  <div>
    <div class="center_column">
      <Container class="intro_container" horizontal_title="true">
        <template slot="ht_title">
          Hi, I'm Mark <span style="width: 2rem"/> (^o^)/
        </template>
        <template slot="ht_body">
          Welcome to my experimental website!
          this is a lot of text that I am just
          putting in here so that it gets filled with even more text
        </template>
      </Container>
      <Container class="education_container" horizontal_title="true" horizontal_title_left="false">
        <template slot="ht_title">
          Education
        </template>
        <template slot="ht_body">
          This is a ton of information about education that I'm just so willing to pass around
          with absolutely no consideration of life at all
        </template>
      </Container>
    </div>
  </div>
</template>

<script>
import Container from '@/components/Container/Container.vue';

export default {
  name: 'TestPage.vue',
  components: { Container },
};
</script>

<style lang="scss" scoped>
.center_column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
}
.intro_container, .education_container {
  align-self: center;
  max-width: 1200px;
  min-height: 100px;
}
</style>
