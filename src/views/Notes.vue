<script setup lang="ts">
// コンポーネントのインポート
import TabMenu from '../components/TabMenu.vue';
import PageTitle from '../components/PageTitle.vue';

const title = 'NOTES';
</script>

<template>
  <el-container>
    <el-header>
      <PageTitle :pageTitle="title"/>
    </el-header>
    <el-main>
      [＊タイトルが載ります]<br>
      [名刺くるくる]<br>
      [ブログと言うか、Twitter2をここに作る]<br>
      [＊メニューバーがあります]<br>
    </el-main>
    <el-footer>
      <TabMenu/>
    </el-footer>
  </el-container>
</template>

<style scoped>

</style>