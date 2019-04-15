import Mock from 'mockjs'
import home from './home'
import choose from './choose'
import model from './3d'
import list from './list'
import relic from './relic'

Mock.mock(/\/museum\/home/,'get',home)

// Mock.setup({
//   timeout: '350-600'
// })

Mock.mock(/\/book\/home/, 'get', BookHomeApi)
Mock.mock(/\/book\/shelf/, 'get', BookShelfApi)
Mock.mock(/\/book\/list/, 'get', BookHomeList)
Mock.mock(/\/book\/flat-list/, 'get', BookFlatList)

export default Mock
