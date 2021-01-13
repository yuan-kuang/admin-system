import request from '@/utils/request'

export function getOrderList(params) {
    return request({
        url: '/vue-admin-template/order/list',
        method: 'get',
        params
    })
}


export function deleteOrder(params) {
    return request({
        url: '/vue-admin-template/order/delete/',
        method: 'get',
        params
    })
}


//注意：post请求参数需要通过data来传递
export function addOrder(params) {
    return request({
        url: '/vue-admin-template/order/new/',
        method: 'post',
        data: params
    })
}
