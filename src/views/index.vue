<template>
  <main>
    <div class="wrapper">
      <div class="box">
        <img src="http://img1.ph.126.net/VXdZ6QJh-uq4GTr9ILExOQ==/6632284925074459408.jpg" alt="照片">
        <div class="names">
          <div class="main-name">彩云之南</div>
          <div class="name">大理·丽江·泸沽湖</div>
        </div>
      </div>
      <div class="box">
        <img src="http://img1.ph.126.net/VXdZ6QJh-uq4GTr9ILExOQ==/6632284925074459408.jpg" alt="照片">
        <div class="names">
          <div class="main-name">彩云之南</div>
          <div class="name">大理·丽江·泸沽湖</div>
        </div>
      </div>
      <div class="box">
        <img src="http://img1.ph.126.net/VXdZ6QJh-uq4GTr9ILExOQ==/6632284925074459408.jpg" alt="照片">
        <div class="names">
          <div class="main-name">彩云之南</div>
          <div class="name">大理·丽江·泸沽湖</div>
        </div>
      </div>
      <div class="box">
        <img src="http://img1.ph.126.net/VXdZ6QJh-uq4GTr9ILExOQ==/6632284925074459408.jpg" alt="照片">
        <div class="names">
          <div class="main-name">彩云之南</div>
          <div class="name">大理·丽江·泸沽湖</div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main{
  margin-top: 10px;
}
main .wrapper{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1020px;
  margin: 0 auto;
}
main .wrapper .box{
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 33%;
  margin-bottom: 5px;
  background-color: #fff;
}
.box .names{
  text-align: center;
  font-size: 14px;
}
.box .names .name{
  font-size: 13px;
  font-weight: 300;
}
.box img{
  width: 100%;
  height: 100%;
}
</style>

