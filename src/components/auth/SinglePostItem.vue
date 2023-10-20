<template>

  <div v-if='post' class="row post mt-5 pt-3 bg-white from-wrapper">

    <div class="col-12 col-sm-4 text-center">
      <img
v-if="post.post_featured_image !== ''"
           class="img-fluid"
           :src="'http://localhost:8081/assets/uploads/' + post.post_featured_image"
           alt="">
      <img
v-else
           class="img-fluid"
           :src="imgPlaceholder"
           alt="">

    </div>

    <div class="col-12 col-sm-8">
      <h4>{{ post.post_title }} </h4>
      <p>{{ post.post_description }} </p>
    </div>

    <div class="col-12 mt-3">
      <router-link class="btn btn-outline-success mr-2" to="/">All posts</router-link>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      post: false,
      imgPlaceholder: "http://via.placeholder.com/300"
    };
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      const id = this.$route.params.id;
      this.$api.get('/blog/' + id)
      .then(res => {
        this.post=res.data;
      })
      .catch(err=> {
        console.log(err.response);
        // this.msg = err.response.data.messages.error;
        // this.classAlert = "danger"
      });
    }
  }
};
</script>

<style>

</style>