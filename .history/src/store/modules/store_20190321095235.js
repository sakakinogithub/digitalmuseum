const store = {
  state: {
    hotSearchOffsetY: 0,
    flapCardVisible: true
  },
  mutations: {
    SET_HOT_SEARCH_OFFSETY (state, offsetY) {
      state.hotSearchOffsetY = offsetY
    }
  }
}

export default store