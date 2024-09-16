<script setup lang="ts">
</script>

<template>
  <div class="tmp-msg">
    【HOMEです】<br><br>
    [＊タイトルが載ります]<br>
    [ここに灯織の動画がのります]<br>
    [このサイトについての情報が載ります]<br>
    [更新情報が載ります.]<br>
    [＊メニューバーがあります]<br>
  </div>

  <!-- テスト用に他ページの様子を確認する -->
  <div class="tmp-link">
    テスト用につくている<br>
    <router-link style="text-decoration: none;" to="/About">
      About
    </router-link>
    <router-link style="text-decoration: none;" to="/">
      Home
    </router-link>
    <router-link style="text-decoration: none;" to="/Notes">
      Notes
    </router-link>
  </div>
</template>

<style scoped>

</style>