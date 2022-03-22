<template>
  <div>
    <input class="el-input--inner" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ElInput'
};
</script>

<script setup lang="ts">
/** 获取输入的内容 */
const props = defineProps<{ modeValue: string }>();
/** 获取emit对象，定义emit格式 */
const emit = defineEmits<{ (e: 'update:model-value', value: string): void }>();
/** 发射(广播)输入内容给FormItem，为了在FormItem中进行校验 */
function onInput(e: Event) {
  const input = e.target as HTMLInputElement;
  emit('update:model-value', input.value);
}
</script>

<style lang="scss">
@import '../styles/mixin';
@include b(input) {
  @include m(inner) {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
  }
}
</style>
