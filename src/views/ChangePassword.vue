<template>
<h1>Change Password</h1>
  <div class="alert alert-success" role="alert" v-if="showMessage">
    Your password changed successfully!
  </div>
  <div class="formcontainer">
    <form @submit.prevent="changePW()" >
      <div class="form-group">
        <label>Current Password</label>
        <input type="password" class="form-control" id="oldPassword" placeholder="Current Password" v-model="oldPW">
      </div>
      <div class="form-group">
        <label>New Password</label>
        <input type="password" class="form-control" id="newPassword" placeholder="New Password" v-model="newPW">
      </div>
      <div class="form-group">
        <label>Confirm Password</label>
        <input type="password" class="form-control" id="confirmNewPassword" placeholder="Confirm Password" v-model="confirmPW">
      </div>
      <br>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "ChangePassword",
  data(){
    return{
      oldPW : '',
      newPW: '',
      confirmPW: '',
      showMessage: null
    }
  },
  methods:{
    async changePW(){
      if (this.oldPW === '' || this.oldPW === null || this.newPW === '' || this.newPW === null
          || this.confirmPW === '' || this.confirmPW === null)
      {
        console.log("Submit! maar niet valide");
      }
      else{
        if (this.newPW === this.confirmPW){
          const data = {
            oldPW: this.oldPW,
            newPW: this.newPW,
            confirmPW: this.confirmPW
          }
          //voer AXIOS PUT uit
          await axios.put('https://localhost:44319/Account/changePassword', data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then((response) => {
            console.log(response);
            if (response.data === true){
              this.showMessage = true
              this.confirmPW = '';
              this.oldPW = '';
              this.newPW = '';
            }
            else{
              this.showMessage = false;
              alert("Please make sure the passwords match their requirements! :(");
            }
          })

        }
        else{
          console.log("Passwords dont match");
        }
      }

    }
  }
}
</script>

<style scoped>

.formcontainer{
  width: 20%;
  margin-right: auto;
  margin-left: auto;
  border: solid 1px;
  padding: 5px;
}
</style>
