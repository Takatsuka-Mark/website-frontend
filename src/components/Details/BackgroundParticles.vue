<template>
  <Particles
  id="tsparticles"
  :options="{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: { value: '#000000' },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: { nb_sides: 5 },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.125,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false,
                mode: 'bubble',
              },
              onclick: {
                enable: false,
                mode: 'repulse',
              },
              resize: false,
            },
          },
          retina_detect: true,
        }"/>
</template>

<script>
import VueParticles from 'particles.vue';

export default {
  name: 'BackgroundParticles',

  mounted() {
    this.$nextTick(() => {
      this.initParticlesJS();
    });
  },
  methods: {
    initParticlesJS() {
      VueParticles(
        'particles-js', {
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: { value: '#000000' },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: { nb_sides: 5 },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.125,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false,
                mode: 'bubble',
              },
              onclick: {
                enable: false,
                mode: 'repulse',
              },
              resize: false,
            },
          },
          retina_detect: true,
        },
      );
    },
  },
};
</script>

<style scoped>
/* ---- reset ---- */
body {
  margin: 0;
  font: normal 75% Arial, Helvetica, sans-serif;
}

canvas {
  display: block;
  vertical-align: bottom;
}

/* ---- particles.js container ---- */
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
