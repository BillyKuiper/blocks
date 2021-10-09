<template>
  <div class="form-group">
    <a class="float-right" href="#">Forgot </a>
    <label>your password?</label>
    <input class="form-control" placeholder="******" type="password">
  </div>
</template>

<script>
export default {
  name: 'PasswordInput'
}
</script>

<style scoped>
a{
  color: dimgray;
  text-decoration: grey;
}
a:hover{
  color: red;
}
</style>
