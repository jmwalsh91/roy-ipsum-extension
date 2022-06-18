import { RenderResult, cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement } from 'react'
import { afterEach } from 'vitest'

import Main from '../../components/Main'

afterEach(() => {
  cleanup()
})

const customRender = (ui: ReactElement): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => <Main>{children}</Main>,
  })

export * from '@testing-library/react'
export { customRender as render, userEvent }
