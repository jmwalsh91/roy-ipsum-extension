import { BrowserRouter } from 'react-router-dom'

import Main from './components/Main'
import TestCard from './components/TestCard'

export function App() {
  return (
    <BrowserRouter>
      <Main>
        <TestCard />
      </Main>
    </BrowserRouter>
  )
}
