import { InjectionKey } from 'vue';
import { Rules, Values } from 'async-validator';

/** 表单Form的上下文 */
export type FormData = {
  model: Record<string, unknown>;
  rules?: Rules;
};
/** 表单内部FormItem的上下文 */
export type FormItem = {
  validate: () => Promise<Values>;
};

export type FormType = {
  validate: (cb: (isValid: boolean) => void) => void;
};
/**
 * TuDO: key这里没看懂, 暂时理解可以按照传入的参数，以一定规则产生一个唯一标识名。
 */
export const key: InjectionKey<FormData> = Symbol('form-data');
