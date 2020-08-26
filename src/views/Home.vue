<template>
  <div class="home">
    <img class="small_logo" alt="Vue logo" src="../assets/AVATAR-RGB.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <OrganisatieOnderdelen />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import OrganisatieOnderdelen from '@/components/OrganisatieOnderdelen.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    OrganisatieOnderdelen
  },
  created: () => {
    console.log('created')
  }
}
</script>

<style scoped>
.small_logo {
  width: 75px;
  height: auto;
}
</style>
