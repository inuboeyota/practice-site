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
    <p>シャニマス人生部、というただの日記を始めさせて頂いている。</p>
    <p>なんというか、ただの日記や感想文をTwitter(現:X)でもNoteでもはてブでもない完全なクローズドに場所にあげていきたいと思ったので、作ってみた次第。更新頻度などは何にも考えていません。</p>
    <p>Vue3の勉強とウェブデザイン系の勉強をできたらいいな、っていう目的で作った側面のほうが大きかったりもするので、まあのんびり更新していけたらと思います。</p>
  </article>
</template>

<style src="./ArticleStyle.css">

</style>