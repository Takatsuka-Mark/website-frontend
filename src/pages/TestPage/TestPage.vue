<template>
  <div>
    <div class="center_column">
      <!-- Intro -->
      <Container class="intro_container" HT="true">
        <template slot="ht_title">
          ◝ʕ •ᴥ• ʔ◜
        </template>
        <template slot="ht_body">
          <h1>Welcome!</h1>
        </template>
      </Container>
      <!-- Projects -->
      <Container class="projects_container" HT="true">
        <template slot="ht_title">
          Projects
        </template>
        <template slot="ht_body">
          <router-link to="/app/math" class="sidebar-link">
            <h2>Math Interpreter</h2>
          </router-link>
        </template>
      </Container>
      <!-- Employment -->
      <Container class="employment_container" HT_Right="true">
        <template slot="ht_title">
          Employment
        </template>
        <template slot="ht_body">
          <h2><b>IBM</b></h2>
          <h3>DevOps Intern</h3>
          <h4>May. 2021 - Aug. 2021</h4>
          <br>
          <h2><b>SecureCloudDB</b></h2>
          <h3>Software Engineering Intern</h3>
          <h4>May. 2020 - Dec. 2020</h4>
        </template>
      </Container>
      <!-- Education -->
      <Container class="education_container" HT="true">
        <template slot="ht_title">
          Education
        </template>
        <template slot="ht_body">
          <h2><b>Rochester Institute of Technology (RIT)</b></h2>
          <h3>B.S. in Computer Science</h3>
          <h3>Minor in Mathematics</h3>
          <h4>Aug. 2018 - Dec. 2021</h4>
        </template>
      </Container>
      <!-- Contact -->
      <Container class="contact_container" HT_Right="true">
        <template slot="ht_title">
          Contact
        </template>
        <template slot="ht_body">
          Connect with me on LinkedIn at
          <a :href="'//www.linkedin.com/in/mark-takatsuka'" target="_blank">
            linkedin.com/in/mark-takatsuka
          </a>
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

<style src="./TestPage.scss" lang="scss"/>
