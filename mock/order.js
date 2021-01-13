import Mock from 'mockjs'

const data = {
  items: [{
    "id": 12,
    "number":201809150101000001,
    "time": "2018-09-15 12:24:27",
    "account":"test",
    "money":18732,
    "kind":"未支付",
    "source":"APP订单",
    "state":"已关闭",
    "serverid":3,
    "applytime":"2018-10-17 14:34:57",
    "backmoney":3583.98,
    "applystate":"待处理",
    "dealtime":"N/A"
  },
  {
    "id": 13,
    "number":201809150102000002,
    "time": "2018-09-15 12:24:27",
    "account":"test",
    "money":18732,
    "kind":"支付宝",
    "source":"APP订单",
    "state":"待发货",
    "state":"已关闭",
    "serverid":4,
    "applytime":"2018-10-17 14:40:21",
    "backmoney":2022.81,
    "applystate":"退货中",
    "dealtime":"2018-10-18 13:54:10"
  },
  {
    "id": 14,
    "number":201809130101000001,
    "time": "2018-09-13 16:57:40",
    "account":"test",
    "money":18732,
    "kind":"微信",
    "source":"APP订单",
    "state":"已发货",
    "serverid":5,
    "applytime":"2018-10-17 14:44:18",
    "backmoney":591.05,
    "applystate":"已完成",
    "dealtime":"2018-10-18 13:57:10"
  },
  {
    "id": 15,
    "number":201809130102000002,
    "time": "2018-09-13 17:03:00",
    "account":"test",
    "money":18732,
    "kind":"支付宝",
    "source":"APP订单",
    "state":"已完成",
    "serverid":8,
    "applytime":"2018-10-17 14:43:11",
    "backmoney":591.05,
    "applystate":"已拒绝",
    "dealtime":"2018-10-18 13:56:22"
  },
  {
    "id": 16,
    "number":201809150101000001,
    "time": "2018-09-14 16:16:16",
    "account":"test",
    "money":18732,
    "kind":"微信",
    "source":"APP订单",
    "state":"已关闭",
    "serverid":9,
    "applytime":"2018-10-17 14:45:01",
    "backmoney":3585.98,
    "applystate":"已完成",
    "dealtime":"2018-10-24 13:54:10"
  },
  {
    "id": 17,
    "number":201809150101000003,
    "time": "2018-09-15 12:24:27",
    "account":"test",
    "money":18732,
    "kind":"未支付",
    "source":"APP订单",
    "state":"已关闭",
    "serverid":10,
    "applytime":"2018-10-17 14:40:21",
    "backmoney":2022.81,
    "applystate":"退货中",
    "dealtime":"2018-10-18 13:54:10"
  },
  {
    "id": 18,
    "number":201809150102000004,
    "time": "2018-09-15 14:24:29",
    "account":"test",
    "money":18732,
    "kind":"支付宝",
    "source":"APP订单",
    "state":"待发货",
    "serverid":12,
    "applytime":"2018-10-17 14:45:01",
    "backmoney":2022.81,
    "applystate":"已拒绝",
    "dealtime":"2018-10-24 13:54:10"
  },
  {
    "id": 19,
    "number":201809130101000003,
    "time": "2018-09-15 12:24:27",
    "account":"test",
    "money":18732,
    "kind":"未支付",
    "source":"APP订单",
    "state":"已关闭",
    "serverid":13,
    "applytime":"2018-10-17 14:45:01",
    "backmoney":3585.98,
    "applystate":"已完成",
    "dealtime":"2018-10-24 13:54:10"
  },
  {
    "id": 20,
    "number":201809130102000004,
    "time": "2018-09-15 12:24:27",
    "account":"test",
    "money":18732,
    "kind":"未支付",
    "source":"APP订单",
    "state":"已关闭",
    "serverid":15,
    "applytime":"2018-10-17 14:45:01",
    "backmoney":585.09,
    "applystate":"已完成",
    "dealtime":"2018-10-24 13:54:10"
  },
  {
    "id": 21,
    "number":201809150101000005,
    "time": "2018-09-15 12:24:27",
    "account":"test",
    "money":18732,
    "kind":"未支付",
    "source":"APP订单",
    "state":"已关闭",
    "serverid":16,
    "applytime":"2018-10-25 14:45:01",
    "backmoney":3585.98,
    "applystate":"已完成",
    "dealtime":"2018-10-24 13:54:10"
  },
  {
    "id": 22,
    "number":201809150102000006,
    "time": "2018-09-15 12:24:27",
    "account":"test",
    "money":18732,
    "kind":"未支付",
    "source":"APP订单",
    "state":"已关闭",
    "serverid":17,
    "applytime":"2018-10-17 14:45:01",
    "backmoney":3585.98,
    "applystate":"已完成",
    "dealtime":"2018-10-24 13:54:10"
  },
  {
    "id": 23,
    "number":201809130101000005,
    "time": "2018-09-15 12:24:27",
    "account":"test",
    "money":18732,
    "kind":"未支付",
    "source":"APP订单",
    "state":"已关闭",
    "serverid":18,
    "applytime":"2018-10-17 14:45:01",
    "backmoney":3585.98,
    "applystate":"已完成",
    "dealtime":"2018-10-24 13:54:10"
  },
  {
    "id": 24,
    "number":201809130102000006,
    "time": "2018-09-15 12:24:27",
    "account":"test",
    "money":18732,
    "kind":"未支付",
    "source":"APP订单",
    "state":"已关闭",
    "serverid":19,
    "applytime":"2018-10-17 14:45:01",
    "backmoney":3585.98,
    "applystate":"已完成",
    "dealtime":"2018-10-24 13:54:10"
  },
  {
    "id": 25,
    "number":202002250100000003,
    "time": "2018-09-15 12:24:27",
    "account":"test",
    "money":18732,
    "kind":"未支付",
    "source":"APP订单",
    "state":"已关闭",
    "serverid":20,
    "applytime":"2018-10-17 14:45:01",
    "backmoney":3585.98,
    "applystate":"已完成",
    "dealtime":"2018-10-24 13:54:10"
  },
  {
    "id": 26,
    "number":202002250100000004,
    "time": "2018-09-15 12:24:27",
    "account":"test",
    "money":18732,
    "kind":"未支付",
    "source":"APP订单",
    "state":"已关闭",
    "serverid":21,
    "applytime":"2018-10-17 14:45:01",
    "backmoney":2022.81,
    "applystate":"已拒绝",
    "dealtime":"2018-10-24 13:54:10"
  },
  
  ]
}



export default [
  {
    url: '/vue-admin-template/order/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 3 } = config.query
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items.slice((page - 1) * limit, limit * page)
        }
      }
    }
  },
  {
    url: '/vue-admin-template/order/delete',
    type: 'get',
    response: config => {
      const id = config.query.id
      const items = data.items
      var index = items.findIndex(item => {
        if (item.id == id) {
          return true;
        }
      })
      items.splice(index, 1);
      return {
        code: 20000,
        data: {
          message: "删除商品成功"
        }
      }
    }
  },
  // {
  //   url: '/vue-admin-template/order/new',
  //   type: 'post',
  //   response: config => {
  //     var order = config.body;
  //     data.items.push(order);
  //     return {
  //       code: 20000,
  //       data: {
  //         message: "添加商品成功"
  //       }
  //     }
  //   }
  // }
]
