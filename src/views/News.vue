<template>
  <v-container>
    <v-btn @click="getNews">Fetch News</v-btn> <!-- クリックでgetNewsを実行 -->
    <NewsCard :news="news" :error="error" />
  </v-container>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import NewsCard from '../components/NewsCard.vue';

const store = useStore(); //vuexストアのインスタンスを取得
const news = computed(() => store.state.news); //store内のstateの「news」をリアクティブに取得して「news」とする
const error = computed(() => store.state.error); //store内のstateの「error」をリアクティブに取得して「error」とする

const getNews = () => {
  store.dispatch('fetchNews'); //ストア内の「fetchNews」を実行
};

onMounted(() => { //？？？　v-btnが押された時に実行したいのだと思うけど、なぜこの書き方で対象のv-btnと紐付けができるのかがわからない
  getNews(); //getNews()を実行
});
</script>
