<template>

  <HomeHeader/>
  
  <Context/>

  <HomeFooter/>


</template>

<script>
  import HomeHeader from '@/components/HomeHeader.vue'
  import Context from '@/components/Context.vue';
  import HomeFooter from '@/components/HomeFooter.vue';


  export default {
      name: 'Home',
      components: {HomeHeader,Context,HomeFooter}
  }
</script>