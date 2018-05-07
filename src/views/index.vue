<template>
  <main>
    <div class="wrapper">
      <div class="box" v-for="item in indexData" 
        :key="item.id"
        @click="showList(item.id)">
        <div class="img-box">
          <img :src="item.url" alt="照片">
          <span class="count">{{item.list.length}}</span>
        </div>
        <div class="names">{{item.title}}</div>
      </div>
    </div>

    <div class="progress-wrapper" v-show="isShowProgress">
      <Progress :value="value" />
    </div>
    
  </main>
</template>

<script>
import indexData from '../common/js/indexData.js'
import Progress from '../components/progress/progress.vue'

let count = 0;

export default {
  name: 'Index',
  components: { 
    Progress
  },
  data() {
    return {
      indexData: indexData,
      value: 0,
      isShowProgress: true
    }
  },
  created() {
    this.loadAlbums();
  },
  methods: {
    loadAlbums() {
      this.indexData.forEach(item => {
        var imgObj = new Image();
        imgObj.addEventListener('load error', this._handler());
        imgObj.src = item.url;
      });
    },
    _handler() {
      this.value = Math.round(((count + 1)/this.indexData.length) * 100);
      // 所有图片加载完毕
      if(count >= this.indexData.length - 1) {
        setTimeout(() => {
          this.isShowProgress = false;
          this.count = 0;
        }, 500);
      }
      count++;
    },
    showList(id) {
      const indexData = this.indexData;
      let list = []
      for(let i = 0; i < indexData.length; i++) {
        if(indexData[i].id === id) {
          list = indexData[i].list;
          break;
        }
      }
      sessionStorage.setItem('dunizb.com_photo_list', JSON.stringify(list))
      this.$router.push('list/' + id);
    }
  }
}
</script>


<style lang="scss" scoped>
main{
  padding-top: 45px;
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
    padding: 5px 5px 0 5px;
    box-sizing: border-box;
    .img-box{
      position: relative;
      height: 245px;
      .count {
        position: absolute;
        right: 10px;
        bottom: 10px;
        color: #fff;
        font-size: 25px;
      }
    }
    .names{
      text-align: center;
      font-size: 14px;
    }
    &:hover{
      cursor: pointer;
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
}
</style>

