<template>
  <footer>
    Hosted by <a href="https://pages.coding.me" target="_blank" style="font-weight: bold;">Coding Pages</a> &amp; 
    Power by <a href="https://wwww.dunizb.com" target="_blank" style="font-weight: bold;">Dunizb</a>
  </footer>
</template>

<style>
footer{
    margin: 40px;
    text-align: center;
    color: #eee;
    font-size: 14px;
    font-weight: 100;
    position: relative;
}
footer a{
    color: #fff;
    text-decoration: none;
}
footer::after{
    content: ' ';
    position: absolute;
    width: 50%;
    height: 10px;
    top: -10px;
    left: 50%;
    margin-left: -25%;
    border-top: 1px dotted #999;
}

/***** iPad Mini *****/
@media only screen and (max-width : 768px) { 
    header{
        padding: 0 3px;
    }
    main{
        margin-top: 0;
    }
    main .wrapper{
        /* background-color: #fff; */
        padding: 2px 2px 0 2px;
    }
    main .wrapper .box{
        width: 49.60% !important;
        height: 49.60% !important;
        margin-bottom: 2px;
    }
    .box .names{
      font-size: 14px;
    }
    .box .names .name{
        font-size: 10px;
    }
    footer{font-size: 10px;}
}
</style>
