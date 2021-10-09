<template>
  <Menu
      :cart="Cart"
  />
  <router-view
  v-on:setProductInCart="setShoppingCart"
  />
  <Footer/>
</template>
<script>
import Menu from '../src/components/Menu.vue'
import Footer from '../src/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  },
  data(){
    return{
      Cart: [],
    }
  },
  methods:{
    setShoppingCart(product){
      this.Cart.push(product);
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
