<template>
  <div class="app-container">

<el-steps :active="2" align-center>
  <el-step title="填写商品信息"></el-step>
  <el-step title="填写商品促销"></el-step>
  <el-step title="填写商品属性"></el-step>
  <el-step title="选择商品关联"></el-step>
</el-steps>


 

   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="商品分类" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  <el-form-item label="商品分类" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择">
      <el-select label="服装" value="fuzhuang">
       <el-option label="外套" value="waitao"></el-option> 
      </el-select>
      <el-option label="手机数码" value="shoujishuma"></el-option>
      <el-option label="家用电器" value="jiayongdianqi"></el-option>
      <el-option label="家具家装" value="jiajujiazhuang"></el-option>
      <el-option label="汽车用品" value="qicheyongpin"></el-option>
    </el-select>
  </el-form-item>
 
  <el-form-item label="活动时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送" prop="delivery">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="活动性质" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动形式" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>



<script>
import { addProduct } from "@/api/product";
export default {
  data() {
    function isNumber(val) {
      var regPos = /^\d+(\.\d+)?$/; //非负浮点数
      var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
      if (regPos.test(val) || regNeg.test(val)) {
        return true;
      } else {
        return false;
      }
    }
    //表单校验：检验是否是数字的方法
    var checkNumber = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("信息不能为空"));
      }
      setTimeout(() => {
        if (!isNumber(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 200);
    };
    return {
      ruleForm: {
        id: "",
        title: "",
        zhaiyao: "",
        click: "",
        img_url: "",
        sell_price: "",
        market_price: "",
        stock_quantity: ""
      },
      rules: {
        id: [
          { required: true, message: "请输入商品id", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        title: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        zhaiyao: [
          { required: true, message: "请输入商品摘要", trigger: "blur" }
        ],
        click: [{ required: true, validator: checkNumber, trigger: "blur" }],
        sell_price: [
          { required: true, message: "请输入商品售价", trigger: "blur" }
        ],
        market_price: [
          { required: true, message: "请输入商品市场价格", trigger: "blur" }
        ],
        stock_quantity: [
          { validator: checkNumber, trigger: "blur", required: true }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let result = await addProduct(this.ruleForm);
          this.$router.push("/product/index")
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>