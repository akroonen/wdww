<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <OrganisatieOnderdelen/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import OrganisatieOnderdelen from "@/components/OrganisatieOnderdelen.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    OrganisatieOnderdelen
  }
};
</script>
