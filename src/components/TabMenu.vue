<script setup lang="ts">
</script>

<template>
  <div class="menu-buttons">
    <div class="item"><router-link to="/About"><el-button type="primary">About Me</el-button></router-link></div>
    <div class="item"><el-button type="primary">SHINY JINSEI CLUB</el-button></div>
    <div class="item"><router-link to="/"><el-button type="primary">TOP</el-button></router-link></div>

  </div>
</template>

<style scoped>
.menu-buttons{
  margin: 20px auto;
  display: flex;
  color: #008ee8;

  align-items: stretch;
  justify-content: space-around;
  flex-direction: row;
}
.item{
  margin: 10px;
}


</style>