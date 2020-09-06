import React from 'react'
import { Typography, Button } from '@material-ui/core'

export default function Hello() {
  return (
    <>
      <Typography variant="h1" component="h1" gutterBottom>
        @johngeorgewright/ts-react
      </Typography>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </>
  )
}
