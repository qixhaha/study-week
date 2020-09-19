<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <div class="layui-form-item">
          <label class="layui-form-label">密码框</label>
          <div class="layui-input-inline">
            <input
              type="password"
              name="password"
              required
              lay-verify="required"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <div class="layui-form-mid layui-word-aux">辅助文字</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码框</label>
          <div class="layui-input-inline">
            <input
              type="password"
              name="password"
              required
              lay-verify="required"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <div class="layui-form-mid layui-word-aux">辅助文字</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input
              type="password"
              name="password"
              required
              lay-verify="required"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <div class="layui-form-mid layui-word-aux" v-html="svg"></div>
        </div>
        <button type="button" class="layui-btn">点击登录</button>
        <a href="javascript:;" class="imooc-link">忘记密码</a>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'app',
  data() {
    return {
      svg: ''
    };
  },
  mounted() {
    axios.get('http://localhost:3000/getCapcha').then(({ data, status }) => {
      // console.log('验证码结果为:', status);
      if (data.code === 200 && status === 200) {
        this.svg = data.msg;
      }
    });
    // 获取验证码
  }
};
</script>
<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}
.layui-container {
  background: #ffffff;
}

input {
  width: 190px;
}
.imooc-link {
  margin-left: 10px;
  &:hover {
    color: #009688;
  }
}
</style>
