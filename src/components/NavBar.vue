<template>

  <!--    <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (light)">-->
  <!--      <svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#sun-fill"></use></svg>-->
  <!--      <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>-->
  <!--    </button>-->
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

    <div class="container-fluid">

      <a class="navbar-brand" href="#"><img src="/src/assets/img/logo_pi.png" alt="PI" width="30" height="30"></a>
      <button
          class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <!--          <li class="nav-item">-->
          <!--            <a class="nav-link active" aria-current="page" href="#">Home</a>-->
          <!--          </li>-->

          <li>
            <router-link class="nav-link px-2 text-secondary" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="nav-link px-2 text-white" to="/">Features</router-link>
          </li>

          <!--          <li class="nav-item">-->
          <!--            <a class="nav-link" href="#">Link</a>-->
          <!--          </li>-->
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <!--        <form class="d-flex" role="search">-->
        <!--          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">-->
        <!--          <button class="btn btn-outline-success" type="submit">Search</button>-->
        <!--        </form>-->
        <button
            v-if="!isLoggedIn" type="button"
            class="btn btn-outline-light me-2"
        >
          <router-link class="nav-link" to="/login">Login</router-link>
        </button>
        <button
            v-if="!isLoggedIn" type="button"
            class="btn btn-warning"
        >
          <router-link class="nav-link" to="/signup">Signup</router-link>
        </button>
        <button
            v-if="isLoggedIn" type="button"
            class="btn btn-warning"
        >
          <a class="nav-link" @click.prevent="logout()">Logout</a>
        </button>
      </div>
    </div>
  </nav>

  <!--  <header class="p-3 text-bg-dark">-->
  <!--    <div class="container">-->
  <!--      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">-->
  <!--        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">-->
  <!--          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>-->
  <!--        </a>-->

  <!--        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">-->
  <!--          <li><router-link class="nav-link px-2 text-secondary" to="/">Home</router-link></li>-->
  <!--          <li><router-link class="nav-link px-2 text-white" to="/">Features</router-link></li>-->
  <!--          <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>-->
  <!--          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>-->
  <!--          <li><a href="#" class="nav-link px-2 text-white">About</a></li>-->
  <!--        </ul>-->

  <!--        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">-->
  <!--          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">-->
  <!--        </form>-->

  <!--        <div class="text-end">-->
  <!--          <button type="button"-->
  <!--                  class="btn btn-outline-light me-2"><router-link class="nav-link" to="/login">Login</router-link></button>-->
  <!--&lt;!&ndash;          <button type="button" class="btn btn-warning">Sign-up</button>&ndash;&gt;-->
  <!--          <button type="button"-->
  <!--                  class="btn btn-warning"><router-link class="nav-link" to="/signup">Signup</router-link></button>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </header>-->

</template>

<script>

export default {
  components: {},
  // props: ["isLoggedIn"],
  data() {
    return {
      brand: import.meta.env.VITE_APP_APPNAME
    };
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>

.navbar {
  position: fixed;
}
</style>