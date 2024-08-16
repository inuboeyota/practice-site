import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// element-plusのimport
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";


// Vueアプリケーションの作成と，プラグインのインストール

// アプリケーションインスタンスの作成
const app = createApp(App);

// 各プラグインのインストール
app.use(router);
app.use(ElementPlus);

// アプリケーションインスタンスのマウント（特定のHTML要素をアプリケーションの起動点として設定し、
// その要素の中にアプリケーションのコンポーネントを表示）
app.mount('#app');
