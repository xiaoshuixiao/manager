<template>
  <el-container class="my-container">
    <el-header class="my-header">
      <el-row>
        <el-col :span="4">
          <img class="my-logo" src="../assets/01.gif" alt />
        </el-col>
        <el-col :span="19">
          <h2 class="my-title">一颗赛艇</h2>
        </el-col>
        <el-col :span="1">
          <a class="my-logout" href="#" @click.prevent="logOut">退出</a>
        </el-col>
      </el-row>
    </el-header>

    <el-container>
      <!-- 导航 -->
      <el-aside width="200px">
        <!-- <el-col :span="12">
            <h5>默认颜色</h5>
        上面的盒子不要就没有线-->
        <el-menu default-active="2" class="el-menu-vertical-demo" :unique-opened="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>选项1
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-menu"></i>选项2
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>选项1
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-menu"></i>选项2
            </el-menu-item>
          </el-submenu>
        </el-menu>
        <!-- </el-col> -->
      </el-aside>

      <el-main class="my-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index",
  methods: {
    logOut() {
      const h = this.$createElement;
      this.$msgbox({
        title: "消息",
        message: h("p", null, [h("i", { style: "color: teal" }, "呵呵哒")]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "退出中...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 100);
               window.localStorage.removeItem("token");
              this.$router.push("./login");
            }, 300);
          } else {
            done();
          }
        }
      }).then(action => {
        this.$message({
          type: "info",
          message: "回去吧"
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.my-container {
  height: 100%;
  .my-header {
    height: 60px;
    background-color: #b3c0d1;
    line-height: 60px;
    .my-logo {
      width: 100%;
      height: 60px;
    }
    .my-title {
      text-align: center;
      color: #fff;
    }
  }
  .my-main {
    background-color: #e9eef3;
  }
}
</style>