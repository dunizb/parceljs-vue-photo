<template>
  <div class="masonry">
    <div v-for="item in list" :key="item.url" class="items">
      <img :src="item.url" alt="" :style="imgstyle">
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
  body{
    max-width: 1280px !important;
    margin: 0 auto;
  }
  .masonry{
    background-color: #000;
    padding: 70px 10px 10px 10px;
    column-count: 3; // 列数
    column-gap: 8; // 间距
  }
  .items{
    break-inside: avoid; 
    box-sizing: border-box; 
    margin-bottom: 10px;
    position: relative;
    .title {
      position: absolute;
      bottom: 4px;
      width: 100%;
      background-color:rgba(0,0,0,.3);
      color: #fff;
      text-align: center;
    }
    img {
      width: 100%;
    }
  }
  
</style>

