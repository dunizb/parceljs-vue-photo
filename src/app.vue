<template>
  <div>
    <v-header />
    <router-view />
  </div>
</template>

<script>
import VHeader from './views/header.vue'
export default {
  components: {
    VHeader: 'v-header'
  }
}
</script>

<style>
</style>
