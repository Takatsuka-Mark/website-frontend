<template>
  <div>
    <div class="center_column">
      <!-- Intro -->
      <Container class="intro_container" HT="true">
        <template slot="ht_title">
          ◝ʕ •ᴥ• ʔ◜
        </template>
        <template slot="ht_body">
          <h2>Welcome!</h2>
        </template>
      </Container>
      <!-- Employment -->
      <Container class="employment_container" HT_Right="true">
        <template slot="ht_title">
          Employment
        </template>
        <template slot="ht_body">
          employment
        </template>
      </Container>
      <!-- Projects -->
      <Container class="projects_container" HT="true">
        <template slot="ht_title">
          Projects
        </template>
        <template slot="ht_body">
          projects
          <router-link to="/app/math" class="sidebar-link">
            This is the link to the project
          </router-link>
        </template>
      </Container>
      <!-- Education -->
      <Container class="education_container" HT_Right="true">
        <template slot="ht_title">
          Education
        </template>
        <template slot="ht_body">
          education
        </template>
      </Container>
      <!-- Contact -->
      <Container class="contact_container" HT="true">
        <template slot="ht_title">
          Contact
        </template>
        <template slot="ht_body">
          contact
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

.intro_container, .education_container,
.employment_container, .contact_container,
.projects_container {
  align-self: center;
  max-width: 1200px;
  min-height: 100px;
}
</style>
