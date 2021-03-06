import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/promotion/admin/NsPreOrder/list',
    method:'post',
    params:params
  })
}
export function deleteReason(data) {
  return request({
    url:'/promotion/admin/NsPreOrder/del',
    method:'post',
    data:data
  })
}


export function updateStatus(params) {
  return request({
    url:'/returnReason/update/status',
    method:'post',
    params:params
  })
}

export function addReason(data) {
  return request({
    url:'/promotion/admin/NsPreOrder/edit',
    method:'post',
    data:data
  })
}

export function getReasonDetail(id) {
  return request({
    url:'/returnReason/'+id,
    method:'get'
  })
}

export function updateReason(data) {
  return request({
    url:'/promotion/admin/NsPreOrder/edit',
    method:'post',
    data:data
  })
}
export function SearchList(params) {
  return request({
    url:'/promotion/admin/NsPreOrder/list',
    method:'post',
    data:params
  })
}
