import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zh from 'vee-validate/dist/locale/zh_CN';
// 使用vue-i18n插件
Vue.use(VueI18n);

// 改写引入的官方本地话语言包，可以根据需求更改更符合场景的内容
zh.messages.email = '请输入一个有效的邮箱格式';
zh.messages.required = '请输入{_field_}';
zh.messages.min = '{_field_}不符合最小长度要求{length}';
zh.messages.max = '{_field_}不符合最大长度要求{length}';

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    zh: {
      // 对应ValidationProvider组件的name属性的值
      fields: {
        name: '账号',
        password: '密码',
        code: '验证码',
        username: '昵称'
      },
      // 传递本地化文本
      validation: zh.messages
    }
  }
});

export { i18n };
