import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        news: [], //state内にnewsを空の配列として格納
        error: null //state内にerrorをnull値として格納
    },
    mutations: {
        setNews(state, news) {
            state.news = news; //stateのnewsを「news」としたものをsetNewsとして定義
        },
        setError(state, error) {
            state.error = error; //stateのerrorを「error」としたものをsetErrorとして定義
        }
    },
    actions: {
        async fetchNews({ commit }) { //以下をfetchNewsとする
            try { //成功した場合
                const response = await axios.get('https://content.guardianapis.com/search?api-key=test'); //APIからのデータ取得を「response」とする
                commit('setNews', response.data.response.results); //APIデータの結果を「setNews」とする
                commit('setError', null); //null値を「setError」とする
            } catch(error) { //失敗した場合
                commit('setError', 'Error fetching news'); //「Error fetching news」を「setError」とする
                commit('setNews', []); //空の配列を「setNews」とする
            }
        }
    }
});

export default store;