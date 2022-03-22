<template>
  <div class="el-form-item">
    <label v-if="label">{{ label }}</label>
    <slot />
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ElFormItem'
};
</script>

<script setup lang="ts">
/** 校验规则组件库地址：https://github.com/yiminghe/async-validator */
import Schema from 'async-validator';
import { inject, onMounted, ref } from 'vue';
import { FormItem, key } from './type';
import { emitter } from '../../emitter';
/** FromItem上传递的属性格式 */
interface Props {
  label?: string;
  prop?: string;
}
/** 初始化props获取的值 */
const props = withDefaults(defineProps<Props>(), { label: '', prop: '' });
/** 校验错误信息 */
const error = ref('');
/** 获取From组件传递的数据和规则 */
const formData = inject(key);
const o: FormItem = {
  validate
};
/** 暴露注册的validate方法到父组件的ref上面 */
defineExpose(o);

onMounted(() => {
  if (props.prop) {
    /** 接收input组件输入内容后广播的校验事件validate */
    emitter.on('validate', () => {
      validate();
    });
    /** 发布addFormItem事件给Form组件 */
    emitter.emit('addFormItem', o);
  }
});
/**
 * @name 校验函数
 * @param Promise
 */
function validate() {
  if (formData?.rules === undefined) {
    return Promise.resolve({ result: true });
  }
  const rules = formData.rules[props.prop];
  const value = formData.model[props.prop];
  const schema = new Schema({ [props.prop]: rules });
  return schema.validate({ [props.prop]: value }, (errors) => {
    if (errors) {
      error.value = errors[0].message || '校检错误';
    } else {
      error.value = '';
    }
  });
}
</script>

<style lang="scss">
@import '../styles/mixin';
@include b(form-item) {
  margin-bottom: 22px;
  label {
    line-height: 1.2;
    margin-bottom: 5px;
    display: inline-block;
  }
  & .el-form-item {
    margin-bottom: 0;
  }
}
.error {
  color: red;
}
</style>
