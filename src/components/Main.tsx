import React from 'react'

type Props = {
  children?: JSX.Element | JSX.Element[]
}

function Main({ children }: Props) {
  return <div>{children}</div>
}

export default Main
