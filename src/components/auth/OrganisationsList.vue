<template>

  <div class="row">

    <div v-if="organisations.length > 0" class="col-12 mt-5 pt-3 pb-3 bg-white from-wrapper">

      <h3>Organisations</h3>

      <hr/>
      <organisation-item
v-for="(organisation, index) in organisations"
                 :key="organisation.uuid"
                 :index="index"
                 :organistaion="organisation"
      ></organisation-item>
    </div>
  </div>


</template>

<script>

import OrganisationItem from "@/components/auth/OrganisationItem.vue";

export default {

  components: {OrganisationItem},
  data() {
    return {
      msg: "",
      classAlert: null,
      organisation_uuid: null,
      organisation_index: null,
      organisations: [],
    };
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      this.$api
          .get(import.meta.env.VITE_URL_ORGANISATIONS)
          .then(res => {
            console.log(res.data);
            this.organisations = res.data;
          })
          .catch(err => {
            console.log(err.data);
            this.msg = err.response.data.messages.error;
            this.classAlert = "danger";
          });
    },
  }
};
</script>

<style>

</style>