<template>
    <div class="container my-14 mx-auto">
     <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="What can we help you with?"
      required
    ></v-select>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-textarea
        filled
        name="input-7-4"
        label="Filled textarea"
    ></v-textarea>

    <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
    >
        submit
    </v-btn>
    </div>
</template>

<script>
  export default {
    name: "ContactSection"
  }
</script>

<style>
.container {
    width: 70%;
}
</style> 


