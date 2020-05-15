import React from 'react'

import {
  HeaderContainer,
  CenterTitle
} from './styles'

interface IHeaderProps {
  title: string
  renderLeft?: React.ReactNode | any
  renderRight?: React.ReactNode | any
}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  
  const {
    renderLeft = () => {},
    title = '记事本',
    renderRight = () => {}
  } = props

  return (
    <HeaderContainer>
      <div className="auto-width left">
        {renderLeft()}
      </div>
      <CenterTitle>{title}</CenterTitle>
      <div className="auto-width right">
        {renderRight()}
      </div>
    </HeaderContainer>
  )
}

export default React.memo(Header)