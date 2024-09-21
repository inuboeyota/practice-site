<script setup lang="ts">
</script>

<template>
  テスト用につくているTabMenu
    <div class="tmp-link">
      
      <div class="tab-buttons">
        <router-link style="text-decoration: none;" to="/About">
          <el-button>About</el-button>
        </router-link>
      </div>
      
      <div class="tab-buttons">
        <router-link style="text-decoration: none;" to="/">
          <el-button>Home</el-button>
        </router-link>
      </div>
      
      <div class="tab-buttons">
        <router-link style="text-decoration: none;" to="/Notes">
          <el-button>Notes</el-button>
        </router-link>
      </div>
    
    </div>
</template>

<style scoped>
/* デバッグモード */


.tmp-link {
  display: flex;
  margin: auto;
}
.tab-buttons {
  margin: 10px;
}
</style>