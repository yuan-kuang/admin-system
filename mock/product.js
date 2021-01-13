import Mock from 'mockjs'

const data = {
  items: [{
    "id": 1,
    "title": "阿迪达斯官网 adidas BSC ST IN H J男装冬季户外运动夹棉夹克GN3241 黑色 A/M(175/96A)",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/142130/6/17462/77890/5fcdbf06Eb4a763bd/821973144ecd0cdd.jpg",
    "sell_price": 999,
    "stock_quantity": 100,
     "brand":"adidas",
     "grounding":false,
     "New_products":false,
     "recommend":false ,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":1,
      "sale|10-99":10
  },
{
    "id": 2,
    "title": "阿迪达斯官网 adidas BSC ST IN H J男装冬季户外运动夹棉夹克GN3236 浅猩红 A/M(175/96A)",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/138674/20/18886/102444/5fdc69e3E205d9fd0/0510bcfcab9c097f.jpg",
    "sell_price": 999,
    "stock_quantity": 103,
     "brand":"adidas",
     "grounding": true,
     "New_products":true,
     "recommend":true,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":2,
      "sale|10-99":10
  },
{
    "id": 3,
    "title": "耐克 男子羽绒夹克 NIKE DOWN FILL CU0281 CU0281-010 L",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/154585/22/3505/43096/5f96681fE466f9521/e554a0e32ef60daa.jpg",
    "sell_price": 1099,
    "stock_quantity": 60,
     "brand":"NIKE",
     "grounding":true,
     "New_products":true,
     "recommend":true,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":3,
      "sale|10-99":10
  },
{
    "id": 4,
    "title": "耐克 女子 NIKE AIR FORCE 1 ’07 AF1 运动休闲鞋 315115 315115-112白 36.5",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/154702/12/9259/35294/5fd30c55E9a686e36/3914c96fb42c0771.jpg",
    "sell_price": 749,
    "stock_quantity": 120,
     "brand":"NIKE",
     "grounding":true,
     "New_products":true,
     "recommend":true,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":4,
      "sale|10-99":10
  },
{
    "id": 5,
    "title": "耐克 男子休闲梭织夹克 NIKE SPORTSWEAR AR3133 AR3133-010 L",
    "click": 100,
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/11133/12/6432/621731/5c3ece9dEa0849dc1/7074b39a8c629eee.png",
    "sell_price": 649,
    "stock_quantity": 120,
     "brand":"NIKE",
     "grounding":true,
     "New_products":true,
     "recommend":true, 
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":5,
      "sale|10-99":10
  },

{
    "id": 6,
    "title": "耐克 单肩包 Winterized Crossbody NIKE SPORTSWEAR DB4696 DB4696-010 F",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/139051/16/14789/393821/5fb48e14E389732eb/62bf6a3ce73cb413.png",
    "sell_price": 149,
    "stock_quantity": 120,
     "brand":"NIKE",
     "grounding":true,
     "New_products":true,
     "recommend":true,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":6,
      "sale|10-99":10
  },
{
    "id": 7,
    "title": "AJ1 男子 AIR JORDAN 1 MID 运动鞋 554724 554724-141 46",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/121025/11/16891/261110/5f9bf540Ec89c76c2/25b9aa5bb99b5176.png",
    "sell_price": 969,
    "stock_quantity": 75,
     "brand":"JORDAN",
     "grounding":true,
     "New_products":true,
     "recommend":true,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":7,
      "sale|10-99":10
  },
{
    "id": 8,
    "title": "PUMA彪马 2020年男子休闲系列羊羔绒外套53080812 53080812 M",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/112050/30/19765/79832/5f83f65aE2884c526/a32a3f2db3d0236b.jpg",
    "sell_price": 609,
    "stock_quantity": 733,
     "brand":"PUMA",
     "grounding":true,
     "New_products":true,
     "recommend":true ,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":8,
      "sale|10-99":10
  },
{
    "id": 9,
    "title": "PUMA彪马 2020年男子休闲系列针织外套59929301 59929301 XL",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/140793/15/4206/70301/5f238facE393c148e/1e41881e3bdaed01.jpg",
    "sell_price": 339,
    "stock_quantity": 7530,
     "brand":"PUMA",
     "grounding":true,
     "New_products":true,
     "recommend":true, 
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":9,
      "sale|10-99":10
  },
{
    "id": 10,
    "title": "AJ1 幼童 AIR JORDAN 1 MID ALT (PS) 运动童鞋 AT4612 AT4612-105 32",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/158260/28/423/46103/5feaea39E035f3388/55f32a1d86ad114b.jpg",
    "sell_price": 499,
    "stock_quantity": 3412,
     "brand":"JORDAN",
     "grounding":true,
     "New_products":true,
     "recommend":true ,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":10,
      "sale|10-99":10
  },
{
    "id": 11,
    "title": " AJ 女子 AIR JORDAN ZOOM ’92 运动鞋 CK9184 CK9184-105 36.5",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/113953/19/15062/115993/5f3e2964Ed1167c57/2b53048b7ffbce8e.jpg",
    "sell_price": 1099,
    "stock_quantity": 213,
    "brand":"JORDAN",
     "grounding":false,
     "New_products":false,
     "recommend":false ,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":11,
      "sale|10-99":10
  },
{
    "id": 12,
    "title": "PUMA彪马 2020年女子休闲系列Leadcat FTR Tiger休闲鞋37481301 37481301 37",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/117970/17/11615/24594/5f040cfdE20089f85/4d87552d997a9a4e.jpg",
    "sell_price": 278,
    "stock_quantity": 120,
     "brand":"PUMA",
     "grounding":true,
     "New_products":true,
     "recommend":true ,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":12,
      "sale|10-99":10
  },
{
    "id": 13,
    "title": "VANS万斯 2021年中性Sk8-Mid Reissue帆布鞋/硫化鞋VN0A391FTOZ VN0A391FTOZ 41",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/140827/34/20648/41811/5fe9319fE4b0ed9ee/f636aabd46f1b411.jpg",
    "sell_price": 635,
    "stock_quantity": 353,
     "brand":"VANS",
     "grounding":true,
     "New_products":true,
     "recommend":true,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":13,
      "sale|10-99":10
  },
{
    "id": 14,
    "title": "adidas neo阿迪休闲2020男子M CB DWN PUFF羽绒服GJ8816 GJ8816 L",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/148355/30/8884/72129/5f698affE2a44a0bc/2af3c482d4a97f5f.jpg",
    "sell_price": 749,
    "stock_quantity": 753,
     "brand":"adidas",
     "grounding":true,
     "New_products":true,
     "recommend":true,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":14,
      "sale|10-99":10
  },
{
    "id": 15,
    "title": "VANS万斯 2020年女子双肩包VN0A3JAGP8A VN0A3JAGP8A F",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/144050/37/791/104187/5ee85c38E53abdfe3/1563b77be8587152.jpg",
    "sell_price": 460,
    "stock_quantity": 530,
     "brand":"VANS",
     "grounding":true,
     "New_products":true,
     "recommend":true,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":15,
      "sale|10-99":10
  },
{
    "id": 16,
    "title": "adidas阿迪达斯2020中性MH CAP帽子FM2324 FM2324 OSF",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/125253/4/7044/39571/5f0d0885Edeecdd68/f52303880ae2eaf1.jpg",
    "sell_price": 129,
    "stock_quantity": 7530,
     "brand":"adidas",
     "grounding":true,
     "New_products":true,
     "recommend":true,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":16,
      "sale|10-99":10
  },
{
    "id": 17,
    "title": "AJ 男子混色网眼布短裤 AIR JORDAN JUMPMAN DIAMOND CU2350 CU2350-010 M",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/131303/19/3331/569293/5efa93eaE49bb39e7/ba4ee58b4b50729f.png",
    "sell_price": 305,
    "stock_quantity": 753,
     "brand":"JORDAN",
      "grounding":true,
     "New_products":true,
     "recommend":true,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":17,
      "sale|10-99":10
  },
{
    "id": 18,
    "title": "adidas阿迪达斯 2020中性CL 2IN1双肩包 GM4305 GM4305 F",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/146732/14/3512/77404/5f179554Eac19d21b/fe5ef5d1bcb8ef89.jpg",
    "sell_price": 269,
    "stock_quantity": 753,
     "brand":"adidas",
      "grounding":true,
     "New_products":true,
     "recommend":true,
      "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":18,
      "sale|10-99":10
  },
{
    "id": 19,
    "title": "耐克 男子 NIKE AIR FORCE 1 HIGH '07 LV8 运动鞋 CT2306 CT2306-100 41",
    "img_url": "https://img14.360buyimg.com/n1/s546x546_jfs/t1/138956/2/11491/282381/5f8eb75dEdcaf701a/7957534dd24e0465.png",
    "sell_price": 849,
    "stock_quantity": 60,
     "brand":"NIKE",
     "grounding":false,
     "New_products":false,
     "recommend":false ,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":19,
      "sale|10-99":10
  },
{
    "id": 20,
    "title": "PUMA彪马2020女子经典生活系列SUEDEPLATFORMCOR休闲鞋36355901（延续款） 36355902 38.5",
    "img_url": "https://img14.360buyimg.com/n0/jfs/t1/100784/38/19886/67015/5ea13fe7E323dc0ac/ff9dd964894b4f31.jpg",
    "sell_price": 639,
    "stock_quantity": 900,
     "brand":"PUMA",
      "grounding":true,
     "New_products":true,
     "recommend":true,
     "Audit_status":"未审核",
      "productSn|1000000-9999999":10,
      "sort":20,
      "sale|10-99":10
  },
  ]
}



export default [
  {
    url: '/vue-admin-template/product/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 5 } = config.query
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
    url: '/vue-admin-template/product/delete',
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
  //   url: '/vue-admin-template/product/new',
  //   type: 'post',
  //   response: config => {
  //     var product = config.body;
  //     console.log(product,"99999999999999999999999999")
  //     data.items.push(product);
  //     return {
  //       code: 20000,
  //       data: {
  //         message: "添加商品成功"
  //       }
  //     }
  //   }
  // }
]
