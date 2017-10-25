<template>
  <div class="leftNav-list">
    <div class="logo">
      <img src="../../../static/img/logo.png" alt="">
    </div>
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
  }
  .leftNav-itemIcon img{
    width: 40px;
    height: 40px;

  }
  .leftNav-list ul li{
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    padding-left: 74px;
    margin-bottom: 22px;
  ;
  }
  .leftNav-list-item1{
    background: url("../../../static/img/workgroup.png") no-repeat 15px;
  }
  .leftNav-list-item2{
    background: url("../../../static/img/customer.png") no-repeat 15px;
  }
  .leftNav-list-item3{
    background: url("../../../static/img/bespeak.png") no-repeat 15px;
  }
  .leftNav-list-item4{
    background: url("../../../static/img/services.png") no-repeat 15px;
  }
  .router-link-active .leftNav-list-item1{
    background: url("../../../static/img/workgroup-w.png") no-repeat 15px;
  }
  .router-link-active .leftNav-list-item2{
    background: url("../../../static/img/customer-w.png") no-repeat 15px;
  }
  .router-link-active .leftNav-list-item3{
    background: url("../../../static/img/bespeak-w.png") no-repeat 15px;
  }
  .router-link-active .leftNav-list-item4{
    background: url("../../../static/img/services-w.png") no-repeat 15px;
  }
  .router-link-active{
    display: block;
    background: #a82218;
    color: #ffffff;
  }
  .logo{
    width: 160px;
    height: 168px;
  }
  .logo img{
    margin-left: 37px;
    margin-top: 30px;
  }
</style>
