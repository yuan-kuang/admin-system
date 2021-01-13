<template>
  <div class="el-card__body">
    <form class="el-form">
      <div class="el-form-item">
        <label
          for="flashOrderOvertime"
          class="el-form-item__label"
          style="width: 150px"
          >秒杀订单超过：</label
        >
        <div class="el-form-item__content" style="margin-left: 150px">
          <div
            class="input-width el-input el-input-group el-input-group--append"
          >
            <input
              type="text"
              autocomplete="off"
              class="el-input__inner"
              value="60"
            />
            <div class="el-input-group__append">分</div>
          </div>
          <span class="note-margin">未付款，订单自动关闭</span>
        </div>
      </div>
      <div class="el-form-item">
        <label
          for="normalOrderOvertime"
          class="el-form-item__label"
          style="width: 150px"
          >正常订单超过：</label
        >
        <div class="el-form-item__content" style="margin-left: 150px">
          <div
            class="input-width el-input el-input-group el-input-group--append"
          >
            <input
              type="text"
              autocomplete="off"
              class="el-input__inner"
              value="120"
            />
            <div class="el-input-group__append">分</div>
          </div>
          <span class="note-margin">未付款，订单自动关闭</span>
        </div>
      </div>
      <div class="el-form-item">
        <label
          for="confirmOvertime"
          class="el-form-item__label"
          style="width: 150px"
          >发货超过：</label
        >
        <div class="el-form-item__content" style="margin-left: 150px">
          <div
            class="input-width el-input el-input-group el-input-group--append"
          >
            <input
              type="text"
              autocomplete="off"
              class="el-input__inner"
              value="15"
            />
            <div class="el-input-group__append">天</div>
          </div>
          <span class="note-margin">未收货，订单自动完成</span>
        </div>
      </div>
      <div class="el-form-item">
        <label
          for="finishOvertime"
          class="el-form-item__label"
          style="width: 150px"
          >订单完成超过：</label
        >
        <div class="el-form-item__content" style="margin-left: 150px">
          <div
            class="input-width el-input el-input-group el-input-group--append"
          >
            <input
              type="text"
              autocomplete="off"
              class="el-input__inner"
              value="7"
            />
            <div class="el-input-group__append">天</div>
          </div>
          <span class="note-margin">自动结束交易，不能申请售后</span>
        </div>
      </div>
      <div class="el-form-item">
        <label
          for="commentOvertime"
          class="el-form-item__label"
          style="width: 150px"
          >订单完成超过：</label
        >
        <div class="el-form-item__content" style="margin-left: 150px">
          <div
            class="input-width el-input el-input-group el-input-group--append"
          >
            <input
              type="text"
              autocomplete="off"
              class="el-input__inner"
              value="7"
            />
            <div class="el-input-group__append">天</div>
          </div>
          <span class="note-margin">自动五星好评</span>
        </div>
      </div>
      <div class="el-form-item">
        <div class="el-form-item__content" style="margin-left: 150px">
          <button type="button" class="el-button el-button--primary">
            <span>提交</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
.el-card__body {
  width: 900px;
  margin: 20px auto;
  padding-top: 50px;
  border: 1px solid rgb(245, 238, 238);
  .el-input-group {
    width: 350px;
  }
  .note-margin {
    margin-left: 20px;
  }
}
</style>