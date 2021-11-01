<template>
  <Menu
      :cart="Cart"
      :logedIn="logedIn"
      :email="email"
  />
  <router-view
  v-on:setProductInCart="setShoppingCart"
  v-on:login="login"
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
      TotalPrice: Number,
      logedIn: false,
      email: ''
    }
  },
  methods:{
    setShoppingCart(product){
      this.Cart.push(product);
    },
    login(data){
      localStorage.setItem('token',data.token);
      this.logedIn = true;
      this.email = data.email;
      this.$router.push("/");
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
