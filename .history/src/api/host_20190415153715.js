import axios from 'axios'

export function home() {
  return axios({
    methods: 'get',
    url: '/'
  })
}
