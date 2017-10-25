<template>
  <div class="home">
    <div class="nav">
      <left-nav></left-nav>
    </div>
    <div class="container">
      <header>
        <m-header></m-header>
      </header>
      <content>
          <router-view></router-view>
      </content>
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
  content,div{
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

  }
  .home{
    width:100%;
    height:100%;
  }
  .nav{
    width: 160px;
    float: left;
    height:100%;
    background: #fffaf5;
  }
  .container{
    margin-left: 160px;
    height:100%;
    position: relative;
  }
  .container header{
    height: 60px;
    width:100%;
  }
  .container content{
    position: absolute;
    top: 60px;
    bottom: 0px;
    left: 0px;
    width:100%;
    padding: 20px;
  }
</style>
