<template>
  <div class="container">
    <div class="col-xs-12">
      <form class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label">用户名:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="data.username">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">邮件:</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" v-model="data.email">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">性别:</label>
          <div class="col-sm-10">
            <input type="radio" v-model="data.sex" value="男">
            <input type="radio" v-model="data.sex" value="女">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">所在地:</label>
          <div class="col-sm-10">
            <select class="form-control" v-model="data.province">
              <option value="北京市">北京市</option>
              <option value="河北省">河北省</option>
              <option value="河南省">河南省</option>
              <option value="重庆市">重庆市</option>
              <option value="广东省">广东省</option>
              <option value="辽宁省">辽宁省</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">爱好:</label>
          <div class="col-sm-10">
            <input type="checkbox" v-model="data.hobby" value="篮球">篮球
            <input type="checkbox" v-model="data.hobby" value="读书">读书
            <input type="checkbox" v-model="data.hobby" value="插画">插画
            <input type="checkbox" v-model="data.hobby" value="编程">编程
            <input type="checkbox" v-model="data.hobby" value="弹琴">弹琴
          </div>
        </div>
        <div>
          <a class="btn btn-info" @click="getdata()">获取数据</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  data() {
    return {
      data: {
        username: "eeeee",
        email: "abababab@qq.com",
        sex: "女",
        province: "辽宁省",
        hobby: ["编程", "弹琴"]
      }
    };
  },
  methods: {
    getdata: function() {
      alert(JSON.stringify(this.data));
    }
  },
  mounted: {}
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
