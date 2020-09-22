<template>
  <div
    @click="_getCode"
    class="layui-form-mid  svg layui-word-aux"
    v-html="svg"
  ></div>
</template>
<script>
import { codeMinxins } from '../utils/mixin/code';
export default {
  mixins: [codeMinxins]
};
</script>
<style lang="scss" scoped></style>
