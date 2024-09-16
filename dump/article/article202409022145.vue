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
    <span class="title-name">【報告】6.5楽しみ；；</span>
    <p id="title-date">2024-09-02</p>
  </div>

  <article v-if="dispToggle">
    <p>シャニマスが生きがいンゴ</p>
  </article>

</template>



<style src="./ArticleStyle.css"></style>