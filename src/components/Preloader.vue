<template>
  <div class="preloader">
    <div class="preloader__status">
      <div status class="preloader__status-text">I'm {{loaded}} % done!</div>
      <div class="preloader__status-loader">
        <div loader :style="loadStyle" class="preloader__status-bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Preloader',
  data: function () {
    return {
      loaded: 0,
      loading: null,
      loadStyle: {
        width: '0%'
      },
      statusElem: $('[status]'),
      loader: $('[loader]'),
      body: $('body')
    }
  },
  mounted () {
    this.preloader = $(this.$el)
    this.removeScrolling()
    this.startLoading()
  },
  watch: {
    loaded () {
      this.loadStyle.width = `${this.loaded}%`
    }
  },
  methods: {
    removeScrolling () {
      this.body.css('overflow', 'hidden')
    },
    startLoading () {
      this.loading = setInterval(this.load, 20)
    },
    load () {
      this.loaded < 100 ? this.loaded++ : this.doneLoading()
    },
    doneLoading () {
      clearInterval(this.loading)
      this.updateStatus()
    },
    updateStatus () {
      this.statusElem.text('Lets get crazay !')
      this.loader.fadeOut()
      this.animatePreloader()
    },
    animatePreloader () {
      const app = this
      const height = this.preloader.height()
      const properties = {
        'margin-top': `-${height}`
      }
      const options = {
        duration: 1000,
        easing: 'swing',
        complete () {
          app.removePreloader()
        }
      }
      this.preloader.delay(500).animate(properties, options)
    },
    removePreloader () {
      this.preloader.remove()
      this.body.removeAttr('style')
      this.animateWebsite()
    },
    animateWebsite () {
      console.log('lets get pretty')
    }
  }
}
</script>

<style scoped lang="less">
  /*@import 'https://fonts.googleapis.com/css?family=Raleway';*/
  @primary-color: #3498db;

  .preloader{
    width:100%;
    height:100vh;
    background: @primary-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    color: white;
    font-family: 'Raleway', sans-serif;
    position: relative;
  &__status{
     width: 100%;
     display:flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;

   }
  &__status-text{
     font-size: 40px;
     font-family: 'Raleway', sans-serif;
     margin-bottom:20px;
   }
  &__status-loader{
     width: 100%;
     height:3px;
   }
  &__status-bar{
     background: white;
     height: 100%;
   }
  }
  .frontpage{
    height: 100vh;
    background: #34495e;
  }
  .frontpage__title{
    color: white;
  }

</style>
