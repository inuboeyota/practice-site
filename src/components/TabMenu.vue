<script setup lang="ts">
</script>

<template>
  <div class="menu-buttons">

    <div class="item">
      <router-link style="text-decoration: none;" to="/">
        TOP
      </router-link>
    </div>
    
    <div class="item">
      <router-link style="text-decoration: none;" to="/About">
          About Me
      </router-link>
    </div>

    <div class="item">
      <router-link style="text-decoration: none;" to="/JinseiClub">
        SHINY JINSEI CLUB
      </router-link>
    </div>

  </div>
</template>

<style scoped>
.menu-buttons{
  margin: 20px auto;
  display: flex;
  color: #008ee8;
  
  /* ボタン部分がウィンドウを出ないようにする */
  max-width: 100%;

  align-items: stretch;
  justify-content: space-around;
  flex-direction: row;
}


.item{
  /* ボタン部分の構築 */
  margin: 10px;
  background-color: #144384;
  padding: 10px;
  border-radius: 10px;

  color:#eeeeee;
}

.item:hover{
  background-color: #6197e3;

}

*:visited{
  color:#eeeeee;
}

</style>