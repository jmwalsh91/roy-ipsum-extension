import { render, screen } from '@testing-library/react'
import { describe, test } from 'vitest'

import { App } from '../../App'

describe('App tests', () => {
  test('App children has welcome text', () => {
    render(<App />)
    expect(screen.getByText(/Welcome/i))
  })
})
