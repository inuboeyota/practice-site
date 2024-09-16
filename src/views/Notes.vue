<script setup lang="ts">
</script>

<template>
  <div class="tmp-msg">
    【NOTESです】<br><br>
    [＊タイトルが載ります]<br>
    [名刺くるくる]<br>
    [ブログと言うか、Twitter2をここに作る]<br>
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