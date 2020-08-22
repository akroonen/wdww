<template>
  <div>
    <h1>Organisatie Onderdelen</h1>
    <p>{{ OrganisatieHierarchie }}</p>
    <TreeView :data="OrganisatieHierarchie"></TreeView>
  </div>
</template>

<script>
import TreeView from "vue-jstree";

export default {
  name: "OrganisatieOnderdelen",
  components: {
    TreeView
  },
  data() {
    return {
      auteur: "Arko Kroonen",
      OrganisatieHierarchie: [
        {
          text: "root",
          children: [{ text: "Child One" }, { text: "Child Two" }]
        }
      ]
    };
  }
};
</script>

<style></style>
