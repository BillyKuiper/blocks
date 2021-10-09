<template>
  <h1>Login</h1>
  <Card/>
</template>

<script>
import Card from '@/components/LoginForm/Card'
export default {
  name: 'Login',
  components: {
    Card
  }
}
</script>

<style scoped>
h1{
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
