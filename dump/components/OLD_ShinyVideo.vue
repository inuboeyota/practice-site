<script setup lang="ts">
  defineProps({
    movieSrc: String,
    movieTitle: String
  })
</script>

<template>
  <span class="ad">[AD]：動画</span><br>

  <iframe width="720" height="406" :src="movieSrc"
  :title="movieTitle" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" autoplay>
  </iframe><br>
  
  <p class="remark">※ここでいうADとは「<b>あ</b>ぁ～<b>ど</b>う考えてもシャニマス楽しすぎ」の略であり、広告費などは一切生じておりません</p>
</template>

<style scoped>
  .ad{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 10px
  }

  .remark{
    font-size: 8px;
    color: rgb(69, 69, 69);
  }
</style>
