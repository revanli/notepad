import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1rem;
  padding: 0 .24rem;
  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.3);
  margin-bottom: .2rem;
  .auto-width {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .left > * {
    margin-right: auto
  }
  .right > * {
    margin-left: auto
  }
`

export const CenterTitle = styled.div`
  flex: 1;
  font-size: .3rem;
  text-align: center;
  color: #505050;
  align-self: center;
`