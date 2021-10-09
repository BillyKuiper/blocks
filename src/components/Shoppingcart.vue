<template>
  <div class="shoppingcart">
    <img class="shoppingcart-icon" src="../assets/shopping-cart.png" alt="ShoppingCart" data-toggle="modal" data-target="#exampleModal">
  </div>

    <div class="modal left fade" id="exampleModal" tabindex="" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <h1>Shoppingcart</h1>
            <table class="table">
              <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Amount</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="product in shoppingCart">
                <td><img class="img-cart" :src="require('@/assets/' + product.productImage + '')" alt="Product Image"></td>
                <td>{{product.productName}}</td>
                <td>{{product.productPrice}}</td>
                <td>1</td>
              </tr>
              </tbody>
            </table>

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
  props:{
    shoppingCart : []
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
</style>
