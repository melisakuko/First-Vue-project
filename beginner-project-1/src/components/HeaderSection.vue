<template>
  <div class="header-section mx-auto my-0">
    <a class="px-10 py-0" target="_blank" v-for="link in links" :key=link.id :href=link.href>{{ link.text }}</a>
  </div>
</template>
  
<script>
//import { computed } from '@vue/reactivity';
export default {
  name: "HeaderSection",
  computed: {
    links(){
      return [
      {
          id: 1,
          text: 'HOME',
          href: 'https://'
        },
        {
          id: 2,
          text: 'ABOUT',
          href: 'https://'
        },
        {
          id: 3,
          text: 'CONTACT',
          href: 'https://'
        }
      ]
    }
  }
}

</script>
  
<style>
.header-section {
  background-color: rgb(84, 67, 184);
  height: 60px;
  width: 95%;
  border-radius: 5px;
  text-align: center;
}
.header-section a {
  color: white;
  text-decoration: none;
  position: relative;
  top: 40%;
}
a:hover {
  text-decoration: underline;
}
</style>
  