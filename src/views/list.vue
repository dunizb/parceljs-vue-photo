<template>
  <div class="masonry">
    <div v-for="item in list" :key="item.url" class="items">
      <img :src="item.url" alt="" :style="imgstyle">
      <div class="title">{{item.title}}</div>
    </div>
    
    <div class="progress-wrapper" v-show="isShowProgress">
      <Progress :value="value" />
    </div>
  </div>
</template>

<script>
import Progress from '../components/progress/progress.vue'

export default {
  name: 'List',
  props: ['id'],
  components: { 
    Progress
  },
  data() {
    return {     
      list: JSON.parse(sessionStorage.getItem('dunizb.com_photo_list')||'[]'),
      imgstyle: {
        height: ''
      },
      count: 0,
      value: 0,
      isShowProgress: true
    }
  },
  created() {
    if(!this.list || this.list.length === 0) {
      this.$router.push('/');
    }
    this.loadAlbums();
  },
  watch: {
  },
  methods: {
    loadAlbums() {
      this.list.forEach(item => {
        var imgObj = new Image();
        imgObj.onload = () => this._handler();
        imgObj.src = item.url;
      });
    },
    _handler() {
      this.value = Math.round(((this.count + 1)/this.list.length) * 100);
      // 所有图片加载完毕
      if(this.count >= this.list.length - 1) {
        setTimeout(() => {
          this.isShowProgress = false;
          this.count = 0;
        }, 500);
      }
      this.count++;
    },
  }
}
</script>

<style lang="scss" scope>
  body{
    max-width: 1280px !important;
    margin: 0 auto;
    -webkit-overflow-scrolling: touch;
  }
  .masonry{
    background-color: #000;
    padding: 70px 10px 10px 10px;
    column-count: 3; // 列数
    column-gap: 8; // 间距
    position: relative;
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

  .progress-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width : 768px) { 
    .masonry{
      padding: 50px 0 5px 0;
      column-count: 2; // 列数
    }
    .items{
      .title {
        font-size: 10px;
      }
    }
  }
  
</style>

