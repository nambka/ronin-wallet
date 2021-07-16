import React from 'react'
import styled from 'styled-components'
// import { Spinner } from '@pancakeswap-libs/uikit'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: calc(100vh - 64px);
  padding-top: 16px;
  padding-bottom: 16px;

  margin-left: auto;
  margin-right: auto;
  max-width: 992px;
  padding-left: 16px;
  padding-right: 16px;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      {/* <Spinner /> */}
    </Wrapper>
  )
}

export default PageLoader
