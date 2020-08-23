<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ author }}</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'About',
  computed: mapState(['author'])
}
</script>
