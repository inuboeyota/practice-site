<script setup lang='ts'>
import YotaHeader from '../components/YotaHeader.vue';
import TabMenu from '../components/TabMenu.vue';

</script>

<template>
  <el-container>
    <el-header  height="100px">
      <YotaHeader/>
    </el-header>

    <el-main>
      <h1 id="about-title">ヨタ（<a href="https://x.com/yotagui" target="_blank">@yotagui</a>）とは？</h1>
      <p id="author">著者近影</p>
      <img id="yota" src="../assets/yotaImg.jpg" alt="yotawokuuinuの画像">
      <br>

      <h3>概要</h3>
      <div class="self-intro">
        <p>
          大学は数学科出身。現在は、デスクチェアの高さを低くしたり高くしたりして座り心地を調整するなどの業務を含む、よくわからない仕事をしている。<br>
          2023年11月に、シャニアニ映画もシャニソンも全く関係なくアイドルマスターシャイニーカラーズ(enza版)をプレイし始め、
          そこから友人一同を無限に困惑させ続けながら、怒涛の勢いでシャニマス、アイマス全体にハマっていく。<br>
          中でも<b color="#144384">風野灯織（さん）</b>のひたむきな姿と不器用でも努力を重ねる姿、ロジカル寄りの哲学に惹かれて、抜け出せなくなり、
          悶え苦しみながら生きている。
        </p>
        <p>
          みんなと仲良くしたいので<a href="https://x.com/yotagui" target="_blank">フォロー</a>してくれると嬉しいです。
        </p>
      </div>

      <h3>基本スペック</h3>
      <div class="spec-intro">
        <p>
          年齢：　　七草はづき<br>
          性別：　　天井努<br>
          身長：　　緋田美琴～白瀬咲耶<br>
          誕生日：　黛冬優子～大崎甘奈・甜花<br>
          出身：　　緋田美琴<br>
          居住：　　風野灯織<br>
          担当：　　風野灯織
        </p>
      </div>
      <p class="remark">参考：<a href="https://wikiwiki.jp/shinycolors/%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E4%B8%80%E8%A6%A7" target="_blank">プロフィール一覧</a></p>

    </el-main>

    <el-footer>
      <!-- タブメニュー -->
      <TabMenu/>
    </el-footer>
  </el-container>
</template>

<style scoped>

* {
  color: #595959;
}

/* フォントサイズ（特に%やemは親要素の影響を受ける）はpxやremで調整 */

#yota {
  width: 20%;
  height: 20%;

  /* 画像のコピペを一旦禁止したい */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  border-radius: 10px;
}

#author{
  font-family: Meiryo, Georgia, 'Times New Roman', Times, serif;
}

.self-intro {
  /* 背景情報 */
  width: 65%;
  margin: 0 auto;
  background-color: #fdfdfd;
  padding: 20px 10%;
  border-radius: 10px;
  border: 3px solid #5d5d4b;

  text-align: left;
  display: block;

  font-size: 24px;
}

.spec-intro {
  /* 当たり判定・背景 */
  width: 65%;
  min-width: 30%;
  margin: 0 auto;
  background-color: #fdfdfd;
  padding: 20px 10%;
  border-radius: 10px;
  border: 3px solid #5d5d4b;

  text-align: left;
  display: block;

  font-size: 22px;
}

.remark {
  font-size: small;
  color: #8d8d8d;
  font-size: 10px;
}

/* リンクに対する色の変更を抑制 */
a {
  text-decoration: underline;
  color: #114384;
}

*:visited {
  color: #114384;
}
</style>
