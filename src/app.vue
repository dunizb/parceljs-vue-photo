<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>
