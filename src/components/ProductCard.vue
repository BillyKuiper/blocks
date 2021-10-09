<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" v-if="ProductImage" :src="require('@/assets/' + ProductImage + '')" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ ProductTitle }}</h5>
      <p class="card-text">{{ ProductDescription }}</p>
      <a href="#" class="btn btn-primary"
      @click="toCart()">Add to Shoppingcart</a>
    </div>
  </div>
</template>

<script>
import Product from "../classes/Product.js";

export default {
  props: {
    ProductTitle: String,
    ProductDescription: String,
    ProductImage: String,
    ProductPrice: Number,
    ProductAddingDate: String,
    ProductId: Number
  },
  methods:{
    toCart(){
      //console.log(this.ProductDescription);
      var obj = new Product(this.ProductId,this.ProductTitle, this.ProductPrice, this.ProductImage, this.ProductAddingDate, this.ProductDescription);
      this.$parent.addShoppingCart(obj);
    }
  }
}
</script>

<style scoped>
.card{
  margin-top: 10px;
  padding-bottom: 10px;
}
</style>
