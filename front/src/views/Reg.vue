<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{ name: 'login' }">登入</router-link>
          </li>
          <li class="layui-this">注册</li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0;"
        >
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">用户名</label>
                  <validation-provider
                    name="name"
                    rules="required|min:4"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="name"
                        v-model="name"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="error layui-form-mid">{{ errors[0] }}</div>
                    <div class="layui-form-mid layui-word-aux">
                      将会成为您唯一的登入名
                    </div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label">昵称</label>
                  <validation-provider
                    name="username"
                    rules="required|min:4"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        v-model="username"
                        name="username"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="error layui-form-mid">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <validation-provider
                    name="password"
                    rules="required|min:6|max:16"
                    vid="confirmation"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        name="pass"
                        v-model="password"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="error layui-form-mid">{{ errors[0] }}</div>
                    <div class="layui-form-mid layui-word-aux">6到16个字符</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <label for="L_repass" class="layui-form-label"
                    >确认密码</label
                  >
                  <validation-provider
                    name="password"
                    v-slot="{ errors }"
                    rules="confirmed:confirmation"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        v-model="repassword"
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
                <div class="layui-form-item">
                  <button class="layui-btn" lay-filter="*" lay-submit>
                    立即注册
                  </button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
                  <a
                    href
                    onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-qq"
                    title="QQ登入"
                  ></a>
                  <a
                    href
                    onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-weibo"
                    title="微博登入"
                  ></a>
                </div>
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
  name: 'reg',
  components: {
    ValidationProvider,
    CodeCom
  },
  data() {
    return {
      // 用户名
      name: '',
      // 昵称
      username: '',
      // 密码
      password: '',
      // 确认密码
      repassword: '',
      // 验证码
      code: '',
      svg: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.svg {
  position: relative;
  top: -18px;
}
</style>
