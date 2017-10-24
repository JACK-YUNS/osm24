<template>
  <div class="leftNav-list">
    <ul>
      <router-link :to="'/home/workbench'">
        <li class="leftNav-list-item1">
          <span>工作台</span>
        </li>
      </router-link>
      <router-link :to="'/home/customer'">
      <li class="leftNav-list-item2">
        <span>客户管理</span>
      </li>
      </router-link>
      <router-link :to="'/home/appointment'">
      <li class="leftNav-list-item3">
        <span>预约服务</span>
      </li>
      </router-link>
      <router-link :to="'/home/service'">
      <li class="leftNav-list-item4">
        <span>服务管理</span>
      </li>
      </router-link>
    </ul>




    <!--<el-row class="tac">-->
      <!--<el-col :span="24">-->
        <!--<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"  unique-opened router>-->
          <!--<el-submenu index="1">-->
            <!--<template slot="title" class="leftNav-list-titles"><img src="../../../static/img/home.png" alt=""><span class="leftNav-list-title">工作台</span></template>-->
              <!--<el-menu-item index="/home/workbench" >选项1</el-menu-item>-->
              <!--<el-menu-item index="1-2" >选项2</el-menu-item>-->
          <!--</el-submenu>-->
          <!--<el-submenu index="2">-->
            <!--<template slot="title" class="leftNav-list-titles"><img src="../../../static/img/customer.png" alt=""><span class="leftNav-list-title">客户管理</span></template>-->
            <!--<el-menu-item index="/home/customer" >选项1</el-menu-item>-->
            <!--<el-menu-item index="2-2" >选项2</el-menu-item>-->
          <!--</el-submenu>-->
          <!--<el-submenu index="3">-->
            <!--<template slot="title" class="leftNav-list-titles"><img src="../../../static/img/bespeak.png" alt=""><span class="leftNav-list-title">预约服务</span></template>-->
            <!--<el-menu-item index="/home/appointment" >选项1</el-menu-item>-->
            <!--<el-menu-item index="3-2" >选项2</el-menu-item>-->
          <!--</el-submenu>-->
          <!--<el-submenu index="4">-->
            <!--<template slot="title" class="leftNav-list-titles"><img src="../../../static/img/services-light.png" alt=""><span class="leftNav-list-title">服务管理</span></template>-->
            <!--<el-menu-item index="/home/service" >选项1</el-menu-item>-->
            <!--<el-menu-item index="4-2" >选项2</el-menu-item>-->
          <!--</el-submenu>-->
        <!--</el-menu>-->
      <!--</el-col>-->
    <!--</el-row>-->

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .leftNav-list{
    width:100%;
    height:100%;
    cursor: pointer;
    padding-top: 20px;
  }
  .leftNav-itemIcon img{
    width: 40px;
    height: 40px;

  }
  .leftNav-list ul li{
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    padding-left: 74px;
    margin-bottom: 20px;
  ;
  }
  .leftNav-list-item1{
    background: url("../../../static/img/home.png") no-repeat 15px;
  }
  .leftNav-list-item2{
    background: url("../../../static/img/customer.png") no-repeat 15px;
  }
  .leftNav-list-item3{
    background: url("../../../static/img/bespeak.png") no-repeat 15px;
  }
  .leftNav-list-item4{
    background: url("../../../static/img/services-light.png") no-repeat 15px;
  }
  .router-link-active{
    border-right:3px solid red;
    display: block;
  }
</style>
