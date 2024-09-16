<script setup lang="ts">
  import { nextUpdates, ver1 } from '../assets/UpdateDescription';
</script>

<template>
  <!-- AD欄との間隔確保 -->
  <br>

  <div id="update-title">【更新情報】</div>
  
  <div class="update-lists">
    <li v-for="info in ver1">
      {{ info }}
    </li>
  </div>

  <br>

  <div id="next-update-title">【更新予定】</div>

  <div class="update-lists">
    <li v-for="info in nextUpdates">
      {{ info }}
    </li>
  </div>

</template>

<style scoped>

/* 全体の基本文字色を当てる */
* {
  color: #595959;
}

#update-title{
  /* 文字のある部分にだけ背景を着色 */
  background-color: #ffbad6;
  width: 200px;
  margin: 0 auto;
  padding: 10px;

  text-align: center;
}

#next-update-title{
  /* 文字のある部分にだけ背景を着色 */
  background-color:#ffe012;
  width: 200px;
  margin: 0 auto;

  text-align: center;
}

.update-lists {
  width: 400px;
  margin: 0 auto;
  text-align: left;

  /* 背景色 */
  background-color: #fafafa;
  padding: 30px 50px;
  border-radius: 8px;
  /* 枠線 */
  border: #a09464 ridge;


  /* 点が要りません */
  list-style: none;
}
</style>