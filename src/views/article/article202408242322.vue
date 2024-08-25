<script setup lang="ts">
import { ref, Ref } from 'vue';

  // 表示、非表示を切り替えるためのトグル変数
  const dispToggle:Ref<boolean> = ref(false);

  // 表示・非表示を切り替える関数
  function changeToggle():void {
    dispToggle.value = !dispToggle.value
  }
</script>

<template>
  <div class="title" @click="changeToggle">
    <span class="title-name">【挨拶】最初の記事です</span>
    <p id="title-date">2024-08-24</p>
  </div>
  <article v-if="dispToggle">
    こんにちは こんにちは こんにちは こんにちは こんにちは こんにちは
    こんにちは こんにちは こんにちは こんにちは こんにちは こんにちはこんにちは
  </article>
</template>

<style src="./ArticleStyle.css">

</style>