<template>
  
  <div class="app-container">
    <div style="border:1px solid #DCDFE6">
        <i class="el-icon-search">筛选搜索</i>
        <el-button>重置</el-button>
        <el-button type="primary">查询搜索</el-button>
        <div>
            商品名称：<el-input placeholder="商品名称" v-model="input">
            推荐状态：<el-select v-model="select" placeholder="全部">
                        <el-option label="未推荐" value="1"></el-option>
                        <el-option label="推荐中" value="2"></el-option>
                     </el-select>
        </div>
    </div>
    <div style="border:1px solid #DCDFE6">
        <i class="el-icon-tickets">数据列表</i>
        <el-button type="text" @click="open">选择商品</el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="商品名字" width="200">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="添加时间" width="210" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.add_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="摘要" width="210" align="center">
        <template slot-scope="scope">{{ scope.row.zhaiyao }}</template>
      </el-table-column>
      <el-table-column class-name="status-col" label="图片" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.img_url }}</template>
      </el-table-column>
      <el-table-column align="center" label="售价" width="60">
        <template slot-scope="scope">{{ scope.row.sell_price }}</template>
      </el-table-column>
      <el-table-column align="center" label="市场价" width="60">
        <template slot-scope="scope">{{ scope.row.market_price }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
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
</template>

<script>
import { getProductList, deleteProduct } from "@/api/product";
import Pagination from "@/components/Pagination";
export default {
  data() {
    return {
      list: [],
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 3
      }
    };
  },
  created() {
    this.getProList();
  },
  methods: {
    async getProList() {
      this.listLoading = true;
      const result = await getProductList(this.listQuery);
      this.list = result.data.items;
      this.total = result.data.total;
      this.listLoading = false;
    },
    async handleDelete(index, row) {
      //调用deleteProduct来向服务器发送请求删除商品
      const result = await deleteProduct({ id: row.id });
      //商品删除成功重新调用getProList来获取商品列表数据
      this.getProList();
    },
    open() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
    }
  },
  components: {
    Pagination
  }
};
</script>