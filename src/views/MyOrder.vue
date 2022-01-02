<template>
  <H1>My Orders</H1>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#OrderNumber</th>
      <th scope="col">Date</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="order in orders">
      <th scope="row">{{order.orderId}}</th>
      <td>{{order.orderDate}}</td>
      <td><a class="btn btn-danger" @click="deleteOrder(order.orderId)">Delete</a></td>
    </tr>
    </tbody>
  </table>
</template>

<script>

import axios from "axios";
export default {
  name: "MyOrder",
  data(){
    return{
      orders: []
    }
  },
  created() {
    axios.get('https://localhost:44387/Order/allOrders', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      this.orders = response.data;
      console.log(this.orders);
    });
  },
  methods:{
    deleteOrder(orderNO){
      axios.delete('https://localhost:44387/Order/removeOrder', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        data: {orderId: orderNO}
      })
      .then(() => {
        this.$router.push('/');
      });
    }
  }
}
</script>

<style scoped>

</style>
