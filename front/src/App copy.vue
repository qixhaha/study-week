<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <div
          class="layui-form-item"
          :class="{ 'form-group--error': $v.name.$error }"
        >
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="username"
              v-model.trim="name"
              @input="setName($event.target.value)"
              placeholder="请输入用户名"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <div class="error layui-form-mid" v-if="!$v.name.required">
            用户名不得为空
          </div>
          <div class="error layui-form-mid" v-if="!$v.name.email">
            用户名输入格式错误
          </div>
          <!-- <div class="layui-form-mid layui-word-aux">辅助文字</div> -->
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
          <div
            class="layui-form-mid layui-word-aux svg"
            @click="getCaptcha"
            v-html="svg"
          ></div>
        </div>
        <button type="button" class="layui-btn">点击登录</button>
        <a href="javascript:;" class="imooc-link">忘记密码</a>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { required, email } from 'vuelidate/lib/validators';
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
  validations: {
    name: {
      required,
      email
    },
    password: {
      required
    },
    code: {
      required
    }
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
.svg {
  position: relative;
  top: -18px;
}
</style>
