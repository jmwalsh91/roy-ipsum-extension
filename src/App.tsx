import { BrowserRouter } from 'react-router-dom'

import Main from './components/Main'
import TestCard from './components/TestCard'
/**
 * Documentatio re App
 * @returns app child components ({@link Main} and {@link TestCard}) wrapped in {@link BrowserRouter}
 */
export function App() {
  return (
    <BrowserRouter>
      <Main>
        <TestCard />
      </Main>
    </BrowserRouter>
  )
}
