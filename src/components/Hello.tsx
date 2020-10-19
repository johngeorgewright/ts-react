import React, { useCallback } from 'react'
import { Typography, Button } from '@material-ui/core'
import useCycle from '../hooks/useCycle'

const states = ['Morning', 'Afternoon', 'Evening']

export default function Hello() {
  const [state, nextState] = useCycle(states)
  const updateState = useCallback(nextState, [state])

  const color =
    state === 'Morning'
      ? 'default'
      : state === 'Afternoon'
      ? 'primary'
      : 'secondary'

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        @johngeorgewright/ts-react
      </Typography>
      <Button variant="contained" color={color} onClick={updateState}>
        {state} World
      </Button>
    </>
  )
}
