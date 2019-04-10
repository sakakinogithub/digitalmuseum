import axios from 'axios'

export function home () {
  return axios({
    method: 'get',
    url: '/book/home'
  })
}
