<template>
  <div class="healthMark">
    <el-tabs v-model="activeName2" @tab-click="handleClick">
      <el-tab-pane label="生活方式" name="first">
         <life-style></life-style>
      </el-tab-pane>
      <el-tab-pane label="监测项目" name="second">监测项目</el-tab-pane>
      <el-tab-pane label="生物仪器检测" name="third">生物仪器检测</el-tab-pane>
      <el-tab-pane label="客户服务计划" name="fourth">客户服务计划</el-tab-pane>
      <el-tab-pane label="医师服务计划" name="fifth">医师服务计划</el-tab-pane>
    </el-tabs>
    <div class="healthMark-print">
      <img src="../../../../../static/img/print-btn.png"><img src="../../../../../static/img/editor-btn.png" alt="">
    </div>
  </div>
</template>

<script>
  import LifeStyle from './lifeStyle/lifeStyle.vue'
export default {
  components:{
      LifeStyle
  },
  data () {
    return {
      activeName2: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .healthMark{
    position: relative;
   }
   .healthMark-print{
     position: absolute;
     top: 5px ;
     right: 26px;
     cursor: pointer;
   }
  .healthMark-print img{
    margin-left: 8px;
  }

</style>
