/* @flow */

import {
  no,
  noop,
  identity
} from 'shared/util'

import { LIFECYCLE_HOOKS } from 'shared/constants'

export type Config = {
  // user
  optionMergeStrategies: { [key: string]: Function };
  
  silent: boolean;
  productionTip: boolean;
  performance: boolean;
  devtools: boolean;
  errorHandler: ?(err: Error, vm: Component, info: string) => void;
  warnHandler: ?(msg: string, vm: Component, trace: string) => void;
  ignoredElements: Array<string | RegExp>;
  keyCodes: { [key: string]: number | Array<number> };

  // platform
  isReservedTag: (x?: string) => boolean;
  isReservedAttr: (x?: string) => boolean;
  parsePlatformTagName: (x: string) => string;
  isUnknownElement: (x?: string) => boolean;
  getTagNamespace: (x?: string) => string | void;
  mustUseProp: (tag: string, type: ?string, name: string) => boolean;

  // private
  async: boolean;

  // legacy
  _lifecycleHooks: Array<string>;
};

export default ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line

  // 合并策略重写入口
  // 适用于mixins等选项合并中
  // 比如像改写vue data () {}的合并规则 一般情况不需要也不允许去修改合并策略 危险行为
  // optionMergeStrategies['data'] = function (data1, data2) {
  //   return data
  // }
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */

  // 保持静默 不输出警告和信息等
  silent: false,

  /**
   * Show production mode tip message on boot?
   */

  // 是否弹出当前vue版本非生产版本提示 是否需要切换版本信息 
  // 一部分是通过vue自己打包系统控制
  // 也放开给用户重写该变量
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  // 启用开发这工具钩子   需要研究一下这个工具
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  // 是否需要记录性能数据 如果true  会输出一些关键节点的统计数据 比如渲染组件耗时 编译模板耗时
  performance: false,

  /**
   * Error handler for watcher errors
   */
  // 错误处理拦截  可以搭配一些工具收集错误信息
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  // 同上 收集警告信息
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  // 
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  // Object.create创建空对象比较纯净
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  // 是否保留标签
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  // 是否保留属性
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
}: Config)
