<template>
  <div class="container">
    <div class="el-card__head">
      <i class="el-icon-search"></i>
      <span>筛选搜索</span>
      <button
        type="button"
        class="el-button el-button--primary el-button--small"
        style="float: right"
        @click="submitForm('ruleForm')"
      >
        <span> 查询搜索 </span>
      </button>
      <button
        type="button"
        class="el-button el-button--default el-button--small"
        style="float: right; margin-right: 15px"
        @click="resetForm('ruleForm')"
      >
        <span> 重置 </span>
      </button>
      <el-form
        label-width="160px"
        class="demo-ruleForm"
        :inline="true"
        :rules="rules"
        ref="ruleForm"
        inline-message="true"
      >
        <el-form-item label="输入搜索" prop="search" :span="11">
          <el-input
            v-model="ruleForm.search"
            placeholder="服务单号"
            label="left"
          ></el-input>
        </el-form-item>
        <el-form-item label="处理状态" prop="state">
          <el-select v-model="ruleForm.state" placeholder="全部" label="left">
            <el-option label="待处理"></el-option>
            <el-option label="退货中"></el-option>
            <el-option label="已完成"></el-option>
            <el-option label="已拒绝"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请时间">
          <el-col>
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="请选择时间"
                v-model="ruleForm.date1"
                label="left"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="操作人员" prop="person" :span="11">
          <el-input
            v-model="ruleForm.search"
            placeholder="全部"
            label="left"
          ></el-input>
        </el-form-item>
        <el-form-item label="处理时间">
          <el-col>
            <el-form-item prop="date2">
              <el-date-picker
                type="date"
                placeholder="请选择时间"
                v-model="ruleForm.date1"
                label="left"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
    <div class="el-card__body">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
    </div>
    <div class="el-card__content">
<el-table
    :data="list"
    style="width: 100%"
    border
    element-loading-text="Loading"
    fit
    highlight-current-row>
    <el-table-column
      type="selection"
      width="60"
      align="center">
    </el-table-column>
    <el-table-column
      label="服务单号"
      width="203"
      align="center">
      <template slot-scope="scope">{{ scope.row.serverid }}</template>
    </el-table-column>
    <el-table-column
      label="申请时间"
      width="203"
      align="center">
      <template slot-scope="scope">{{ scope.row.applytime }}</template>
    </el-table-column>
    <el-table-column
      label="用户账号"
      width="450"
      align="center">
      <template slot-scope="scope">{{ scope.row.account }}</template>
    </el-table-column>
    <el-table-column
      label="退款金额"
      width="125"
      align="center">
      <template slot-scope="scope">{{ scope.row.backmoney }}</template>
    </el-table-column>
    <el-table-column
      label="申请状态"
      width="203"
      align="center">
      <template slot-scope="scope">{{ scope.row.applystate }}</template>
    </el-table-column>
    <el-table-column
      label="处理时间"
      width="203"
      align="center">
      <template slot-scope="scope">{{ scope.row.dealtime }}</template>
    </el-table-column>
    <el-table-column
      label="操作"
      width="203"
      align="center">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
    </el-table-column>
    
  </el-table>
  <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getProList"
    />
    </div>


    </div>
</template>

<script>
import { getOrderList } from "@/api/order";
import Pagination from "@/components/Pagination";

export default {
  data() {
    return {
      list: [],
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 10
      },
      ruleForm: {
        search: "",
        date1: "",
        data2:"",
        state: "",
        person:""
      },
      rules: {
        name: [
          { message: "请输入收货人姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        state: [{ message: "请选择订单状态", trigger: "change" }],
        search: [
          { type: "date", message: "请输入订单编号", trigger: "change" },
        ],
        date1: [{ type: "date", message: "请选择日期", trigger: "change" }],
        kind: [{ message: "请选择订单分类", trigger: "change" }],
        purchase: [{ message: "请选择订单来源", trigger: "change" }],
      },
    };
  },
  created() {
    this.getOrdList();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async getOrdList() {
      this.listLoading = true;
      const result = await getOrderList(this.listQuery);
      this.list = result.data.items;
      this.total = result.data.total;
      this.listLoading = false;
    },
  },
  components: {
    Pagination
  }
};
</script>

<style lang='scss'>
.container {
  margin-top: 20px;
  .el-card__head {
    padding: 20px;
    margin-left: 20px;
    margin-right: 20px;
    border: 1px solid rgb(245, 238, 238);
    .demo-ruleForm {
      margin-top: 30px;
    }
  }
  .el-card__body {
    margin:20px;
    padding: 20px;
    border: 1px solid rgb(245, 238, 238);
  }
  .el-card__content{
    border: 1px solid rgb(245, 238, 238);
    margin: 20px;
  }
}
</style>