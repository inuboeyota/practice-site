<script setup lang="ts">
// コンポーネントをインポートする
import TabMenu from '../components/TabMenu.vue';
import PageTitle from '../components/PageTitle.vue';

const title = 'ABOUT';
</script>

<template>
  <el-container>
    <el-header>
      <PageTitle :pageTitle="title"/>
    </el-header>
    <el-main>
      [＊タイトルが載ります]<br>
      [ヨタとは？が表示されています]<br>
      →[クリックすると簡単な来歴]と<br>
      →[クリックすると各リンクについてが表示される]<br>
      [基本データが表示されています]<br>
      →[クリックすると基本スペックが表示されます]<br>
      →→[クリックすると基本スペックが表示されます]<br>
      →[履修範囲]<br>
      →→[履修範囲.txtが表示されます]<br>
      [＊メニューバーがあります]<br>
    </el-main>
    <el-footer>
      <TabMenu/>
    </el-footer>
  </el-container>
</template>

<style scoped>

</style>