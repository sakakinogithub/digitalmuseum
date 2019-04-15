import Mock from 'mockjs'
import home from './home'
import choose from './choose'
import model from './3d'
import list from './list'
import relic from './relic'

Mock.mock(/\/museum\/home/, 'get', home)
Mock.mock(/\/museum\/choose/, 'get', choose)
Mock.mock(/\/museum\/model/, 'get', model)
Mock.mock(/\/museum\/list/, 'get', list)
Mock.mock(/\/museum\/relic/, 'get', relic)

// Mock.setup({
//   timeout: '350-600'
// })

export default Mock
