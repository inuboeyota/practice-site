<script setup lang='ts'>
import YotaHeader from '../components/YotaHeader.vue';
import ShinyVideo from '../components/ShinyVideo.vue';
import UpdateInfo from '../components/UpdateInfo.vue';

import TabMenu from '../components/TabMenu.vue';

</script>

<template>
  <el-container>
    <el-header height="100%">
      <YotaHeader/>
    </el-header>

    <el-main>
      <!-- 動画埋め込み部分（バナー） -->
      <div class='banner'>
        <ShinyVideo movieSrc='https://www.youtube.com/embed/Q4VAfj2y5gA?autoplay=1&mute=1&playsinline=1&loop=1&controls=0&playlist=Q4VAfj2y5gA'
        movieTitle='【シャニマス】『耿耿』風野 灯織【アイドルマスター】'></ShinyVideo>
      </div>

      <!-- 更新情報記載部分 -->
      <UpdateInfo/>
      
    </el-main>

    <el-footer>
      <!-- タブメニュー -->
      <TabMenu/>
    </el-footer>
  </el-container>
</template>

<style scoped>

</style>
