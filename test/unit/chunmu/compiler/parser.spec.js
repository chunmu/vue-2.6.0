import { parse } from 'compiler/parser/index'
import { extend } from 'shared/util'
import { baseOptions } from 'web/compiler/options'
import { isIE, isEdge } from 'core/util/env'

describe('parser', () => {
  it('simple element', () => {
    const ast = parse('<h1>hello world</h1>', baseOptions)
    expect(ast.tag).toBe('h1')
    expect(ast.plain).toBe(true)
    expect(ast.children[0].text).toBe('hello world')
  })
})
