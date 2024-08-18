<script setup lang='ts'>
import YotaHeader from '../components/YotaHeader.vue';
import TabMenu from '../components/TabMenu.vue';
</script>

<template>
  <el-container>
    <el-header height="100px">
      <YotaHeader/>
    </el-header>

    <el-main>
      <h1>シャニマス人生部：活動報告</h1>
      鋭意作成中
    </el-main>

    <el-footer>
      <!-- タブメニュー -->
      <TabMenu/>
    </el-footer>
  
  </el-container>

</template>

<style scoped>
* {
  color:#595959;
}
</style>
