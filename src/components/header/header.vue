<template>
  <div class="headerNav">
    <el-row>
      <el-col :span="20">
        <div class="grid-content bg-purple headerNav-position">
          <img src="../../../static/img/position.png" alt="" class="positionIcon">
          <span>禧佑健康管理京城大厦店</span>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light admin">
          <header-section></header-section>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content bg-purple-light">
          <span class="headerNav-signOut">退出</span>
        </div>
      </el-col>
    </el-row>
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
  .headerNav{
    background: #a82218;
    height:100%;
  }
  .headerNav-position{
    height:60px;
    line-height: 60px;
    font-size: 18px;
    color: #ffffff;
    font-family: PingFangSC;
    padding-left:31px;

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
