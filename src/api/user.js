import requeat from '@/utils/request'

export const login = data => {
  return requeat({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
export const getSmsCode = mobile => {
  return requeat({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`

  })
}
