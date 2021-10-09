<template>
  <div class="card">
    <div class="card-body">
      <form>
        <FormTextInput/>
        <PasswordInput/>
        <CheckboxInput/>
        <SubmitButton/>
      </form>
    </div>
  </div>
</template>

<script>
import FormTextInput from './FormTextInput.vue'
import PasswordInput from '@/components/LoginForm/PasswordInput'
import CheckboxInput from '@/components/LoginForm/CheckboxInput'
import SubmitButton from '@/components/LoginForm/SubmitButton'

export default {
  name: 'Card',
  components: {
    FormTextInput,
    PasswordInput,
    CheckboxInput,
    SubmitButton
  }
}
</script>

<style scoped>
.card{
  width: 30%;
  margin-left: auto;
  margin-right: auto;
}
</style>
