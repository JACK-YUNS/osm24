<template>
  <div class="customerNav">
    <ul class="customerNav">
      <router-link :to="'/home/customer/basic'">
        <li class="customerNav-item1">
          <span>基本信息</span>
          <span class="customerNav-right"></span>
        </li>
      </router-link>
      <router-link :to="'/home/customer/health'">
      <li class="customerNav-item2">
        <span>健康档案</span>
        <span class="customerNav-right"></span>
      </li>
      </router-link>
      <router-link :to="'/home/customer/order'">
      <li class="customerNav-item3">
        <span>订单信息</span>
        <span class="customerNav-right"></span>
      </li>
      </router-link>
      <router-link :to="'/home/customer/bespeak'">
      <li class="customerNav-item4">
        <span>预约管理</span>
        <span class="customerNav-right"></span>
      </li>
      </router-link>
      <router-link :to="'/home/customer/serve'">
      <li class="customerNav-item5">
        <span>服务管理</span>
        <span class="customerNav-right"></span>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .customerNav-right{
    display: none;
    position: absolute;
    background: url("../../../../static/img/copy-5.png") no-repeat;
    top: 39px;
    height: 25px;
    width: 30px;
    right:0;
  }
  .customerNav{
    height: 94px;
  }
  .customerNav li{
    width: 146px;
    height: 64px;
    padding-left: 62px;
    text-align: center;
    line-height: 64px;
    font-size:16px;
    float: left;
    margin-right: 15px;
    border:1px solid #ededef;
    border-radius: 6px;
    position: relative;
  }
  .customerNav-item1{
    background: url("../../../../static/img/basic-c.png") no-repeat 25px 20px;
  }
  .customerNav-item2{
    background: url("../../../../static/img/health-c.png") no-repeat 25px 20px;
  }
  .customerNav-item3{
    background: url("../../../../static/img/order.png") no-repeat 25px 20px;
  }
  .customerNav-item4{
    background: url("../../../../static/img/bespeack-c.png") no-repeat 25px 20px;
  }
  .customerNav-item5{
    background: url("../../../../static/img/group-c.png") no-repeat 25px 20px;
  }
  .router-link-active{
    color: #a82218;
  }
  .router-link-active li{
    border:1px solid #a82218;
  }
  .router-link-active .customerNav-item1{
    background: url("../../../../static/img/basic-red.png") no-repeat 25px 20px;
  }
  .router-link-active .customerNav-item2{
    background: url("../../../../static/img/health-red.png") no-repeat 25px 20px;
  }
  .router-link-active .customerNav-item3{
    background: url("../../../../static/img/orders-red.png") no-repeat 25px 20px;
  }
  .router-link-active .customerNav-item4{
    background: url("../../../../static/img/bespeak-red.png") no-repeat 25px 20px;
  }
  .router-link-active .customerNav-item5{
    background: url("../../../../static/img/services-red.png") no-repeat 25px 20px;
  }
  .router-link-active .customerNav-right{
    display: inline-block;
  }
</style>
