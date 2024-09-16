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
    <span class="title-name">TITLE TITLE TITLE TITLE</span>
    <p id="title-date">0000-00-00</p>
  </div>

  <article v-if="dispToggle">
    ARTICLE
  </article>

</template>



<style src="./ArticleStyle.css"></style>