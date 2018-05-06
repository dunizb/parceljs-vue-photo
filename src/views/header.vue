<template>
  <div class="main-header">
    <h1>Photo</h1>
    <ul>
      <li>
        <a href="https://github.com/dunizb/VueTodo">源码</a>
      </li>
      <li>
        <a href="https://www.dunizb.com">博客</a>
      </li>
      <li>
        <a href="https://store.dunizb.com">小铺</a>
      </li>
      <li>
        <a href="https://demo.dunizb.com">小码</a>
      </li>
      <li>
        <a href="https://blog.dunizb.com/about/">关于我</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style>
.main-header {
    display: flex;
    justify-content: space-between;
    text-align: center;
    background-color: rgba(0,0,0,.3);
    color: #fff;
    padding: 0 20px;
}
.main-header h1{
    font-size: 24px;
    margin: 0;
    padding: 0;
    text-shadow: 1px 1px 3px #fff;
}
header ul{
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-header ul li{
    list-style: none;
    padding: 0 5px;
}
.main-header ul li a{
    color: #fff;
    text-decoration: none;
    font-weight: 300;
    font-size: 14px;
}
</style>

