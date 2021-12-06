<template>
  <div class="shoppingcart">
    <a class="btn btn-light">
      <img @click="calculateTotalCart" class="shoppingcart-icon" src="../assets/shopping-cart.png" alt="ShoppingCart" data-toggle="modal" data-target="#exampleModal">
      {{shoppingCart.length}}
    </a>
  </div>

    <div @click.self="closeModal()" class="modal left fade" id="exampleModal" tabindex="" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <h1>Shoppingcart</h1>
            <table class="table" id="cart">
              <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Amount</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in shoppingCart">
                <td><img class="img-cart" :src="require('@/assets/' + item.product.productImage + '')" alt="Product Image"></td>
                <td>{{item.product.productName}}</td>
                <td>{{item.product.productPrice}}</td>
                <td>{{item.amount}}</td>
              </tr>
              <tr>
                <td></td>
                <td>Items: {{shoppingCart.length}}</td>
              </tr>
              <tr>
                <td></td>
                <td>Price: {{totalPriceCart.toFixed(2)}}</td>
              </tr>
              </tbody>
            </table>
            <div v-if="shoppingCart.length">
              <button class="btn btn-success" @click="toOverview" data-dismiss="modal">Checkout</button>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

</template>

<script>

export default {
  name: 'Shoppingcart',
  data(){
    return{
      totalPriceCart: 0,
      show: false
    }
  },
  props:{
    shoppingCart : []
  },
  computed: {
    totalPrice: Number,
    calculateTotalCart() {
      if (this.shoppingCart.length !== 0) {
        this.show = true;
        for (let i = 0; i < this.shoppingCart.length; i++) {
          this.totalPriceCart = (this.shoppingCart[i].product.productPrice * this.shoppingCart[i].amount) + this.totalPriceCart;
        }
        console.log(this.totalPriceCart);
      }
      else{
        this.totalPriceCart = 0;
      }
    }
  },
  methods:{
    closeModal(){
      this.show = false;
    },
    toOverview(){
      this.$router.push(
          {
            name: "Shoppingcart",
            params: {
              shoppingCartJson: JSON.stringify(this.shoppingCart)
            }
          }
      )
    }
  }
}
</script>

<style scoped>
.shoppingcart-icon{
  width: 40px;
  margin-right: 10px;
}

.modal.left .modal-dialog {
  position:fixed;
  right: 0;
  margin: auto;
  width: 500px;
  height: 100%;
  -webkit-transform: translate3d(0%, 0, 0);
  -ms-transform: translate3d(0%, 0, 0);
  -o-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0);
}

.modal.left .modal-content {
  height: 100%;
  overflow-y: auto;
}

.modal.right .modal-body {
  padding: 15px 15px 80px;
}

.modal.right.fade .modal-dialog {
  left: -320px;
  -webkit-transition: opacity 0.3s linear, left 0.3s ease-out;
  -moz-transition: opacity 0.3s linear, left 0.3s ease-out;
  -o-transition: opacity 0.3s linear, left 0.3s ease-out;
  transition: opacity 0.3s linear, left 0.3s ease-out;
}

.modal.right.fade.show .modal-dialog {
  right: 0;
}

/* ----- MODAL STYLE ----- */
.modal-content {
  border-radius: 0;
  border: none;
}

.img-cart{
  width: 30px;
}
.btn btn-secondary .btn btn-success{
  margin: 0 !important;
}
</style>
