<template>
  <div class="headerSection">
    <el-dropdown trigger="hover" class="notification-list">
      <div class="notification-btn ">
        <img src="../../../../static/img/user-image.png"/>
        <span class="notification-btn-admin">管理员 <span class="el-icon-caret-bottom"></span></span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="dropdown-list">
          <a href="javascript:" class="dropdown-btn" @click="user_click(0)">
            <i class="icon fa fa-user"></i>
            <span>个人信息</span>
          </a>
        </el-dropdown-item>
        <el-dropdown-item class="dropdown-list">
          <a href="javascript:" class="dropdown-btn" @click="user_click(0)">
            <i class="icon fa fa-cog"></i>
            <span>设置</span>
          </a>
        </el-dropdown-item>
        <el-dropdown-item class="dropdown-list">
          <a href="javascript:" class="dropdown-btn" @click="user_click(0)">
            <i class="icon fa fa-sign-out"></i>
            <span>安全退出</span>
          </a>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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
  .headerSection{
    background: #a82218;
    height: 60px;
    line-height: 60px;
  }
  .notification-list{
    /*float: left;*/

  }

  .notification-btn{
    cursor: pointer;
    color: #fff;
    display: flex;
  }
  .notification-btn-admin{
    margin-left: 20px;
  }
  .notification-btn img{
    margin-top: 7px;
    width: 46px;
    height: 46px;
    color: #fff;
  }
  .notification-btn:hover{
    color: #fff;
  }
</style>
