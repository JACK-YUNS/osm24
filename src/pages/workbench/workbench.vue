<template>
  <div class="workbench">
    <work-statistics></work-statistics>
    <div class="workbench-container">
      <el-row gutter="20">
        <el-col :span="15"><div class="grid-content bg-purple"><reservation-today></reservation-today></div></el-col>
        <el-col :span="9"><div class="grid-content bg-purple-light"><memorandum></memorandum></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import ReservationToday from './reservationToday/reservationToday.vue'
  import Memorandum from './memorandum/memorandum.vue'
  import WorkStatistics from './workStatistics/workStatistics .vue'
export default {
      components:{
          WorkStatistics,
          ReservationToday,
          Memorandum
      },
      data () {
        return {

        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .workbench{
  }
  .workbench-container{
    margin-top: 20px;
    width:100%;
    min-width: 1200px;
  }


</style>
