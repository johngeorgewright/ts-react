import { useCallback, useState } from 'react'

export default function useCycle<T>(
  stack: T[],
  initial: number = 0
): [state: T, next: () => void, prev: () => void] {
  const [index, setIndex] = useState(initial)

  const next = useCallback(
    () => setIndex(index === stack.length - 1 ? 0 : index + 1),
    [index, setIndex, stack]
  )

  const previous = useCallback(
    () => setIndex(index === 0 ? stack.length - 1 : index - 1),
    [index, setIndex, stack]
  )

  return [stack[index], next, previous]
}
