<template>
  <!--Navigation-->
  <div class="homepage">

    <!--    <div :style="bImg" class="parallax-image-home w3-display-container w3-opacity-min" id="home">-->
    <div class="parallax-image-home w3-display-container w3-opacity-min" id="home">
<!--      :style="{'backgroundImage': 'url(${publicPath}/assets/images/skyline/forest-mountains-fog-clouds-9754.jpg)'}"-->
      <div class="w3-display-middle" style="white-space:nowrap;">
        <span class="w3-center w3-padding-large w3-black text-extra-large w3-wide w3-animate-opacity">Welcome!</span>
      </div>
    </div>

    <!--Bars-->
    <div class="w3-content w3-container padding-64" id="about">
      <p class="w3-large w3-center w3-padding-16">Programming Languages:</p>
      <p class="w3-wide">Python</p>
      <div class="w3-light-grey">
        <div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:90%">90%</div>
      </div>

      <p class="w3-wide">C / C++ / C#</p>
      <div class="w3-light-grey">
        <div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:75%">75%</div>
      </div>

      <p class="w3-wide">Java</p>
      <div class="w3-light-grey">
        <div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:75%">75%</div>
      </div>

      <p class="w3-wide">Assembly</p>
      <div class="w3-light-grey">
        <div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:60%">60%</div>
      </div>

      <!--    <p class="w3-wide">CSS</p>-->
      <!--    <div class="w3-light-grey">-->
      <!--        <div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:10%">10%</div>-->
      <!--    </div>-->
    </div>

    <!--Divide-->
    <div class="w3-row w3-center w3-dark-grey w3-padding-16">
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">Python</span><br>
      </div>
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">C / C++ / C#</span><br>
      </div>
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">Java</span><br>
      </div>
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">Go</span><br>
      </div>
    </div>

    <div class="parallax-image-projects w3-display-container w3-opacity-min">
    </div>
    <div class="w3-content w3-container padding-64" id="projects">
      <h3 class="w3-center">My Projects</h3>
      <p class="w3-center">These are a few of my latest projects.<br>Click to see more details!</p>

      <div class="w3-row-padding w3-center">
        <div class="w3-col m4">
          <router-link to="/drone">
            <img src="../../public/assets/images/3D_Drone/V3-2/ProfileSquare.png" style="width:100%" class="w3-hover-opacity" alt="3D Drone Project">
          </router-link>
        </div>
      </div>
    </div>

    <!--  footer-->
    <div class="w3-center w3-dark-gray w3-padding-64" id="contact">
      <p>Let's get in contact!</p>
      <div class="w3-xlarge w3-section">
        <a href="https://github.com/Takatsuka-Mark"><i class="fa fa-github w3-hover-opacity"></i></a>
        <a href="https://www.linkedin.com/in/mark-takatsuka"><i class="fa fa-linkedin w3-hover-opacity"></i></a>
      </div>
      <a href="mailto:mrt9583@rit.edu">mrt9583@rit.edu</a>
      <p></p>
      <a href="mailto:taktasuka.mark@gmail.com">taktasuka.mark@gmail.com</a>
    </div>
  </div>
  <!--  <div id="app">-->

  <!--&lt;!&ndash;    <div id="nav">&ndash;&gt;-->
  <!--&lt;!&ndash;      <router-link to="/">Home</router-link>&ndash;&gt;-->
  <!--&lt;!&ndash;      <router-link to="/about">About</router-link>&ndash;&gt;-->
  <!--&lt;!&ndash;    </div>&ndash;&gt;-->
  <!--&lt;!&ndash;    <img src="./assets/logo.png">&ndash;&gt;-->
  <!--&lt;!&ndash;    <router-view/>&ndash;&gt;-->
  <!--&lt;!&ndash;    <h1>{{title}}</h1>&ndash;&gt;-->
  <!--&lt;!&ndash;    Hello from app&ndash;&gt;-->
  <!--&lt;!&ndash;    <router-view/>&ndash;&gt;-->
  <!--&lt;!&ndash;    <Home/>&ndash;&gt;-->
  <!--  </div>-->
</template>

<script>
// import Home from './components/Home/Home.vue'
//
// export default {
//   name: 'App',
//   components: { Home }
// }
// import background from 'public/assets/images/skyline/forest-mountains-fog-clouds-9754.jpg'
export default {
  name: 'Homepage',
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style scoped lang="scss">
  /*#app {*/
  /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*  -webkit-font-smoothing: antialiased;*/
  /*  -moz-osx-font-smoothing: grayscale;*/
  /*  text-align: center;*/
  /*  color: #2c3e50;*/
  /*  margin-top: 60px;*/
  /*}*/

  @import "src/assets/styles/w3.scss";
  @import "src/assets/styles/default.scss";
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

  body, h3 {font-family: "Lato", sans-serif;}
  body, html {
    height: 100%;
    color: #777;
    line-height: 1.8;
  }

  .homepage{
    font-family: "Lato", sans-serif;
    height: 100%;
    color: #777;
    line-height: 1.8;
  }

  .parallax-image-home, .parallax-image-projects{
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .parallax-image-home{
    background-image: url("../../public/assets/images/skyline/forest-mountains-fog-clouds-9754.jpg");
    height: 100vh;
    width: 100vw;
  }

  .parallax-image-projects{
    background-image: url("../../public/assets/images/skyline/rocky-mountain-671658.jpg");
    height: 100vh;
    width: 100vw;
    /*max-width: 100%;*/
    /*max-height: 100vh;*/
    /*min-height: 400px;*/
  }
</style>
