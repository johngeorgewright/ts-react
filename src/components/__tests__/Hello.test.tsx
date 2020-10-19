import React from 'react'
import { render } from '@testing-library/react'
import Hello from '../Hello'

test('hello world', () => {
  const component = render(<Hello />)
  expect(component.container).toMatchInlineSnapshot(`
    <div>
      <h1
        class="MuiTypography-root MuiTypography-h3 MuiTypography-gutterBottom"
      >
        @johngeorgewright/ts-react
      </h1>
      <button
        class="MuiButtonBase-root MuiButton-root MuiButton-contained"
        tabindex="0"
        type="button"
      >
        <span
          class="MuiButton-label"
        >
          Morning
           World
        </span>
        <span
          class="MuiTouchRipple-root"
        />
      </button>
    </div>
  `)
})
