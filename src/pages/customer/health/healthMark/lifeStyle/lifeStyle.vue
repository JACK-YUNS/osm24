<template>
  <div class="lifeStyle">
     <div class="sport">
       <p class="sport-title"><strong>运动习惯</strong></p>
       <div class="sport-project">
         <el-row class="sport-row">
           <el-col :span="5"><div class="grid-content bg-purple">锻炼频率</div></el-col>
           <el-col :span="7"><div class="grid-content bg-purple-light">经常锻炼</div></el-col>
           <el-col :span="5"><div class="grid-content bg-purple"></div>每次锻炼时间</el-col>
           <el-col :span="7"><div class="grid-content bg-purple-light">10分钟</div></el-col>
         </el-row>
         <el-row class="sport-row">
           <el-col :span="5"><div class="grid-content bg-purple">锻炼方式</div></el-col>
           <el-col :span="7"><div class="grid-content bg-purple-light">跑步</div></el-col>
           <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
           <el-col :span="7"><div class="grid-content bg-purple-light"></div></el-col>
         </el-row>
       </div>
     </div>
    <div class="sport">
      <p class="sport-title"><strong>饮食习惯</strong></p>
      <div class="sport-project">
        <el-row class="sport-row">
          <el-col :span="5"><div class="grid-content bg-purple">三餐按时吃</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">能</div></el-col>
          <el-col :span="5"><div class="grid-content bg-purple"></div>暴饮暴食</el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">否</div></el-col>
        </el-row>
        <el-row class="sport-row">
          <el-col :span="5"><div class="grid-content bg-purple">饮食口味</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">清淡</div></el-col>
          <el-col :span="5"><div class="grid-content bg-purple">饮食偏好</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">甜点,零食</div></el-col>
        </el-row>
        <el-row class="sport-row">
          <el-col :span="5"><div class="grid-content bg-purple">主食结构</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">不好说</div></el-col>
          <el-col :span="5"><div class="grid-content bg-purple">牛奶</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">不喝</div></el-col>
        </el-row>
        <el-row class="sport-row">
          <el-col :span="5"><div class="grid-content bg-purple">鸡蛋</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">不吃</div></el-col>
          <el-col :span="5"><div class="grid-content bg-purple">豆类及豆制品</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">不吃</div></el-col>
        </el-row>
        <el-row class="sport-row">
          <el-col :span="5"><div class="grid-content bg-purple">水果</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">不吃</div></el-col>
          <el-col :span="5"><div class="grid-content bg-purple">蔬菜</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light"><50克</div></el-col>
        </el-row>
        <el-row class="sport-row">
          <el-col :span="5"><div class="grid-content bg-purple">肉类</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light"><100克</div></el-col>
          <el-col :span="5"><div class="grid-content bg-purple">咖啡</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row class="sport-row">
          <el-col :span="5"><div class="grid-content bg-purple">含糖饮料</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">不喝</div></el-col>
          <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
      </div>
    </div>
    <div class="sport">
      <p class="sport-title"><strong>吸烟情况</strong></p>
      <div class="sport-project">
        <el-row class="sport-row">
          <el-col :span="5"><div class="grid-content bg-purple">吸烟情况</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">曾经吸</div></el-col>
          <el-col :span="5"><div class="grid-content bg-purple"></div>吸烟量</el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">每天20支,共10年</div></el-col>
        </el-row>
        <el-row class="sport-row">
          <el-col :span="5"><div class="grid-content bg-purple">被动吸烟</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">每天20分钟,共10年</div></el-col>
          <el-col :span="5"><div class="grid-content bg-purple">开始吸烟年龄</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">20岁</div></el-col>
        </el-row>
      </div>
    </div>
    <div class="sport">
      <p class="sport-title"><strong>饮酒情况</strong></p>
      <div class="sport-project">
        <el-row class="sport-row">
          <el-col :span="5"><div class="grid-content bg-purple">吸烟情况</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">曾经吸</div></el-col>
          <el-col :span="5"><div class="grid-content bg-purple"></div>吸烟量</el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">每天20支,共10年</div></el-col>
        </el-row>
        <el-row class="sport-row">
          <el-col :span="5"><div class="grid-content bg-purple">被动吸烟</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">每天20分钟,共10年</div></el-col>
          <el-col :span="5"><div class="grid-content bg-purple">开始吸烟年龄</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">20岁</div></el-col>
        </el-row>
      </div>
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
  .lifeStyle{
    /*padding-top: 10px;*/
    padding-left: 30px;
  }
  .sport-title{
    font-size: 16px;
    color: #393c40;
    padding-top: 15px;
  }
  .sport-project{
    padding-left: 24px;
    padding-top: 10px;
    padding-bottom: 15px;
    border-bottom:1px solid #ededef;

  }
  .grid-content{
    font-size: 16px;
    color: #393c40;
  }
  .sport-row{
    margin-top: 10px;
  }
</style>
