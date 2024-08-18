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
      ここに『シャニマス人生部』の活動記録が入る<br>
      【工事中】
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
