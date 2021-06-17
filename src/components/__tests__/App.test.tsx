import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

jest.mock('../Hello')

test('App', () => {
  const component = render(<App />)
  expect(component.container).toMatchInlineSnapshot(/*jsx*/ `
    <div>
      <div
        class="MuiContainer-root MuiContainer-maxWidthLg"
      >
        {Hello}
      </div>
    </div>
  `)
})
