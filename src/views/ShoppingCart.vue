<template>
<h1>Shoppingcart</h1>
  <table class="table">
    <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Amount</th>
      <th scope="col">Price</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in shoppingCart">
      <th><img class="img-cart" :src="require('@/assets/' + item.product.productImage + '')" alt="Product Image"></th>
      <td>{{item.product.productName}}</td>
      <td>{{item.amount}}</td>
      <td>{{item.product.productPrice}}</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td><b>Total Price:</b> {{totalPriceCart}}</td>
    </tr>
    </tbody>
  </table>
  <button v-if="this.$root.logedIn" class="btn btn-success">Payment</button>
</template>

<script>
export default {
  name: "ShoppingCart",
  data(){
    return{
      shoppingCart: [],
      totalPriceCart: 1
    }
  },
  props:{
    logedIn: Boolean,
    shoppingCartJson : ''
  },
  mounted() {
    this.convert();
  },
  methods:{
    convert(){
      this.shoppingCart = JSON.parse(this.shoppingCartJson);
      for (let i = 0; i < this.shoppingCart.length; i++) {
        this.totalPriceCart = (this.shoppingCart[i].product.productPrice * this.shoppingCart[i].amount) + this.totalPriceCart;
      }
    }
  }

}
</script>

<style scoped>
.table{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.img-cart{
  width: 100px;
}
</style>
