<template>
  <div class="login">
    <div class="form-container">
      <h2>用户登录</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        label-position="top"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="btn" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 导入接口
import { login } from "../api/http.js";

export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      // 获取 饿了吗ui的form表单  饿了么ui提供的验证方法
      this.$refs[formName].validate(valid => {
        // valid 有值 说明验证通过
        // console.log(valid);

        if (valid) {
          login({
            username: this.ruleForm.username,
            password: this.ruleForm.password
          }).then(backData => {
            console.log(backData);
            // console.log(this.ruleForm.username);
            // console.log(this.ruleForm.password);
            if (backData.data.meta.status == 200) {
              window.localStorage.setItem("token" ,backData.data.data.token)
              this.$message.success(backData.data.meta.msg);
              this.$router.push("/index");
            } else if (backData.data.meta.status == 400) {
              // 提示
              this.$message.error(backData.data.meta.msg);
            }
          });
        } else {
          this.$message.error("滑稽 就完事了");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>


<style lang="scss" scoped>
.login {
  display: flex;
  // position: fixed;
  // left: 0;
  // top: 0;
  // right: 0;
  // bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: #324152;
  height: 100%;
  .form-container {
    // position: absolute;
    // left: 50%;
    // top: 50%;
    // transform: translate(-50% ,-50%);
    background-color: #fff;
    border-radius: 5px;
    width: 580px;
    height: 437px;
    padding: 60px 40px;
  }
  .h2 {
    margin-bottom: 30px;
  }
  .btn {
    width: 100%;
  }
}
</style>
