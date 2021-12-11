<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  created() {
    const currentPath = this.$router.history.current.path;

    if (currentPath === '/' || currentPath === '/app') {
      this.$router.push('/test');
    }
  },
};
</script>

<style src="./styles/new_theme.scss" lang="scss" />
<!--<style src="./styles/theme.scss" lang="scss" />-->
