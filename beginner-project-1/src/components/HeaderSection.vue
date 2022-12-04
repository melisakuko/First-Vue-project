<template>
  <div class="header-section mx-auto my-0">
    <a class="px-10 py-0"
     v-for="link in links"
    :key=link.id
    @click="goTo(link.route)"
    >
      {{ link.text }}
    </a>
  </div>
</template>
  
<script>
export default {
  name: "HeaderSection",
  computed: {
    links() {
      return [
        {
          id: 1,
          text: 'HOME',
          route: 'home'
        },
        {
          id: 2,
          text: 'ABOUT',
          route: 'about'
        },
        {
          id: 3,
          text: 'CONTACT',
          route: 'contact'
        }
      ]
    }
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
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
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}
</style>
  