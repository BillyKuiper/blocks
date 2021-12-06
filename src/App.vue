<template>
  <Menu
      :cart="Cart"
      :logedIn="logedIn"
      :email="email"
  />
  <router-view
  v-on:setProductInCart="setShoppingCart"
  v-on:login="login"
  :logedIn="logedIn"
  />
  <ChatBox/>
  <Footer/>
</template>
<script>
import Menu from '../src/components/Menu.vue'
import Footer from '../src/components/Footer.vue'
import ChatBox from "./components/ChatBox";
export default {
  name: 'App',
  components: {
    ChatBox,
    Menu,
    Footer
  },
  data(){
    return{
      Cart: [],
      CartComputed: [],
      TotalPrice: Number,
      logedIn: false,
      email: ''
    }
  },
  methods:{
    setShoppingCart(product){
      //Elke keer als er een product toegevoegd wordt
      //Kijk of product al bestaat
      //zo niet, voeg normaal toe
      //zo wel, voeg amount toe
      //this.Cart.push(product)
      const productCart = {product, amount:1};

      if (this.Cart.length === 0){
        this.Cart.push(productCart);
        console.log("was leeg, nu niet meer");
      }
      else{
        console.log("niet het eerste product")
        for (let i = 0; i < this.Cart.length; i++) {
          if (product.productId === this.Cart[i].product.productId){
            console.log("was hetzelfde!");
            //update hier amount
            let objIndex = this.Cart.findIndex((obj => obj.product.productId == this.Cart[i].product.productId));
            console.log(objIndex);
            this.Cart[objIndex].amount++;
            console.log(this.Cart);
            return null;
          }
        }
        this.Cart.push(productCart);
      }

    },
    login(data){
      localStorage.setItem('token',data.token);
      this.logedIn = true;
      this.email = data.user.email;
      this.$router.push("/");
    },
    emptyCart(){
      this.Cart = [];
      this.CartComputed = []
      this.totalPrice = 0;
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
