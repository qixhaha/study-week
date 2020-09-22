<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{ name: 'login' }">登入</router-link>
          </li>
          <li class="layui-this">
            找回密码
            <!--重置密码-->
          </li>
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
                  <label class="layui-form-label">邮箱</label>
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
                        class="layui-input"
                      />
                    </div>
                    <div class="error layui-form-mid">{{ errors[0] }}</div>
                  </validation-provider>
                  <!-- <div class="layui-form-mid layui-word-aux">{{ errors[0] }}</div> -->
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
                    <div
                      @click="_getCode"
                      class="layui-form-mid  svg layui-word-aux"
                      v-html="svg"
                    ></div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" alert="1" lay-filter="*" lay-submit>
                    提交
                  </button>
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
import { getCode } from '@/api/login';
import { ValidationProvider } from 'vee-validate';
export default {
  name: 'forget',
  data() {
    return {
      name: '',
      svg: '',
      code: ''
    };
  },
  components: {
    ValidationProvider
  },
  mounted() {
    this._getCode();
  },
  methods: {
    _getCode() {
      getCode().then(res => {
        // console.log(res);
        if (res.code === 200) {
          this.svg = res.msg;
        }
      });
    }
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
