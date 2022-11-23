<template>

    <HeaderSection/>
    <HomeSection/>
   
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import HomeSection from './components/HomeSection.vue';

export default {
  name: 'App',
  components:{
    HeaderSection,
    HomeSection
  }
}
</script>
