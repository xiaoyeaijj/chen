import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/promotion/admin/NsShopBase/list',
    method:'post',
    params:params
  })
}

export function closeOrder(params) {
  return request({
    url:'/order/update/close',
    method:'post',
    params:params
  })
}

export function deleteOrder(params) {
  return request({
    url:'/promotion/admin/NsShopBase/del',
    method:'post',
    params:params
  })
}

export function deliveryOrder(data) {
  return request({
    url:'/order/update/delivery',
    method:'post',
    data:data
  });
}

export function getOrderDetail(id) {
  return request({
    url:'/order/'+id,
    method:'get'
  });
}

export function updateReceiverInfo(data) {
  return request({
    url:'/promotion/admin/NsShopBase/edit',
    method:'post',
    data:data
  });
}

export function updateMoneyInfo(data) {
  return request({
    url:'/promotion/admin/NsShopBase/edit',
    method:'post',
    data:data
  });
}

export function updateOrderNote(params) {
  return request({
    url:'/promotion/admin/NsShopBase/edit',
    method:'post',
    params:params
  })
}

export function addReason(data) {
  return request({
    url:'/promotion/admin/NsShopBase/edit',
    method:'post',
    data:data
  })
}

export function updateReason(data) {
  return request({
    url:'/promotion/admin/NsShopBase/edit',
    method:'post',
    data:data
  })
}

export function deleteReason(data) {
  return request({
    url:'/promotion/admin/NsShopBase/del',
    method:'post',
    data:data
  })
}
export function SearchList(params) {
  return request({
    url:'/promotion/admin/NsShopBase/list',
    method:'post',
    data:params
  })
}
