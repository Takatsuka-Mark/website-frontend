<template>
  <div id="app">
    <div class="w3-top nav">
      <div class="w3-bar" id="NavBar">
        <router-link to="/" class="w3-bar-item w3-button">Home</router-link>
        <router-link to="/drone" class="w3-bar-item w3-button">Drone</router-link>
        <router-link to="/math" class="w3-bar-item w3-button">Math</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import "assets/styles/w3.scss";
@import "assets/styles/default.scss";
/*@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
