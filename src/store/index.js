import { createStore } from "vuex"

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    SET_COUNT(state) {
      state.count++
    }
  },
  actions: {
    setCount({ commit }) {
      commit("increment")
    }
  },
  getters: {
    getCount(state) {
      return state.count
    }
  }
})

export default store
