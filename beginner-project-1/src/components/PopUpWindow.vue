<template>
   <v-card id="pop-Up-Window" class="mx-auto my-14 px-4 py-4" max-width="600" height="300">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="py-4 px-4">First name: <strong>{{ firstName }}</strong></v-list-item-title>
                <v-list-item-title class="py-4 px-4">Last name: <strong>{{ lastName }}</strong></v-list-item-title>
                <v-list-item-title class="py-4 px-4">E-mail: <strong>{{ emailAddress }}</strong></v-list-item-title>
                <v-list-item-title class="py-4 px-4">Message: <strong>{{ message }}</strong></v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <div class="d-flex justify-end">
            <v-btn @click="closeWindow">CLOSE</v-btn>
        </div>

    </v-card> 
</template>
  
<script>
export default {
    name: 'PopUpWindow',
    props: {
        firstName: String,
        lastName: String,
        emailAddress: String,
        message: String,
    },
    methods: {
        closeWindow() {
            document.getElementById('pop-Up-Window').style.display = "none";
        },
    },
};

</script>
 
<style>
#pop-Up-Window {
    background-color: rgb(210, 209, 209);
    border-radius: 5px transparent;
}

</style>
  