<template>
  <div class="headerNav">
    <!--<el-row>-->
      <!--<el-col :span="1">-->
        <!--<div class="grid-content bg-purple">-->
          <!--<img src="../../../static/img/logo.png" alt="" class="logo">-->
        <!--</div>-->
      <!--</el-col>-->
      <!--<el-col :span="2">-->
        <!--<div class="grid-content bg-purple-light">-->
          <!--<span class="headerNav-title">门店管理</span>-->
        <!--</div>-->
      <!--</el-col>-->
      <!--<el-col :span="17">-->
        <!--<div class="grid-content bg-purple headerNav-position">-->
          <!--<img src="../../../static/img/position.png" alt="" class="positionIcon">-->
          <!--<span>禧佑健康管理京城大厦店</span>-->
        <!--</div>-->
      <!--</el-col>-->
      <!--<el-col :span="3">-->
        <!--<div class="grid-content bg-purple-light admin">-->
          <!--<header-section></header-section>-->
        <!--</div>-->
      <!--</el-col>-->
      <!--<el-col :span="1">-->
        <!--<div class="grid-content bg-purple-light">-->
          <!--<span class="headerNav-signOut">退出</span>-->
        <!--</div>-->
      <!--</el-col>-->
    <!--</el-row>-->
  </div>
</template>

<script>
  console.log(document.body.offsetWidth)
  import HeaderSection from './headerSection/headerSection.vue'

export default {
      components:{
          HeaderSection,
      },
  data () {
    return {

    }
  },
  computed:{
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo {
    width: 33.3px;
    height: 48px;
    object-fit: contain;
    margin-left: 15px;
    margin-top: 6px;
  }
  .headerNav-title{
    width: 96px;
    font-family: PingFangSC;
    font-size: 24px;
    font-weight: 600;
    height: 60px;
    line-height: 60px;
    text-align: left;
    color: #ffffff;
  }
  .headerNav-position{
    height:60px;
    line-height: 60px;
    font-size: 18px;
    color: #ffffff;
    font-family: PingFangSC;


  }
  .positionIcon{
    height: 18px;
    width: 14px;
    margin-right: 10px;
  }
  .headerNav-signOut{
    display: inline-block;
    height: 60px;
    line-height: 60px;
    color: #edd2d0;
    text-align: center;
    font-family: PingFangSC;
    width:100%;
  }
  .admin{
    text-align: right;
  }



</style>
