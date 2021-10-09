<template>
  <h1 class="title">Welcome to the homepage!</h1>
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
      <div class="col-3">
        <ProductCard
            ProductImage="emerald.png"
            ProductDescription="Shiny as ever"
            ProductTitle="Emeralds"
        />
      </div>
      <div class="col-3">
        <ProductCard
            ProductImage="gold.png"
            ProductDescription="Pure Gold."
            ProductTitle="Gold"
        />
      </div>
      <div class="col-3">
        <ProductCard
            ProductImage="coal.png"
            ProductDescription="Got BBQ?"
            ProductTitle="Coal"
        />
      </div>
      <div class="col-3">
        <ProductCard
            ProductImage="water.png"
            ProductDescription="Water that flows within one m3!"
            ProductTitle="H2O"
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
      //Work in Progress
      axios.get('https://localhost:44387/product')
          .then((response) => {
            this.posts = response.data
          })
    }
  }
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
