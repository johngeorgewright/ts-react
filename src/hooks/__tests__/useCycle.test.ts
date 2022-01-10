import { act, renderHook, RenderResult } from '@testing-library/react-hooks'
import useCycle from '../useCycle'

test('initial value', () => {
  const { result } = renderHook(() => useCycle([1, 2, 3, 4], 1))
  expect(getState(result)).toBe(2)
})

test('cycling next', () => {
  const { result } = renderHook(() => useCycle([1, 2, 3, 4]))
  expect(getState(result)).toBe(1)
  act(() => next(result))
  expect(getState(result)).toBe(2)
  act(() => next(result))
  expect(getState(result)).toBe(3)
  act(() => next(result))
  expect(getState(result)).toBe(4)
  act(() => next(result))
  expect(getState(result)).toBe(1)
})

test('cycling previous', () => {
  const { result } = renderHook(() => useCycle([1, 2, 3, 4]))
  expect(getState(result)).toBe(1)
  act(() => prev(result))
  expect(getState(result)).toBe(4)
  act(() => prev(result))
  expect(getState(result)).toBe(3)
  act(() => prev(result))
  expect(getState(result)).toBe(2)
  act(() => prev(result))
  expect(getState(result)).toBe(1)
})

type CycleResult = RenderResult<
  [state: number, next: () => void, prev: () => void]
>

function getState(cycleResult: CycleResult) {
  return cycleResult.current[0]
}

function next(cycleResult: CycleResult) {
  return cycleResult.current[1]()
}

function prev(cycleResult: CycleResult) {
  return cycleResult.current[2]()
}
