<template>
  <div class="list-wrapper">
    <div v-for="item in list" :key="item.url">
      <img :src="item.url" alt="">
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
      list: JSON.parse(sessionStorage.getItem('dunizb.com_photo_list')||'[]')
    }
  },
  created() {

  }
}
</script>

<style lang="scss" scope>
  .list-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    background-color: #000;
  }
  img{
    width: 100%;
  }
  .title {
    background-color: #fff;
    text-align: center;
  }
</style>

