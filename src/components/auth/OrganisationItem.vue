<template>
  <div class="row organisation mb-5">

    <div class="col-12 col-sm-12">
      <h4>{{ organisation.organisation_title }} </h4>
      <p>{{ organisation.text }} </p>
    </div>

    <div class="col-12 mt-3">
      <router-link class="btn btn-outline-success mr-2" :to="'/organisation/' + organisation.uuid">View</router-link>
      <button class="btn btn-outline-primary" @click="$emit('edit', organisation.uuid, index)">Edit
      </button>
      <button class="btn btn-outline-danger float-right" @click="$emit('delete', organisation.uuid, index)">Delete
      </button>
    </div>

    <div class="col-12">
      <hr/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["organisation", "index"]
};
</script>