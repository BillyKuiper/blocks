<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#" @click="homeClicked()">
      <img src="../assets/square-blocks-outline.png" width="30" height="30" class="d-inline-block align-top" alt="">
      Blocks.Com
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <MenuItem
          @click="contactClicked()"
          class="item"
          labelText="Contact"/>
        <MenuItem
          @click="aboutClicked()"
          class="item"
          labelText="About"/>
        <MenuItem
          @click="productClicked()"
          class="item"
          labelText="Products"/>
      </ul>
    </div>
    <div class="form-inline" v-if="!this.logedIn">
      <router-link to="/login" class="btn btn-success">Login</router-link>
    </div>

    <div class="flex-container" v-else>
      <menu-dropdown
      :labelText="email"
      class="flex-container-dropdown"
      />
      <form class="form-inline">
        <button class="btn btn-danger" @click="logout">Logout</button>
      </form>
    </div>
    <Shoppingcart
    :shoppingCart="cart"
    />
  </nav>
</template>

<script>
import MenuItem from '../components/MenuItem.vue'
import Shoppingcart from "../components/Shoppingcart.vue";
import ChatBox from "./ChatBox";
import MenuDropdown from "./menuDropdown";

export default {
  props:{
    cart: [],
    logedIn: Boolean,
    email: String
  },
  components: {MenuDropdown, ChatBox, Shoppingcart, MenuItem },
  methods: {
    logout(){
      localStorage.clear();
      this.logedIn = false;
    },
    homeClicked () {
      this.$router.push('/')
    },
    contactClicked () {
      this.$router.push('/contact')
    },
    aboutClicked () {
      this.$router.push('/about')
    },
    loginClicked () {
      this.$router.push('/login')
    },
    productClicked(){
      this.$router.push('/products')
    }
  }
}
</script>

<style scoped>
form{
  list-style-type: none;
}
nav a{
  margin-left: 10px;
}
nav form{
  margin-right: 10px;
}
.flex-container {
  display: flex;
  flex-wrap: nowrap;
}
.flex-container-dropdown {
  margin-right: 10px;
}
</style>
