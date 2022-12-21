<template>

  <div id="main-container" class="container my-14 mx-auto">
    <v-text-field v-model="inputData.firstName" label="First name"></v-text-field>
    <span style="color: red" v-if="!inputData.firstName">First name is required</span>

    <v-text-field v-model="inputData.lastName" label="Last name"></v-text-field>
    <span style="color: red" v-if="!inputData.lastName">Last name is required</span>

    <v-text-field v-model="inputData.emailAddress" label="E-mail"></v-text-field>
    <span style="color: red" v-if="validateEmail(inputData.emailAddress)">E-mail is required. Domain is
      <strong>.com</strong></span>

    <v-textarea v-model="inputData.message" filled name="input-7-4" label="Message"></v-textarea>
    <span style="color: red" v-if="!inputData.message">Message is required.</span>

    <div id="btnDiv" class="text-center my-1">
      <v-btn type="submit mr-4" @click="submitForm">
        submit
      </v-btn>
    </div>

  </div>

  <div v-if="(inputData.firstName &&
  inputData.lastName &&
  !this.validateEmail(this.inputData.emailAddress) &&
  inputData.message)">
    <PopUpWindow :firstName="inputData.firstName" :lastName="inputData.lastName" :emailAddress="inputData.emailAddress"
      :message="inputData.message">
    </PopUpWindow>
  </div>
</template>

<script>
import PopUpWindow from './PopUpWindow.vue';

export default {
  name: "ContactSection",
  components: {
    PopUpWindow
  },
  data() {
    return {
      inputData: [
        {
          firstName: '',
          lastName: '',
          emailAddress: '',
          message: '',
        }
      ]
    }
  },
  methods: {
    validateEmail(email) {
      /* eslint-disable no-useless-escape */
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+com$))$/;
      if (reg.test(email))
        return false
      return true
    },
    submitForm() {
      if (!this.validateEmail(this.inputData.emailAddress) && this.inputData.firstName && this.inputData.lastName && this.inputData.message) {
        document.getElementById('main-container').style.display = "none";
      }
      else {
        alert("FORM IS INVALID");
      }
    },
  },

}
</script>

<style>
.container {
  width: 70%;
}
</style> 


