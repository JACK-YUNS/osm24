<template>
  <div class="memorandum">
    <p class="reservation-title">今日预约</p>
    <calendar class="calendar"></calendar>
    <div class="memorandum-project">
      <p class="memorandum-project-date">10.25 待完成</p>
      <ul class="memorandum-project-ul ul-border">
        <li>
          <p class="memorandum-project-red">·</p>
             <div class="memorandum-project-list">
               <p>10:00</p>
               <p>员工培训,主题《客户接待礼仪》</p>
             </div>
        </li>
        <li>
          <p class="memorandum-project-red">·</p>
          <div class="memorandum-project-list">
            <p>10:00</p>
            <p>员工培训,主题《客户接待礼仪》</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="memorandum-project">
      <p class="memorandum-project-date">10.25 待完成</p>
      <ul class="memorandum-project-ul">
        <li>
          <p class="memorandum-project-blue">·</p>
          <div class="memorandum-project-list">
            <p>10:00</p>
            <p>员工培训,主题《客户接待礼仪》</p>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  import Calendar from '../calendar/calendar.vue'
export default {
    components:{
      Calendar
    },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .memorandum{
    float: left;
    padding-bottom: 30px;
  }
  .memorandum{
    width: 100%;
    background: #ffffff;
  }
  .reservation-title{
    height: 48px;
    border-bottom:1px solid #ededef;
    font-size: 18px;
    line-height: 48px;
    padding-left: 15px;
    font-family: PingFangSC;
  }
  .memorandum-project{
    padding:0 15px;
    border-top:1px solid #ededef;
  }
  .memorandum-project-date{
    padding-top:15px ;
    font-size: 20px;
    font-family: SFUIDisplay;
    font-weight: 300;

    color: #47484f;
  }
  .memorandum-project-ul li{
    margin-top: 10px;
    font-size: 14px;
    padding-left: 10px;
    color: #47484f;
  }
  .memorandum-project-red{
    color: red;
    font-size: 30px;
    line-height: 15px;
    float: left;
  }
  .memorandum-project-blue{
    color: blue;
    font-size: 30px;
    line-height: 15px;
    float: left;
  }
  .memorandum-project-list{
    padding-left: 20px;
  }
  .ul-border{
    padding-bottom: 15px;
    border-bottom:1px solid #ededef;


  }
  .calendar{
    padding:0 15px;
  }
</style>
