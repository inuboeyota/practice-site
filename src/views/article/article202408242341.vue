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
    <span class="title-name">【人生部更新】ペットボトルを分別する 編</span>
    <p id="title-date">2024-08-04</p>
  </div>

  <article v-if="dispToggle">

    <div class="twitter-tweet">
      <blockquote>
        <p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/%E3%82%B7%E3%83%A3%E3%83%8B%E3%83%9E%E3%82%B9%E4%BA%BA%E7%94%9F%E9%83%A8?src=hash&amp;ref_src=twsrc%5Etfw">#シャニマス人生部</a><br>ペットボトルゴミを分別する 編
          <a href="https://t.co/e16FTDfjR7">pic.twitter.com/e16FTDfjR7</a>
        </p>&mdash; ヨタ@6.5（いまんとこDAY1） (@yotagui) 
        <a href="https://twitter.com/yotagui/status/1820106828673646994?ref_src=twsrc%5Etfw">August 4, 2024</a>
      </blockquote>
    </div>
    <p>　ということで人生しています。</p>
    <p>　コップを洗うという行為がめんどくさすぎて、2Lのペットボトルなどをほとんど買わないため、いっつも500mLのペットボトルを大量に購入している。</p>
    <p>　そのためいつも無限にゴミが溜まっているのです。</p>
  </article>

</template>


<style  src="./ArticleStyle.css">

</style>