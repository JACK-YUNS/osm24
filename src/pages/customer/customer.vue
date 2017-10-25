<template>
  <div class="customer">
    <crumbs></crumbs>
    <div class="customer-container">
       <customer-nav></customer-nav>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Crumbs from '../../components/crumbs/crumbs.vue'
  import CustomerNav from './customerNav/customerNav.vue'
export default {
      components:{
          Crumbs,
          CustomerNav
      },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .customer-container{
    width:100%;
    background: #ffffff;
    margin-top: 15px;
    padding-top:15px;
    padding-left:15px;
  }

</style>
