<template>
  <div class="container">
    <div class="el-card__head">
      <i class="el-icon-search"></i>
      <span>筛选搜索</span>
      <button
        type="button"
        class="el-button el-button--primary el-button--small"
        style="float: right"
        @click="handleSearchList('formName')"
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
        :model="ruleForm"
        ref="ruleForm"
        inline-message="true"
      >
        <el-form-item label="输入搜索" prop="search" :span="11">
          <el-input
            v-model="ruleForm.search"
            placeholder="订单编号"
            label="left"
          ></el-input>
        </el-form-item>
        <el-form-item label="收货人员" prop="name">
          <el-input
            v-model="ruleForm.name"
            placeholder="收货人姓名/手机号"
            label="left"
          ></el-input>
        </el-form-item>
        <el-form-item label="提交时间">
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
        <el-form-item label="订单状态" prop="state">
          <el-select v-model="ruleForm.state" placeholder="全部" label="left">
            <el-option label="待付款"></el-option>
            <el-option label="待发货"></el-option>
            <el-option label="已发货"></el-option>
            <el-option label="已完成"></el-option>
            <el-option label="已关闭"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="订单分类" prop="kind">
          <el-select v-model="ruleForm.kind" placeholder="全部" label="left">
            <el-option label="正常订单"></el-option>
            <el-option label="秒杀订单"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="订单来源"
          prop="purchase"
          style="margin-left: -15px"
        >
          <el-select
            v-model="ruleForm.purchase"
            placeholder="全部"
            label="left"
          >
            <el-option label="PC订单"></el-option>
            <el-option label="APP订单"></el-option>
          </el-select>
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
        highlight-current-row
      >
        <el-table-column type="selection" width="60" align="center">
        </el-table-column>
        <el-table-column label="编号" width="75" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="订单编号" width="180" align="center">
          <template slot-scope="scope">{{ scope.row.number }}</template>
        </el-table-column>
        <el-table-column label="提交时间" width="180" align="center">
          <template slot-scope="scope">{{ scope.row.time }}</template>
        </el-table-column>
        <el-table-column label="用户账号" width="450" align="center">
          <template slot-scope="scope">{{ scope.row.account }}</template>
        </el-table-column>
        <el-table-column label="订单金额" width="125" align="center">
          <template slot-scope="scope">￥{{ scope.row.money }}</template>
        </el-table-column>
        <el-table-column label="支付方式" width="125" align="center">
          <template slot-scope="scope">{{ scope.row.kind }}</template>
        </el-table-column>
        <el-table-column label="订单来源" width="125" align="center">
          <template slot-scope="scope">{{ scope.row.source }}</template>
        </el-table-column>
        <el-table-column label="订单状态" width="125" align="center">
          <template slot-scope="scope">{{ scope.row.state }}</template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="info" @click="handleClick(scope.row)"
              >查看订单</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除订单</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getOrdList"
    />
  </div>
</template>

<script>
import { getOrderList, deleteOrder } from "@/api/order";
import Pagination from "@/components/Pagination";

export default {
  data() {
    return {
      flag:true,
      list: [],
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 10
      },
      ruleForm: {
        search: "",
        name: "",
        date1: "",
        state: "",
        kind: "",
        purchase: "",
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
    handleSearchList(formName){
      console.log(this.$refs.ruleForm)
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
    async handleDelete(index,row){
        this.$confirm('是否要进行该删除操作？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
              const result = deleteOrder({ id: row.id })
              this.getOrdList()
              this.$message({
                type: 'success',
                message: '删除成功!'
          });          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        if(this.confirmButtonText = "确定"){
        }
    }
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
    margin: 20px;
    padding: 20px;
    border: 1px solid rgb(245, 238, 238);
  }
  .el-card__content {
    border: 1px solid rgb(245, 238, 238);
    margin: 20px;
  }
}
</style>