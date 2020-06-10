import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// 万物之源 Vue()直接执行将会被拦截
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

// 这个mixin和我们用vue的mixin不是一回事  只是给Vue原型链添加各种方法属性
initMixin(Vue) // 挂载_init方法 并未执行
stateMixin(Vue) // 挂载$data $props $set $del $watch
eventsMixin(Vue) // 挂载$on  $once  $off $emit 
lifecycleMixin(Vue) // 挂载_update $forceUpdate $destory
renderMixin(Vue) // 执行installRenderHelpers()  挂载$nextTick  _render

export default Vue
