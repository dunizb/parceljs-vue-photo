<template>
  <main>
    <div class="wrapper">
      <div class="box" v-for="item in albumList" :key="item.url">
        <div class="img-box">
          <img :src="item.url" alt="照片">
        </div>
        <div class="names">
          <div class="main-name">{{item.title}}</div>
          <div class="name">{{item.subTitle}}</div>
        </div>
      </div>
    </div>

    <div class="progress-wrapper" v-show="isShowProgress">
      <Progress :value="value" />
    </div>
    
  </main>
</template>

<script>
import albumData from '../common/js/albumData.js'
import Progress from '../components/progress/progress.vue'

let count = 0;

export default {
  name: 'Index',
  components: { 
    Progress
  },
  data() {
    return {
      albumList: albumData,
      value: 0,
      isShowProgress: true
    }
  },
  created() {
    this.loadAlbums();
  },
  methods: {
    loadAlbums() {
      this.albumList.forEach(item => {
        var imgObj = new Image();
        imgObj.addEventListener('load error', this._handler());
        imgObj.src = item.url;
      });
    },
    _handler() {
      this.value = Math.round(((count + 1)/this.albumList.length) * 100);
      // 所有图片加载完毕
      if(count >= this.albumList.length - 1) {
        setTimeout(() => {
          this.isShowProgress = false;
          this.count = 0;
        }, 500);
      }
      count++;
    }
  }
}
</script>


<style lang="scss" scoped>
main{
  margin-top: 10px;
}
 
.wrapper{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1020px;
  margin: 0 auto;
  .box{
    display: flex;
    flex-direction: column;
    width: 33%;
    height: 33%;
    margin-bottom: 5px;
    background-color: #fff;
    .img-box{
      max-height: 161px;
    }
    .names{
      text-align: center;
      font-size: 14px;
      .name{
        font-size: 13px;
        font-weight: 300;
      }
    }
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

img{
  width: 100%;
  height: 100%;
  min-height: 161px;
}
</style>

