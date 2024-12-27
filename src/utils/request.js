import Taro from '@tarojs/taro'


const getToken = () => {

  const {token} = Taro.getStorageSync('userInfo')
  if (token) {
    return token
  }
  return  ''
}

export default async function fetch(options) {
  const {
    url,
    payload,
    contentType,
    method = 'GET'
  } = options
  const token = getToken()
  const header = token ? { 'token': token } : {}

  if (contentType) {
    header['content-type'] = contentType
  }
  return Taro.request({
    url: BASE_URL + url,
    method,
    data: payload,
    header,
    credentials: 'same-origin'
  }).then( res => {
    const { resultCode, resultMsg, resultBody } = res.data
    if (resultCode !== 200 && resultCode) {
        Taro.showToast({
            title: resultMsg,
            icon: 'none'
          })
        return Promise.reject(res.data)
    } else {
        if (resultBody || resultBody === '0' || resultBody === 0) {
            return resultBody;
          } else {
            return res.data;
          }
    }
  }).catch(err => {
    Taro.showToast({
      title: err?.resultMsg || '接口错误',
      icon: 'none'
    })
    return Promise.reject(err)
  })
}
