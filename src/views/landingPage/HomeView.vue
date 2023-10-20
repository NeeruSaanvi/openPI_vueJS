<template>

  <div id="landing-page-home">

    <hero></hero>

    <lp-content></lp-content>

<!--    <div id="preloader"></div>-->
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>

  </div>

</template>

<script>

import Hero from './HeroView.vue';
import LpContent from './ContentView.vue';

export default {
  // name: 'landing-page-home-view',
  components: {Hero, LpContent},
};
</script>

<style scoped></style>