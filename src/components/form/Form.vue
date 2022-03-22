<template>
  <div class="el-form">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ElForm'
};
</script>

<script setup lang="ts">
import { PropType, provide } from 'vue';
import { Rules } from 'async-validator';
import { ref } from 'vue';
import { FormItem, key } from './type';
import { emitter } from '../../emitter';
/** 获取model数据和value校验规则 */
const props = defineProps({
  model: { type: Object, required: true },
  rules: { type: Object }
});
/** 传递数据和规则给form-item */
provide(key, {
  model: props.model,
  rules: props.rules
});

/** 使用数组来管理所有内部的form-item组件 */
const items = ref<FormItem[]>([]);
/** 接收每一个form-item，并用数组保存 */
emitter.on('addFormItem', (item) => {
  items.value.push(item);
});
/** 表单注册的validate方法，实际执行每个FormItem注册的validate方法 */
function validate(cb: (isValid: boolean) => void) {
  const tasks = items.value.map((item) => {
    item.validate();
  });
  Promise.all(tasks)
    .then(() => {
      cb(true);
    })
    .catch(() => {
      cb(false);
    });
}
/** 暴露给FormItem的ref上面，方便我们使用得知表单校验是否通过 */
defineExpose({ validate });
</script>

<style lang="scss">
@import '../styles/mixin';
@include b(form) {
  margin-top: 20px;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 300px;
}
</style>
