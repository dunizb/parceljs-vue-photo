<template>
  <div>
    <Header />
    <!-- <keep-alive> -->
      <router-view />
    <!-- </keep-alive> -->
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
