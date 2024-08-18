<script setup lang="ts">
  import { nextUpdates, ver0 } from '../assets/UpdateDescription';
</script>

<template>
  <!-- AD欄との間隔確保 -->
  <br>

  <div id="update-title">【更新情報】</div>
  
  <div class="update-lists">
    <li v-for="info in ver0">
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
#update-title{
  /* 文字のある部分にだけ背景を着色 */
  background-color: #ffbad6;
  width: 200px;
  margin: 0 auto;

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
  width: 500px;
  margin: 0 auto;
  text-align: center;

  /* 点が要りませんｗ */
  list-style: none;
}
</style>