<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{ name: 'reg' }">注册</router-link>
          </li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0;"
        >
          <div class="layui-tab-item layui-show">
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
                    <!-- <div
                      @click="_getCode"
                      class="layui-form-mid  svg layui-word-aux"
                      v-html="svg"
                    ></div> -->
                    <code-com />
                  </validation-provider>
                </div>
                <button type="button" class="layui-btn">点击登录</button>
                <router-link to="forget" class="imooc-link"
                  >忘记密码</router-link
                >
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import CodeCom from '../components/Code';
export default {
  name: 'login',
  data() {
    return {
      // 用户名
      name: '',
      // 密码
      password: '',
      // 验证码
      code: ''
    };
  },
  components: {
    ValidationProvider,
    CodeCom
  }
};
</script>

<style lang="scss" scoped>
.svg {
  position: relative;
  top: -4px;
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
