<template>
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{labelText}}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <router-link class="dropdown-item" to="/myorders" >My Orders</router-link>
      <router-link class="dropdown-item" to="/changepassword">Change Password</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuDropdown",
  props:{
    labelText: ''
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
