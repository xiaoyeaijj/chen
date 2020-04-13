import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/promotion/api/index/good_shop_rank',
    method:'post',
    params:params
  })
}
export function deleteReason(data) {
  return request({
    url:'/promotion/admin/NsUserBase/del',
    method:'post',
    data:data
  })
}


export function addReason(data) {
  return request({
    url:'/promotion/admin/NsUserBase/edit',
    method:'post',
    data:data
  })
}


export function updateReason(data) {
  return request({
    url:'/promotion/admin/NsUserBase/edit',
    method:'post',
    data:data
  })
}
export function SearchList(params) {
  return request({
    url:'/promotion/api/index/good_shop_rank',
    method:'post',
    data:params
  })
}
