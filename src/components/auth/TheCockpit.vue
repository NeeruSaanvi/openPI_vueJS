<template>

  <div class="row">

    <div class="col-8 col-sm-12">
      <router-link to="/organisations"></router-link>
    </div>
  </div>

</template>

<script>

export default {

  data() {
  },
  created() {
    console.log(this.$store.getters.isAuthenticated);
  }
};
</script>

<style>

</style>