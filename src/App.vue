<template>
  <events-2021 />
  <page-footer />
</template>

<script>
import Events2021 from './components/events-2021'
import PageFooter from './components/pageFooter.vue'

export default {
  name: 'App',
  components: {
    Events2021,
    PageFooter,
  }
}
</script>

<style>
html {
  background: #eee;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

ol, ul {
  padding-inline-start: 0;
}
</style>
