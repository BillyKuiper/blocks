<template>
  <div class="container">
      <div v-for="post in posts">
        <ProductCard
          @add-to-shoppingcart="addShoppingCart(post)"
          :ProductImage="post.productImage"
          :ProductDescription="post.productDescription"
          :ProductTitle="post.productName"
          :ProductAddingDate="post.productAddingDate"
          :ProductPrice="post.productPrice"
          :ProductId="post.productId"
        />
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import ProductCard from '../components/ProductCard.vue'
import Shoppingcart from '../components/Shoppingcart.vue'

export default {
  name: 'Product',
  components:{
    ProductCard
  },
  data(){
    return{
      posts: [],
    }
  },
  methods: {
    getPosts(){
       axios.get('https://localhost:44387/product')
      .then((response) => {
        this.posts = response.data
      })
    },
    addShoppingCart(product){
      //modal laten tonen met winkelwagen
      //console.log(product);
      if (product){
        this.$emit('setProductInCart', product);
      }
    }
  },
  created: function(){
    this.getPosts()
  },

}
</script>

<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;
}
.container > div {
padding: 10px;
}
</style>
