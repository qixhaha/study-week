import { extend, configure } from 'vee-validate';
import {
  required,
  email,
  min,
  length,
  between,
  max,
  confirmed
} from 'vee-validate/dist/rules';
import { i18n } from './i18n';

// 修改默认配置项
configure({
  defaultMessage: (field, values) => {
    values._field_ = i18n.t(`fields.${field}`);
    return i18n.t(`validation.${values._rule_}`, values);
  }
});

// 按需引入规则
extend('required', required);
extend('email', email);
extend('min', min);
extend('length', length);
extend('between', between);
extend('max', max);
extend('confirmed', confirmed);
