<script setup lang='ts'>
import YotaHeader from '../components/YotaHeader.vue';
import ShinyMovie from '../components/ShinyMovie.vue';
</script>

<template>
  <el-container>
    <el-header>
      <YotaHeader/>
    </el-header>

    <el-main>
      <!-- 動画埋め込み部分（バナー） -->
      <div class='banner'>
        <ShinyMovie movieSrc='https://www.youtube.com/embed/Q4VAfj2y5gA'
        movieTitle='【シャニマス】『耿耿』風野 灯織【アイドルマスター】'></ShinyMovie>
      </div>
    </el-main>

    <el-footer>
    <!-- タブメニュー -->
    </el-footer>
  </el-container>
</template>

<style scoped>
#back-ground{
  background-color: coral;
}
</style>
