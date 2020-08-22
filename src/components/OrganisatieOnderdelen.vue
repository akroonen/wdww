<template>
  <div>
    <h1>Organisatie Onderdelen</h1>
    <p>{{ OrganisatieHierarchie }}</p>
    <TreeView :data="OrganisatieHierarchie"></TreeView>
  </div>
</template>

<script>
import TreeView from 'vue-jstree'

export default {
  name: 'OrganisatieOnderdelen',
  components: {
    TreeView
  },
  data() {
    return {
      auteur: 'Arko Kroonen',
      // OrganisatieHierarchie: [
      //   {
      //     text: "root",
      //     children: [{ text: "Child One" }, { text: "Child Two" }]
      //   }
      // ]
      OrganisatieHierarchie: [
        {
          text: 'Holding 1',
          adres: 'Straat en huisnummer',
          children: [
            {
              text: 'Company 1-1',
              adres: 'Straat en huisnummer',
              children: [
                {
                  text: 'Business Unit 1-1-1',
                  adres: 'Straat en huisnummer',
                  children: [
                    {
                      text: 'Team 1-1-1-1',
                      adres: 'Straat en huisnummer',
                      children: []
                    },
                    {
                      text: 'Team 1-1-1-2',
                      adres: 'Straat en huisnummer',
                      children: []
                    }
                  ]
                },
                {
                  text: 'Business Unit 1-1-2',
                  adres: 'Straat en huisnummer',
                  children: [
                    {
                      text: 'Team 1-1-2-1',
                      adres: 'Straat en huisnummer',
                      children: []
                    },
                    {
                      text: 'Team 1-1-2-2',
                      adres: 'Straat en huisnummer',
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              text: 'Company 1-2',
              adres: 'Straat en huisnummer',
              children: [
                {
                  text: 'Business Unit 1-2-1',
                  adres: 'Straat en huisnummer',
                  children: []
                },
                {
                  text: 'Business Unit 1-2-2',
                  adres: 'Straat en huisnummer',
                  children: [
                    {
                      text: 'Team 1-2-2-1',
                      adres: 'Straat en huisnummer',
                      children: []
                    }
                  ]
                },
                {
                  text: 'Business Unit 1-2-3',
                  adres: 'Straat en huisnummer',
                  children: [
                    {
                      text: 'Team 1-2-3-1',
                      adres: 'Straat en huisnummer',
                      children: []
                    },
                    {
                      text: 'Team 1-2-3-1',
                      adres: 'Straat en huisnummer',
                      children: []
                    },
                    {
                      text: 'Team 1-2-3-2',
                      adres: 'Straat en huisnummer',
                      children: []
                    },
                    {
                      text: 'Team 1-2-3-3',
                      adres: 'Straat en huisnummer',
                      children: []
                    },
                    {
                      text: 'Team 1-2-3-4',
                      adres: 'Straat en huisnummer',
                      children: []
                    }
                  ]
                },
                {
                  text: 'Business Unit 1-2-4',
                  adres: 'Straat en huisnummer',
                  children: []
                }
              ]
            },
            {
              text: 'Company 1-3',
              adres: 'Straat en huisnummer',
              children: [
                {
                  text: 'Business Unit 1-3-1',
                  adres: 'Straat en huisnummer',
                  children: []
                },
                {
                  text: 'Business Unit 1-3-2',
                  adres: 'Straat en huisnummer',
                  children: []
                },
                {
                  text: 'Business Unit 1-3-3',
                  adres: 'Straat en huisnummer',
                  children: [
                    {
                      text: 'Team 1-3-3-1',
                      adres: 'Straat en huisnummer',
                      children: []
                    },
                    {
                      text: 'Team 1-3-3-2',
                      adres: 'Straat en huisnummer',
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          text: 'Holding 2',
          adres: 'Straat en huisnummer',
          children: [
            {
              text: 'Company 2-1',
              adres: 'Straat en huisnummer',
              children: []
            },
            { text: 'Company 2-2', adres: 'Straat en huisnummer', children: [] }
          ]
        }
      ]
    }
  }
}
</script>

<style></style>
