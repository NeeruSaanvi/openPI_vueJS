<template>

  <div id="login">

    <!--    <div class="container h-100">-->
    <!--      <div class="row h-100 justify-content-center align-items-center">-->
    <!--        <form class="col-12">-->
    <!--          <div class="form-group">-->
    <!--            <label for="formGroupExampleInput">Example label</label>-->
    <!--            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">-->
    <!--          </div>-->
    <!--          <div class="form-group">-->
    <!--            <label for="formGroupExampleInput2">Another label</label>-->
    <!--            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">-->
    <!--          </div>-->
    <!--        </form>-->
    <!--      </div>-->
    <!--    </div>-->

    <main class="form-signin w-100 m-auto">

      <form @submit.prevent="submit()">

        <h1 class="h3 mb-3 fw-normal">Login</h1>

        <div class="form-floating">
          <input
              id="floatingInput"  v-model="form.email"  type="email" class="form-control"
              placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
              id="floatingPassword" v-model="form.password" type="password" class="form-control"
              placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
      </form>

      <!--      <alert-msg v-if="msg" :msg="msg" :classAlert="classAlert"></alert-msg>-->
      <p v-if="showError" id="error">Username or Password is incorrect</p>

      <hr>

      <div class="float-end">

        <router-link to="/signup">Create new account</router-link>
      </div>

    </main>
  </div>

  <!--  &lt;!&ndash; ======= Login Section ======= &ndash;&gt;-->
  <!--  <section id="login" class="login section-bg">-->
  <!--    <div class="container" data-aos="fade-up">-->

  <!--      <div class="section-title">-->
  <!--        <h2>Login</h2>-->
  <!--      </div>-->

  <!--      <div class="row">-->

  <!--        <div class="col-lg-3"></div>-->

  <!--        <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="200">-->

  <!--          <form @submit.prevent="callLogin()">-->

  <!--            <div class="form-group">-->
  <!--              <label for="email">Email address</label>-->
  <!--              <input type="text"-->
  <!--                     class="form-control"-->
  <!--                     name="email"-->
  <!--                     id="email"-->
  <!--                     v-model="email">-->
  <!--            </div>-->

  <!--            <div class="form-group">-->
  <!--              <label for="password">Password</label>-->
  <!--              <input type="password"-->
  <!--                     class="form-control"-->
  <!--                     name="password"-->
  <!--                     id="password"-->
  <!--                     v-model="password">-->
  <!--            </div>-->

  <!--            <alert-msg v-if="msg" :msg="msg" :classAlert="classAlert"></alert-msg>-->

  <!--            <div class="row">-->
  <!--              <div class="col-12 col-sm-4">-->
  <!--                <button type="submit" class="btn btn-primary">Login</button>-->
  <!--              </div>-->
  <!--              <div class="col-12 col-sm-8 float-right">-->
  <!--                <router-link to="/signup">Create account</router-link>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </form>-->
  <!--        </div>-->

  <!--        <div class="col-lg-3"></div>-->

  <!--      </div>-->

  <!--    </div>-->
  <!--  </section>&lt;!&ndash; End Team Section &ndash;&gt;-->


  <!--  <section id="hero" class="d-flex align-items-center">-->

  <!--    <div class="container">-->
  <!--      <div class="row">-->

  <!--        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"-->
  <!--             data-aos="fade-up" data-aos-delay="200">-->

  <!--          <h1>Login</h1>-->
  <!--        </div>-->

  <!--        <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="200">-->

  <!--          <form @submit.prevent="callLogin()">-->

  <!--            <div class="form-group">-->
  <!--              <label for="email">Email address</label>-->
  <!--              <input type="text"-->
  <!--                     class="form-control"-->
  <!--                     name="email"-->
  <!--                     id="email"-->
  <!--                     v-model="email">-->
  <!--            </div>-->

  <!--            <div class="form-group">-->
  <!--              <label for="password">Password</label>-->
  <!--              <input type="password"-->
  <!--                     class="form-control"-->
  <!--                     name="password"-->
  <!--                     id="password"-->
  <!--                     v-model="password">-->
  <!--            </div>-->

  <!--            <alert-msg v-if="msg" :msg="msg" :classAlert="classAlert"></alert-msg>-->

  <!--            <div class="row">-->
  <!--              <div class="col-12 col-sm-4">-->
  <!--                <button type="submit" class="btn btn-primary">Login</button>-->
  <!--              </div>-->
  <!--              <div class="col-12 col-sm-8 float-right">-->
  <!--                <router-link to="/signup">Create account</router-link>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </form>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->

  <!--  </section>&lt;!&ndash; End Hero &ndash;&gt;-->

</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "LoginView",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["Login"]),

    async submit() {
      const User = new FormData();
      User.append("username", this.form.username);
      User.append("password", this.form.password);
      try {
        await this.Login(User);
        // this.$router.push("cockpit");
        this.$router.push("home");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>

<style scoped>

body {
  min-height: 100vh;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>