import request from '@/utils/request'

export function login (account, password) {
  let data = {
    account,
    password
  }
  return request({
    url: '/escalice/admin/account/login',
    method: 'post',
    data: data
  })
}

