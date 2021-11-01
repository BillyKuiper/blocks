<template>
  <div class="flex-container">
    <div class="product-image">
      <img :src="require('@/assets/' + product[0].productImage + '')" alt="productimage"/>
      <br>
      <h1>€{{product[0].productPrice}}</h1>
    </div>
    <div class="product-info">
      <h1 class="product-title">{{product[0].productName}}</h1>
      {{product[0].productDescription}}
      <table class="table">
        <thead>
        <tr>
          <td>
            Product Name:
          </td>
         <td>
           {{product[0].productName}}
         </td>
        </tr>
        <tr>
          <td>
            Available Since:
          </td>
          <td>
            {{product[0].productAddingDate}}
          </td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td></td>
          <td>
            <button class="btn btn-primary" @click.self="toCart()">
              Add to shoppingcart
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Product from "../classes/Product";

export default {
  name: "ProductDetail",
  props:{
    productId: Number
  },
  data(){
    return{
      product: [],
    }
  },
  created: function(){
    this.getProduct()
  },
  methods:{
    getProduct(){
      axios.get('https://localhost:44387/product/' + this.productId)
          .then((response) => {
            this.product = response.data;
          })
    },
    toCart(){
      //console.log(this.ProductDescription);
      var obj = new Product(this.product[0].productId,this.product[0].productName, this.product[0].productPrice, this.product[0].productImage, this.product[0].productAddingDate, this.product[0].productDiscription);
      this.$emit('setProductInCart', obj);
    }
    }
}
</script>

<style scoped>
.product-image{
  width: 500px;
}
.product-info{
  width: 740px;
}
.flex-container {
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  margin-left: 5%;
  margin-right: 3%;
  list-style: none;
  margin-top: 30px;
}
.product-title{
  text-decoration: underline 3px;
}
.product-info button{
  margin-left: auto;
  margin-right: auto;
}
</style>
