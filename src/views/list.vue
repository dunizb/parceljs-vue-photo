<template>
  <div class="list-wrapper">
    <div v-for="item in list" :key="item.url">
      <img :src="domain+item.url" alt="" :style="imgstyle">
      <div class="title">👆{{item.title}}</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'List',
  props: ['id'],
  data() {
    return {
      domain: "https://dunizb.b0.upaiyun.com/",      
      list: JSON.parse(sessionStorage.getItem('dunizb.com_photo_list')||'[]'),
      imgstyle: {
        height: ''
      }
    }
  },
  created() {
    if(!this.list || this.list.length === 0) {
      this.$router.push('/');
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scope>
  .list-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #000;
    max-width: 1024px;
    margin: 0 auto;
  }
  .title {
    background-color: #fff;
    text-align: center;
  }
  img {
    width: 100%;
  }
</style>

