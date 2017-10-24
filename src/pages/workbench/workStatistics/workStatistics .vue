<template>
  <div class="workStatistics ">
     <p class="workStatistics-title">工作统计</p>
    <div class="workStatistics-data">
      <el-row style="height: 121px;">
        <el-col :xs="6" :sm="6" :md="6" :lg="6">
          <div class="grid-content bg-purple workStatistics-item">
            <img src="../../../../static/img/new-custom.png" alt="" class="workStatistics-icon">
            <dl class="workStatistics-content">
            <dt>10</dt>
            <dd>本周客户</dd>
            </dl>
          </div>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" >
          <div class="grid-content bg-purple workStatistics-item">
            <img src="../../../../static/img/appointment.png" alt="" class="workStatistics-icon">
            <dl class="workStatistics-content">
              <dt>10</dt>
              <dd>本周新预约
              </dd>
            </dl>
          </div>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6">
          <div class="grid-content bg-purple workStatistics-item">
            <img src="../../../../static/img/servicesdone.png" alt="" class="workStatistics-icon">
            <dl class="workStatistics-content">
              <dt>10</dt>
              <dd>本周已服务</dd>
            </dl>
          </div>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6">
          <div class="grid-content bg-purple workStatistics-item">
            <img src="../../../../static/img/allcustomser.png" alt="" class="workStatistics-icon">
            <dl class="workStatistics-content">
              <dt>2399</dt>
              <dd>本店全部客户</dd>
            </dl>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .workStatistics{
    background: #ffffff;
    height: 170px;
    border-radius: 4px;


  }
  .workStatistics-title{
    height: 48px;
    border-bottom:1px solid #ededef;
    font-size: 18px;
    line-height: 48px;
    padding-left: 15px;
    font-family: PingFangSC;
  }
  .workStatistics-data{
    padding-left:100px;
    padding-right: 100px;
    height: 121px;

  }
  .workStatistics-icon{
    height: 60px;
    width: 60px;
  }
  .workStatistics-item{
    display: flex;
    align-items: center;
    height: 121px;
  }
  .workStatistics-content dt{
    width: 32px;
    height: 36px;
    margin-left:10px;
    margin-bottom: 5px;
    font-family: SFUIDisplay;
    font-size: 30px;
    text-align: center;
    color: #e20612;
  }
  .workStatistics-content dd{
    width: 84px;
    height: 20px;
    font-family: PingFangSC;
    font-size: 14px;
    text-align: center;
    color: #47484f;
  }
  .workStatistics-content{
    margin-left: 20px;
  }


</style>
