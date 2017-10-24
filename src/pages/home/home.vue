<template>
  <!--<div class="home">-->
     <!--<div class="header">-->
       <!--<m-header></m-header>-->
     <!--</div>-->
     <!--<div class="wrap">-->
       <!--<div class="leftNav">-->
       <!--<left-nav></left-nav>-->
       <!--</div>-->
       <!--<div class="container ">-->
           <!--<router-view></router-view>-->
       <!--</div>-->
       <!--<div class="admin"></div>-->
     <!--</div>-->
  <!--</div>-->


  <div class="wrap">
    <div class="header"></div>
    <div class="container">
      <div class="leftNav">

      </div>
      <div class="content">
        <div class="ahead"></div>
        <div class="dhead">
          <div class="bhead"></div>
          <div class="chead"></div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import LeftNav from '../../components/leftNav/leftNav.vue'
import Header from '../../components/header/header.vue'

export default {
    components:{
        'm-header':Header,
        LeftNav
    },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    height:100%;
    width:100%;
    background: #f6efef;
    position: relative;
  }
  .header{
    height: 60px;
    background: #a82218;
    width:100%;
  }
  .wrap{
    width:100%;
    top: 60px;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
  .leftNav{
    width: 160px;
    background: #ffffff;
    height:100%;
    float: left;
  }
  .container{
    margin-left: 160px;
    min-width: 1500px;
    background:#f6efef;
    height:100%;
    padding: 20px;
  }





  div{
    box-sizing: border-box;
  }
  *{
    margin:0;
    padding:0;
  }
  body,html{
    width:100%;
    height:100%;
    min-width: 1500px;
    background: white;
  }
  .wrap{
    height:100%;
    width:100%;
    background: white;
    position: relative;



  }
  .header{
    background-color: #85d989;
    width: 100%;
    height: 50px;
  }
  .leftNav{
    width: 160px;
    height:100%;
    float: left;
  }
  .container{
    background-color: #cc85d9;
    width: 100%;
    position: absolute;
    top: 50px;
    bottom: 0px;
    left: 0px;
  }
  .content{
    background: white;
    height:100%;
    margin-left:160px;
    padding: 20px;
  }
  .ahead{
    height: 170px;
    background: red;
  }
  .bhead{
    background: gray;
    width: 700px;
    height: 500px;
  }
  .chead{

  }
  .dhead{
    padding-top: 20px;
  }
</style>
