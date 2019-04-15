const actions = {
  setOffsetY ({ commit }, offsetY) {
    return commit('SET_OFFSETY', offsetY)
  },
  setHotSearchOffsetY ({ commit }, offsetY) {
    return commit('SET_HOT_SEARCH_OFFSETY', offsetY)
  }
}

export default actions
