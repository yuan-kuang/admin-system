import Mock from 'mockjs'

const data = {
  items: [{
    "id": 1,
    "title": "2020秋冬新款韩版连帽针织衫开衫女中长款可爱宽松毛衣外套厚",
    "zhaiyao": "女装新款羽绒服女可拆卸内胆狐狸毛毛领保暖外套派克服大衣女潮",
    "click": 10053,
    "img_url": "https://s5.mogucdn.com/mlcdn/c45406/190731_031lb4ll6c9c2k7877792dij2ki6h_640x960.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 106,
    "market_price": 139,
    "stock_quantity": 753,
     "brand":"清新部落",
     "grounding":false,
     "New products":false,
     "recommend":false ,
      "Audit status":false,
  },
{
    "id": 2,
    "title": "女装新款羽绒服女可拆卸内胆狐狸毛毛领保暖外套派克服大衣女潮",
    "zhaiyao": "羽绒服女可拆卸内胆狐狸毛毛领保暖外套派克服大衣女潮",
    "click": 89,
    "img_url": "https://s11.mogucdn.com/mlcdn/c45406/201118_6i3h18difkd438icdldlgl6cbc1j4_640x812.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 498,
    "market_price": 588,
    "stock_quantity": 103,
     "brand":"PROUDLION",
     "grounding": true,
     "New products":true,
     "recommend":true,
      "Audit status":true,
  },
{
    "id": 3,
    "title": "2020新款冬韩版学生小个子短款加厚面包服羊羔毛棉袄棉服外套",
    "zhaiyao": "2019新款冬韩版学生小个子短款加厚面包服羊羔毛棉袄棉服外套",
    "click": 2153,
    "img_url": "https://s11.mogucdn.com/mlcdn/c45406/191026_87ei2c6gifjjb17igedj02364dj75_640x960.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 135,
    "market_price": 192,
    "stock_quantity": 753,
     "brand":"百灵之家",
     "grounding":true,
     "New products":true,
     "recommend":true,
      "Audit status":true,
  },
{
    "id": 4,
    "title": "灯芯绒外套女2020新款冬季ulzzang羊羔棉服加绒加厚潮",
    "zhaiyao": "灯芯绒外套女2020新款冬季ulzzang羊羔毛古着仙女棉服加绒加厚潮",
    "click": 1053,
    "img_url": "https://s5.mogucdn.com/mlcdn/55cf19/201105_51jfb9k8c3df067a9ghffe427fejk_800x800.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 156,
    "market_price": 109,
    "stock_quantity": 500,
     "brand":"麦旋风MAX",
     "grounding":true,
     "New products":true,
     "recommend":true,
      "Audit status":true,
  },
{
    "id": 5,
    "title": "秋冬季新款学生韩版宽松羊羔毛领羽绒服加厚面包服外套女ins潮",
    "zhaiyao": "秋冬季新款学生韩版宽松羊羔毛领羽绒服加厚面包服外套女ins潮",
    "click": 100,
    "img_url": "https://s11.mogucdn.com/mlcdn/c45406/200927_8aaddeae6dla0j784gb50f1cb85k2_4999x6663.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 138,
    "market_price": 197,
    "stock_quantity": 223,
     "brand":"小雅家定制",
     "grounding":true,
     "New products":true,
     "recommend":true ,
      "Audit status":true,
  },

{
    "id": 6,
    "title": "2020秋装新款韩版宽松假两件上衣设计感条纹拼接长袖T恤女",
 
    "zhaiyao": "宽松假两件上衣设计感条纹拼接长袖T恤女",
    "click": 171,
    "img_url": "https://s11.mogucdn.com/mlcdn/c45406/200829_6cji3lgf01fg76f86879h77aj4ge3_4219x6333.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 55,
    "market_price": 139,
    "stock_quantity": 1731,
     "brand":"Kelly港风名品",
     "grounding":true,
     "New products":true,
     "recommend":true,
      "Audit status":true,
  },
{
    "id": 7,
    "title": "2020秋季直筒裤宽松束脚裤毛线奶奶裤针织裤坠感休闲裤女百搭",
    "zhaiyao": "宽松束脚裤毛线奶奶裤针织裤坠感休闲裤女百搭",
    "click": 103,
    "img_url": "https://s5.mogucdn.com/mlcdn/c45406/190731_031lb4ll6c9c2k7877792dij2ki6h_640x960.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 69,
    "market_price": 109,
    "stock_quantity": 75,
     "brand":"新伊家",
     "grounding":true,
     "New products":true,
     "recommend":true,
      "Audit status":true,
  },
{
    "id": 8,
    "title": "秋冬新款韩版灯芯绒宽松阔腿裤大码奶奶裤子长裤加绒加厚休闲裤女2020秋冬新款韩版连帽针织衫开衫女中长款可爱宽松毛衣外套厚",
    "zhaiyao": "大码奶奶裤子长裤加绒加厚休闲裤女连帽针织衫开衫外套女中长款可爱宽松毛衣外套厚",
    "click": 253,
    "img_url": "https://s5.mogucdn.com/mlcdn/c45406/201114_0kidl505lc7306k04higld14b5eb5_640x960.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 70,
    "market_price": 99,
    "stock_quantity": 733,
     "brand":"小茉莉fashion之家",
     "grounding":true,
     "New products":true,
     "recommend":true ,
      "Audit status":true,
  },
{
    "id": 9,
    "title": "秋冬新款胖妹妹遮肉显瘦牛仔裤宽松百搭长裤哈伦萝卜老爹裤子",
    "zhaiyao": "下单即送运费险 支持7天无理由退换货",
    "click": 23,
    "img_url": "https://s5.mogucdn.com/mlcdn/c45406/201013_3c812ek17lj29ajgj5931j2cl1l8a_4888x7332.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 88,
    "market_price": 298,
    "stock_quantity": 7530,
     "brand":"雪尚妃旗舰店",
     "grounding":true,
     "New products":true,
     "recommend":true ,
      "Audit status":true,
  },
{
    "id": 10,
    "title": "哈伦牛仔裤女直筒宽松秋冬2020年新款高腰显瘦冬季加绒老爹裤",
    "zhaiyao": "时尚百搭款，修身高腰，显瘦显腿长~",
    "click": 183,
    "img_url": "https://s5.mogucdn.com/mlcdn/c45406/200831_5lj7k6fllgi324da45ee897jba77k_640x800.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 71,
    "market_price": 131,
    "stock_quantity": 3412,
     "brand":"旗维斯旗舰店",
     "grounding":true,
     "New products":true,
     "recommend":true ,
      "Audit status":true,
  },
{
    "id": 11,
    "title": "冬季套装女长袖加绒工装夹克棉服外套+修身开叉针织连衣裙两件套",
    "zhaiyao": "真的是实穿百搭的一款套装，建议入手哦~",
    "click": 753,
    "img_url": "https://s11.mogucdn.com/mlcdn/c45406/191126_50eh3jbd57abe20772h6lbdk49dkd_800x1200.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 239,
    "market_price": 499,
    "stock_quantity": 213,
     "brand":"可可女装",
     "grounding":false,
     "New products":false,
     "recommend":false ,
      "Audit status":false,
  },
{
    "id": 12,
    "title": "复古时尚套装女韩版高领打底衫宽松毛衣格子半身裙气质显瘦三件套",
    "zhaiyao": "造型感满满 是你想要的美美的感觉 哈哈",
    "click": 389,
    "img_url": "https://s11.mogucdn.com/mlcdn/c45406/200921_2ghhiac9ld2fa2gal366c5i2be06j_800x1200.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 165,
    "market_price": 239,
    "stock_quantity": 331,
     "brand":"可可女装",
     "grounding":true,
     "New products":true,
     "recommend":true ,
      "Audit status":true,
  },
{
    "id": 13,
    "title": "学院风套装女秋冬新款复古麻花慵懒风毛衣灯芯绒显瘦休闲裤两件套",
    "zhaiyao": "宽松显瘦，百搭时尚~",
    "click": 153,
    "img_url": "https://s11.mogucdn.com/mlcdn/c45406/201227_3ad2a5e7kf0h8cke3fhhe98b0i8ga_3800x5700.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 166,
    "market_price": 199,
    "stock_quantity": 353,
     "brand":"末末女孩",
     "grounding":true,
     "New products":true,
     "recommend":true,
      "Audit status":true,
  },
{
    "id": 14,
    "title": "初秋季女装早秋装网红女神气质成熟风冷系心机小清新两件套装",
    "zhaiyao": "初秋季女装早秋装网红女神气质成熟风冷系心机小清新两件套装",
    "click": 10053,
    "img_url": "https://s11.mogucdn.com/mlcdn/c45406/190819_096k0ajhee1dec3a64391i8ch476h_640x960.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 116,
    "market_price": 159,
    "stock_quantity": 753,
     "brand":"麦兜美衣服饰",
     "grounding":true,
     "New products":true,
     "recommend":true,
      "Audit status":true,
  },
{
    "id": 15,
    "title": "秋冬季网红炸街可盐可甜洋气减龄温柔系圣诞新年红毛衣两件套装女",
    "zhaiyao": "可盐可甜洋气减龄温柔系圣诞新年红毛衣两件套装女",
    "click": 100,
    "img_url": "https://s5.mogucdn.com/mlcdn/c45406/201229_2f4d43egdchgg7c2220ech33elk8a_640x960.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 496,
    "market_price": 699,
    "stock_quantity": 530,
     "brand":"初夏蒲公英",
     "grounding":true,
     "New products":true,
     "recommend":true,
      "Audit status":true,
  },
{
    "id": 16,
    "title": "秋冬款假两件卫衣休闲运动加绒加厚小个子洋气韩版两件套装女学生",
    "zhaiyao": "秋冬款假两件卫衣休闲运动加绒加厚小个子洋气韩版两件套装女学生",
    "click": 103,
    "img_url": "https://s5.mogucdn.com/mlcdn/c45406/201010_6jjiila9dkc01581kghdjcei87g3a_3999x5999.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 336,
    "market_price": 499,
    "stock_quantity": 7530,
     "brand":"小茹儿韩版女装",
     "grounding":true,
     "New products":true,
     "recommend":true,
      "Audit status":true,
  },
{
    "id": 17,
    "title": "秋冬新款中长款宽松针织加厚毛衣外套+针织衫+打底裤三件套时尚",
    "zhaiyao": "宽松显瘦，百搭时尚~",
    "click": 103,
    "img_url": "https://s5.mogucdn.com/mlcdn/c45406/201115_411652e5ac257bc3ak1c8ckc73481_640x960.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 146,
    "market_price": 209,
    "stock_quantity": 753,
     "brand":"胖家小妹",
      "grounding":true,
     "New products":true,
     "recommend":true,
      "Audit status":true,
  },
{
    "id": 18,
    "title": "假两件连衣裙收腰显瘦秋季新款小个子拼接气质复古冷淡风过膝长裙",
    "zhaiyao": "法式小众，设计感满满的一款假两件连衣裙~",
    "click": 10053,
    "img_url": "https://s5.mogucdn.com/mlcdn/c45406/200901_6g149a6l2jh6hb398kh0d00hd3d4j_640x960.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 156,
    "market_price": 109,
    "stock_quantity": 753,
     "brand":"小丸子家定制",
      "grounding":true,
     "New products":true,
     "recommend":true,
      "Audit status":true,
  },
{
    "id": 19,
    "title": "春季长袖泫雅风ins超仙法式复古打底赫本小黑裙秋冬季连衣裙子",
    "zhaiyao": "法式初恋桔梗超仙女赫本风衬衣小黑裙",
    "click": 1053,
    "img_url": "https://s11.mogucdn.com/mlcdn/55cf19/200325_42db265h3dk545bjcdj3da9fa85e1_640x960.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 222,
    "market_price": 399,
    "stock_quantity": 853,
     "brand":"Cherrycoco女装",
     "grounding":false,
     "New products":false,
     "recommend":false ,
      "Audit status":false,
  },
{
    "id": 20,
    "title": "连帽卫衣裙女秋冬学生宽松中长款裙子过膝加厚加绒针织连衣裙潮",
    "zhaiyao": "连帽卫衣裙女秋冬学生宽松中长款裙子过膝加厚加绒针织连衣裙潮",
    "click": 1530,
    "img_url": "https://s11.mogucdn.com/mlcdn/c45406/201013_0f8a3057jjb284ih352j3jbgl7k2c_3999x5999.jpg_750x1000.v1cAC.81.jpg",
    "sell_price": 399,
    "market_price": 699,
    "stock_quantity": 900,
     "brand":"无衣伦比女装",
      "grounding":true,
     "New products":true,
     "recommend":true,
      "Audit status":true,
  },



  ]
}



export default [
  {
    url: '/vue-admin-template/product/list',
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
  {
    url: '/vue-admin-template/product/new',
    type: 'post',
    response: config => {
      var product = config.body;
      console.log(product,"99999999999999999999999999")
      data.items.push(product);
      return {
        code: 20000,
        data: {
          message: "添加商品成功"
        }
      }
    }
  }
]
