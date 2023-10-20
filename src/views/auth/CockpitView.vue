<template>

  <div id="theCockpit">

    <nav-bar></nav-bar>

    <main class="container">

      <div class="bg-body-tertiary p-5 rounded">

        <router-view></router-view>
      </div>
    </main>

    <footer></footer>

  </div>

</template>

<script>

import NavBar from "@/components/auth/NavBar.vue";

export default {
  components: {
    NavBar
  }

};
</script>

<style scoped></style>