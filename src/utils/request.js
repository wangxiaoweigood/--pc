import axios from 'axios'
import jsonBig from 'json-bigint'
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn' // 基础路径
})

// axios 开放了定制转换后端返回数据的 api
request.defaults.transformResponse = [function (data) {
  try {
    return jsonBig.parse(data)
  } catch (err) {
    // console.log('转换失败', err)
    return {}
  }
}]
export default request
