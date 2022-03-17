import { act, renderHook } from '@testing-library/react-hooks'
import useCycle from '../useCycle'

test('initial value', () => {
  const result = renderCycleHook(1)
  result.expect.toBe(2)
})

test('cycling next', () => {
  const result = renderCycleHook()
  result.expect.toBe(1)
  result.next()
  result.expect.toBe(2)
  result.next()
  result.expect.toBe(3)
  result.next()
  result.expect.toBe(4)
  result.next()
  result.expect.toBe(1)
})

test('cycling previous', () => {
  const result = renderCycleHook()
  result.expect.toBe(1)
  result.prev()
  result.expect.toBe(4)
  result.prev()
  result.expect.toBe(3)
  result.prev()
  result.expect.toBe(2)
  result.prev()
  result.expect.toBe(1)
})

function renderCycleHook(dflt = 0) {
  const { result } = renderHook(() => useCycle([1, 2, 3, 4], dflt))
  return {
    get expect() {
      return expect(result.current[0])
    },

    next() {
      act(() => result.current[1]())
    },

    prev() {
      act(() => result.current[2]())
    },
  }
}
