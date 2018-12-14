<template>
  <div class="container">
    <table class="col-xs-12 table">
      <thead>
        <tr>
          <th>用户名</th>
          <th>邮箱</th>
          <th>性别</th>
          <th>省份</th>
          <th>爱好</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.username">
          <td class="text-left">{{item.username}}</td>
          <td class="text-left">{{item.email}}</td>
          <td class="text-left" v-if="item.sex=='男'">
            <span style="color:gray">{{item.sex}}</span>
          </td>
          <td class="text-left" v-else>
            <span style="color:red">{{item.sex}}</span>
          </td>
          <td class="text-left">{{item.province}}</td>
          <td class="text-left">{{item.hobby.join('|')}}</td>
          <td class="text-left">
            <a>修改</a>
            <a>删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "MyTest",
  data() {
    return {
      list: [
        {
          username: "aaaaa",
          email: "123@qq.com",
          sex: "男",
          province: "北京市",
          hobby: ["篮球", "读书", "编程"]
        },
        {
          username: "bbbbb",
          email: "bbbbbbb@163.com",
          sex: "女",
          province: "河北省",
          hobby: ["弹琴", "读书", "插画"]
        },
        {
          username: "aaabb",
          email: "abababab@qq.com",
          sex: "女",
          province: "重庆市",
          hobby: ["篮球"]
        },
        {
          username: "cccccc",
          email: "123@qq.com",
          sex: "男",
          province: "北京市",
          hobby: ["篮球", "读书", "编程"]
        },
        {
          username: "dddddd",
          email: "bbbbbbb@163.com",
          sex: "女",
          province: "河北省",
          hobby: ["弹琴", "读书", "插画"]
        },
        {
          username: "eeeee",
          email: "abababab@qq.com",
          sex: "女",
          province: "重庆市",
          hobby: ["篮球"]
        }
      ]
    };
  },
  methods: {}
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
