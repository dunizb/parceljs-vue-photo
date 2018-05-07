<template>
  <div>
    <Header />
    <keep-alive>
      <transition name="slide-left" mode="in-out">
        <router-view />
      </transition>
    </keep-alive>
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
