import React, { useCallback } from 'react'
import { Typography, Button } from '@material-ui/core'
import assertNever from 'assert-never'
import useCycle from '../hooks/useCycle'

enum State {
  morning = 'Morning',
  afternoon = 'Afternoon',
  evening = 'Evening',
}

export default function Hello() {
  const [state, nextState] = useCycle(Object.values(State))
  const updateState = useCallback(nextState, [state])

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        @johngeorgewright/ts-react
      </Typography>
      <Button variant="contained" color={color(state)} onClick={updateState}>
        {state} World
      </Button>
    </>
  )
}

function color(state: State) {
  switch (state) {
    case State.morning:
      return 'default'
    case State.afternoon:
      return 'primary'
    case State.evening:
      return 'secondary'
    default:
      return assertNever(state)
  }
}
