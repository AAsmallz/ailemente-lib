<template>
  <!-- <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container> -->
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px"> Aside </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup></script>
<style lang="scss">
body {
  width: 1000px;
  margin: 10px auto;
}
.el-header,
.el-footer {
  background-color: pink;
}
.el-aside {
  background-color: brown;
}
.el-main {
  background-color: aqua;
}
</style>
