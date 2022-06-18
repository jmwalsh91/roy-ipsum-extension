import React from 'react'

type Props = {
  children?: JSX.Element | JSX.Element[]
}
/**
 * Stand-in component for foundation or style provider
 * @returns children
 */

function Main({ children }: Props) {
  return <div>{children}</div>
}

export default Main
