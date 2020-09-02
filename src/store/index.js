import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'todo-app'
})


export default new Vuex.Store({
  state: {
    todoList: [],
  },
  mutations: {
    addTodoItem(state, payload) {
      payload.index = state.todoList.length;
      state.todoList.push(payload);
    },
    updateTodoItem(state, payload) {
      state.todoList.splice(payload.index, 1, payload);
    }
  },
  getters:{
    getTodoList: (state) => state.todoList
  },
  plugins: [vuexLocal.plugin]
})
