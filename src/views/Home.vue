<script setup lang="ts">
// コンポーネントのインポート
import PageTitle from '../components/PageTitle.vue';
import TabMenu from '../components/TabMenu.vue';

const title = 'HOME';
</script>

<template>
  <el-container>
    <el-header>
      <PageTitle :pageTitle="title"/>
    </el-header>
    <el-main>
      [＊タイトルが載ります]<br>
      [ここに灯織の動画がのります]<br>
      [このサイトについての情報が載ります]<br>
      [更新情報が載ります.]<br>
      [＊メニューバーがあります]<br>
    </el-main>
    <el-footer>
      <TabMenu/>
    </el-footer>
  </el-container>
</template>

<style scoped>

</style>