<template>
  <div id="app">

    <flashMessage />

    <nav-bar />
    <div class="container">
      <router-view />
      <page-footer/>
    </div>

    <!--    <button-->
    <!--        class="btn btn-default"-->
    <!--        @click="-->
    <!--        this.$flashMessage.error({-->
    <!--          title: 'Message Without Icon',-->
    <!--          message: text,-->
    <!--          icon: false,-->
    <!--          clickable: false-->
    <!--        });-->
    <!--      "-->
    <!--    >-->
    <!--      WITHOUT ICON AND NOT TO BE CLICKED-->
    <!--    </button>-->
  </div>
</template>

<script>

import NavBar from "./components/NavBar.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
  components: {
    NavBar, PageFooter
  }
};

</script>

<style>
.container {
  padding-top: 40px;
}
</style>