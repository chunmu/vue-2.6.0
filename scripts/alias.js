const path = require('path')

const resolve = p => path.resolve(__dirname, '../', p)

// 别名设置 在代码中可以直接通过别名导入

module.exports = {
  vue: resolve('src/platforms/web/entry-runtime-with-compiler'), // vue全版本入口
  compiler: resolve('src/compiler'), // 编译器入口
  core: resolve('src/core'), // vue核心文件
  shared: resolve('src/shared'), // 工具包
  web: resolve('src/platforms/web'), // web平台入口
  weex: resolve('src/platforms/weex'), // weex平台入口
  server: resolve('src/server'), // ssr入口
  entries: resolve('src/entries'), //
  sfc: resolve('src/sfc') // 
}
