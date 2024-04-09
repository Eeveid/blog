<script setup>
import "@/assets/css/layout.css";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="layout-header">
        <div class="logo-menu">
          <span>lcgen</span>
        </div>
        <div class="active">
          <ul class="no-list-style">
            <li><router-link to="/index" class="no-underline">首页</router-link></li>
            <li><router-link to="/space" class="no-underline">说说</router-link></li>
            <li><router-link to="/information" class="no-underline">文档</router-link></li>
          </ul>
        </div>
        <div class="login-menu">
          <ul class="no-list-style">
            <li><router-link to="/login" class="no-underline">登录</router-link></li>
            <li><router-link to="/enroll" class="no-underline">注册</router-link></li>
          </ul>
        </div>
      </el-header>
      <el-main class="layout-main">
        <router-view />
      </el-main>

      <el-footer class="layout-footer">
        <div class="icp">
          lcgen © 2024 |
          <a href="https://beian.miit.gov.cn/">滇ICP备2024023584号-1</a>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.el-header{
  height: 45px;
  background-color: transparent; /* 设置背景颜色为透明 */
}

.layout-footer{
  height: 20px;
}

.icp{
  text-align: center;
  font-size: 12px;
  color: #666;
}

.layout-main{
  padding: 0;
  margin: 0;
}
</style>