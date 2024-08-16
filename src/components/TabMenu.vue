<script setup lang="ts">
</script>

<template>
  <div class="menu-buttons">

    <router-link style="text-decoration: none; color:#eeeeee;" to="/">
      <div class="item">
        TOP
      </div>
    </router-link>

    <router-link style="text-decoration: none; color:#eeeeee;" to="/About">
      <div class="item">
        About Me
      </div>
    </router-link>

    <router-link style="text-decoration: none; color:#eeeeee;" to="/JinseiClub">
      <div class="item">
        SHINY JINSEI CLUB
      </div>
    </router-link>

  </div>
</template>

<style scoped>
.menu-buttons{
  margin: 20px auto;
  display: flex;
  
  /* ボタン部分がウィンドウを出ないようにする */
  min-width: 100%;
  overflow: auto;

  /* align-items: stretch; */
  justify-content: center;
  flex-direction: row;

}

.item{
  /* ボタン部分の構築 */
  margin: 10px;
  background-color: #144384;
  border-radius: 10px;

  min-width: 200px;
  max-width: 100%;
  padding: 20px 10px;

  color:#eeeeee;
}

.item:hover{
  background-color: #6197e3;
  color:#eeeeee;

}

*:visited{
  color:#eeeeee;
}

</style>