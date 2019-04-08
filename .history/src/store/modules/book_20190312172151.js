import { realPx } from '../../utils/utils'

const book = {
  state: {
    offsetY: 0
  },
  mutations: {
    'SET_OFFSETY': (state, offsetY) => {
      state.offsetY = offsetY
    }
  }
}
