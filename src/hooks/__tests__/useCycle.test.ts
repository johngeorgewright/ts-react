import { act, renderHook, RenderResult } from '@testing-library/react-hooks'
import useCycle from '../useCycle'

test('initial value', () => {
  const { result } = renderHook(() => useCycle([1, 2, 3, 4], 1))
  expect(getState(result)).toBe(2)
})

test('cycling next', () => {
  const { result } = renderHook(() => useCycle([1, 2, 3, 4]))
  expect(getState(result)).toBe(1)
  next(result)
  expect(getState(result)).toBe(2)
  next(result)
  expect(getState(result)).toBe(3)
  next(result)
  expect(getState(result)).toBe(4)
  next(result)
  expect(getState(result)).toBe(1)
})

test('cycling previous', () => {
  const { result } = renderHook(() => useCycle([1, 2, 3, 4]))
  expect(getState(result)).toBe(1)
  prev(result)
  expect(getState(result)).toBe(4)
  prev(result)
  expect(getState(result)).toBe(3)
  prev(result)
  expect(getState(result)).toBe(2)
  prev(result)
  expect(getState(result)).toBe(1)
})

type CycleResult = RenderResult<
  [state: number, next: () => void, prev: () => void]
>

function getState(cycleResult: CycleResult) {
  return cycleResult.current[0]
}

function next(cycleResult: CycleResult) {
  act(() => cycleResult.current[1]())
}

function prev(cycleResult: CycleResult) {
  act(() => cycleResult.current[2]())
}
