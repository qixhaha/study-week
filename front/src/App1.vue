<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <validation-provider
            name="name"
            rules="required|email"
            v-slot="{ errors }"
          >
            <div class="layui-input-inline">
              <input
                type="text"
                v-model="name"
                placeholder="请输入用户名"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            <div class="error layui-form-mid">{{ errors[0] }}</div>
          </validation-provider>
          <!-- <div class="layui-form-mid layui-word-aux">{{ errors[0] }}</div> -->
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码框</label>
          <validation-provider
            name="password"
            rules="required|min:4"
            v-slot="{ errors }"
          >
            <div class="layui-input-inline">
              <input
                type="password"
                v-model="password"
                placeholder="请输入密码"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            <div class="error layui-form-mid">{{ errors[0] }}</div>
          </validation-provider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <validation-provider
            name="code"
            rules="required|min:4"
            v-slot="{ errors }"
          >
            <div class="layui-input-inline">
              <input
                type="text"
                v-model="code"
                placeholder="请输入验证码"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            <div class="error layui-form-mid">{{ errors[0] }}</div>
            <div class="layui-form-mid layui-word-aux" v-html="svg"></div>
          </validation-provider>
        </div>
        <button type="button" class="layui-btn">点击登录</button>
        <a href="javascript:;" class="imooc-link">忘记密码</a>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { ValidationProvider } from 'vee-validate';
// import { email, required } from 'vee-validate/dist/rules';
// import * as rules from 'vee-validate/dist/rules';
import '../local/index';
// import zh from 'vee-validate/dist/locale/zh_CN';
// for (const rule in rules) {
//   extend(rule, {
//     ...rules[rule],
//     message: zh.messages[rule]
//   });
// }
// extend('required', {
//   ...required,
//   message: '请输入{_field_}内容'
// });
// extend('email', email);
export default {
  name: 'app',
  data() {
    return {
      svg: '',
      name: '',
      password: '',
      code: ''
    };
  },
  components: {
    ValidationProvider
  },
  mounted() {
    // 获取验证码
    this.getCaptcha();
  },
  methods: {
    // 获取验证码
    getCaptcha() {
      axios.get('http://localhost:3000/getCapcha').then(({ data, status }) => {
        // console.log('验证码结果为:', status);
        if (data.code === 200 && status === 200) {
          this.svg = data.msg;
        }
      });
    },
    setName(value) {
      this.name = value;
      this.$v.name.$touch();
    }
    // setAge(value) {
    //   this.age = value;
    //   this.$v.age.$touch();
    // }
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
.error {
  color: red;
}
</style>
