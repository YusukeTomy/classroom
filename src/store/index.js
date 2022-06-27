import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

const getDefaultState = () => {
  return {
    Day: '',
    Period: 0, 
    Class: '',
    LastClass: ''
  }
}

const mutations = {
  setDay(state, day){
    state.Day = day
  },
  setPeriod(state, period){
    state.Period = period
  },
  setClass(state, cs){
    state.Class = cs
  },
  setLastClass(state, cs){
    state.LastClass = cs
  },
  reset(state) {
    Object.assign(state, getDefaultState())
  },
}

const getters = {}

const actions = {}

export default createStore({
  state: getDefaultState(),
  getters,
  mutations,
  actions,
  modules: {
  },
  plugins: [createPersistedState(
    {
      key: 'class',
      paths: [
        'Day',
        'Period',
        'Class',
        'LastClass'
      ],
      storage: window.sessionStorage,
    }
  )]
})
