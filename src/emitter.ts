/** 导入mitt库函数 */
import mitt from 'mitt';
import { FormItem } from './components/form/type';
/**
 * TODO: Events类型有什么作用，不清楚
 */
export type Events = {
  validate: undefined;
  addFormItem: FormItem;
};
/** 获取事件总线的对象 */
export const emitter = mitt<Events>();
