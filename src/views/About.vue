<script setup lang='ts'>
import YotaHeader from '../components/YotaHeader.vue';
import TabMenu from '../components/TabMenu.vue';
</script>

<template>
  <el-container>
    <el-header  height="100px">
      <YotaHeader/>
    </el-header>

    <el-main>
      ここに俺の説明が入る<br>
      【工事中】
    </el-main>

    <el-footer>
      <!-- タブメニュー -->
      <TabMenu/>
    </el-footer>
  </el-container>
</template>

<style scoped>
#back-ground{
  background-color: coral;
}
</style>
