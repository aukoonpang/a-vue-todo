import axios from 'axios'

export function queryWeather () {
  return axios({
    method: 'get',
    url: 'http://127.0.0.1:5000/api/weather',
    params: {
      cityname: '广州',
      key: 'b1b4f3b427d07579a384cdfd2c24dc20'
    }
  })
}
