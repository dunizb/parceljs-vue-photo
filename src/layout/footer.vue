<template>
  <footer>
    Hosted by <a href="https://pages.coding.me" target="_blank" style="font-weight: bold;">Coding Pages</a> &amp; 
    Power by <a href="https://wwww.dunizb.com" target="_blank" style="font-weight: bold;">Dunizb</a>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss">
footer{
  margin: 40px;
  text-align: center;
  color: #eee;
  font-size: 14px;
  font-weight: 100;
  position: relative;
  &::after{
    content: ' ';
    position: absolute;
    width: 50%;
    height: 10px;
    top: -10px;
    left: 50%;
    margin-left: -25%;
    border-top: 1px dotted #999;
  }
}
a{
  color: #fff;
  text-decoration: none;
}

/***** iPad Mini *****/
@media only screen and (max-width : 768px) { 
  header{
    padding: 0 3px;
    ul {
      margin-right: 0;
    }
  }
  main{
    margin-top: 0;
    .wrapper{
      padding: 2px 2px 0 2px;
      .box{
        width: 49.60% !important;
        height: 49.60% !important;
        margin-bottom: 2px;
        .img-box{
          height: 150px;
        }
        .names{
          .main-name{
            display:none;
          }
          .name{
            font-size: 12px !important;
          }
        }
      }
    }
  }

  footer{font-size: 10px;}
}
</style>
