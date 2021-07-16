import React from 'react'
import styled from 'styled-components'
import Token from './Token'

const Assets: React.FC = () => {
  return (
    <AssetsWrapper>
      <Token />
    </AssetsWrapper>
  )
}

export default Assets

const AssetsWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
`;