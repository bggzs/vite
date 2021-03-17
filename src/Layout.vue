<template>
  <div class="layout">
    <el-container>
      <el-header></el-header>
      <el-container>
        <el-aside></el-aside>
        <el-main> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='less' scoped>
.layout {
  height: 100vh;
  .el-aside {
    height: calc(100vh - 60px);
  }
}
</style>