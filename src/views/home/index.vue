<script setup>
import "@/assets/css/home.css";
</script>

<template>
  <section class="section-to-cover">
    <div class="container">
      <div class="row">
        <div class="col-left">
          <h1 >Hello，I'm <span class="logo-col">lcgen</span>!</h1>
          <p>遇见创意与代码的火花 | 欢迎来到Lcgen的博客空间</p>
          <el-button type="primary" size="large" class="el-button">快速开始</el-button>
          <ul class="github-list">
            <li>
              <a href="https://github.com/username/repo" class="github-link">
                <img src="@/assets/images/github.svg" alt="GitHub" class="github-icon">
              </a>
            </li>
            <li>
              <el-popover
                  placement="top-start"
                  title="微信"
                  :width="225"
                  trigger="hover"
              >
                  <template #reference>
                      <span class="github-link">
                        <img src="@/assets/images/wechat.svg" alt="GitHub" class="github-icon">
                      </span>
                  </template>
                  <template #default>
                    <div>
                      <img src="@/assets/images/wechat.jpg" alt="微信" style="width: 200px; height: 220px;">
                    </div>
                </template>
              </el-popover>
            </li>
            <li>
              <el-popover
                  placement="top-start"
                  title="QQ"
                  :width="225"
                  trigger="hover"
              >
                <template #reference>
                      <span class="github-link">
                        <img src="@/assets/images/qq.svg" alt="GitHub" class="github-icon">
                      </span>
                </template>
                <template #default>
                  <div>
                    <img src="@/assets/images/qq.jpg" alt="QQ" style="width: 200px; height: 300px;">
                  </div>
                </template>
              </el-popover>
            </li>
            <li>
              <el-popover
                  placement="top-start"
                  title="QQ群"
                  :width="225"
                  trigger="hover"
              >
                <template #reference>
                      <span class="github-link">
                        <img src="@/assets/images/qq群.svg" alt="GitHub" class="github-icon">
                      </span>
                </template>
                <template #default>
                  <div>
                    <img src="@/assets/images/qq群.jpg" alt="qq群" style="width: 200px; height: 300px;">
                  </div>
                </template>
              </el-popover>
            </li>
          </ul>
        </div>
        <div class="col-right">
          <img src="@/assets/images/欢快.svg" alt="欢快"  width="400px" height="400px">
        </div>
      </div>
    </div>
  </section>
  <section class="section-to-cover2">
    <div class="container2">
        <div class="row2">
          <h1>导  航</h1>
          <p>连接信息与发现 | 打造无缝浏览的桥梁</p>
        </div>
        <div class="row3">
          <div class="el-col">
            <div class="el-col-1">左</div>
            <div class="el-col-2">右</div>
          </div>
          <div class="el-col">第二个</div>
          <div class="el-col">第三个</div>
          <!-- 增加的三个盒子 -->
          <div class="el-col">第四个</div>
          <div class="el-col">第五个</div>
          <div class="el-col">第六个</div>
        </div>
    </div>
  </section>
</template>

<style scoped>
/* 设置列表中图标的间隔距离 */
.github-list .github-link {
  margin-right: 30px; /* 设置图标右侧的间隔距离 */
}

/* 为了避免最后一个图标也有右边距，可以为最后一个元素单独设置 */
.github-list li:last-child .github-link {
  margin-right: 0; /* 移除最后一个图标的右边距 */
}

.el-button {
  margin-bottom: 2rem; /* 您可以根据需要调整这个值 */
}
</style>