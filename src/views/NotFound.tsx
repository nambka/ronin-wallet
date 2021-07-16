import React from 'react'
import styled from 'styled-components'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = () => {

  return (
    <>
      <StyledNotFound>
        <img width="64px" alt="Page not found"/>
        <h1>404</h1>
        <div>{'Oops, page not found.'}</div>
        <a href="/">{'Back Home'}</a>
      </StyledNotFound>
    </>
  )
}

export default NotFound
