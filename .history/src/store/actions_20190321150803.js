const actions = {
  setOffsetY ({ commit }, offsetY) {
    return commit('SET_OFFSETY', offsetY)
  },
  setHotSearchOffsetY ({ commit }, offsetY) {
    return commit('SET_HOT_SEARCH_OFFSETY', offsetY)
  },
  setFlapCardVisible ({ commit }, visible) {
    return commit('SET_FLAP_CARD_VISIBLE', visible)
  }
}

export default actions
