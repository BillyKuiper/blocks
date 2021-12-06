<template>
  <h1 class="title">Welcome to the homepage!!</h1>
  <div class="container">
    <img src="../assets/transport.jpg" alt="">
  </div>
  <div class="content-container">
    <div class="row">
      <div class="col d-flex justify-content-center">
        <CategoryCard
            labelText="Nonsense"
            image="grass.png"
        />
      </div>
      <div class="col d-flex justify-content-center">
        <CategoryCard
            labelText="Valuable"
            image="gold.png"
        />
      </div>
      <div class="col d-flex justify-content-center">
        <CategoryCard
            labelText="Coins"
            image="emerald.png"
        />
      </div>
      <div class="col d-flex justify-content-center">
        <CategoryCard
            labelText="Fosil Fuels"
            image="coal.png"
        />
      </div>
      <div class="col d-flex justify-content-center">
        <CategoryCard
            labelText="Fluids"
            image="water.png"
        />
      </div>
      <div class="col d-flex justify-content-center">
        <CategoryCard
            labelText="All"
            image="all.png"
        />
      </div>
    </div>
    <div class="row" style="border: 1px">
      <div class="col-3" v-for="post in homeProducts">
        <ProductCard
            @add-to-shoppingcart="addShoppingCart(product)"
            :ProductImage="post.productImage"
            :ProductDescription="post.productDescription"
            :ProductTitle="post.productName"
            :ProductAddingDate="post.productAddingDate"
            :ProductPrice="post.productPrice"
            :ProductId="post.productId"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import CategoryCard from '../components/CategoryCard.vue'
import ProductCard from '../components/ProductCard.vue'
import axios from "axios";

export default {
  name: "Home",
  data(){
    return{
      homeProducts: []
    }
  },
  props:{
    posts: []
  },
  components:{
    Menu,
    CategoryCard,
    ProductCard
  },
  methods:{
    getPosts(){
      axios.get('https://localhost:44387/product/home')
          .then((response) => {
            this.homeProducts = response.data
          })
    },
    addShoppingCart(product){
      this.$emit('setProductInCart', product);
    }
  },
  created: function(){
    this.getPosts()
  },
}
</script>

<style scoped>
.container img {
  width: 100%;
}

.container {
  width: 40%;
  margin: 0 auto;
}
.row{
  margin-top: 10px;
  margin-right: 0;
  margin-left: 10px;
}
col{
  margin-left: auto;
  margin-right: auto;
}
.content-container{
  margin-left: auto;
  margin-right: auto;
}
.title{
  text-align: center;
}
</style>
