<script setup lang='ts'>
import YotaHeader from '../components/YotaHeader.vue';
import TabMenu from '../components/TabMenu.vue';

// 記事のimport
import article202408242322 from './article/article202408242322.vue';
import article202408242341 from './article/article202408242341.vue';
import article202409022145 from './article/article202409022145.vue';


</script>

<template>
  <el-container>
    <el-header height="100px">
      <YotaHeader/>
    </el-header>

    <el-main>
      <h1>シャニマス人生部：活動報告</h1>

      <!-- 記事を載せる部分 -->
      <!-- 最新記事を上に！ -->
      <article202409022145/>
      <article202408242322/>
      <article202408242341/>
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
