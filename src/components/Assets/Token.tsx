import React from 'react'
import { Heading, Text, Image } from "@chakra-ui/react"
import styled from 'styled-components'

type Props = {
  onClick?: () => void;
};

const Token = ({onClick}: Props) => {
  let tokenList = [
    {ticker: 'EUR', native: '50 EUR', local: '1,531,972 VND', icon: 'images/eur.png'},
    {ticker: 'YEN', native: '1,000 YEN', local: '210,331 VND', icon: 'images/yen.png'},
    {ticker: 'VND', native: '10,000 VND', local: '10,000 VND', icon: 'images/vnd.png'}]
  let tokenToDisplay = tokenList.map((token) =>
    <TokenWrapper key={Math.random().toString(36).substr(2, 9)} onClick={onClick} >
      <TokenIcon>
        <Image boxSize="24px" src={token.icon} alt={token.ticker} />
      </TokenIcon>
      <TokenValues>
        <Heading as="h6" size="xs" style={{color:'#345', marginBottom:'4px'}}>{token.native}</Heading>
        <Text fontSize="xs" style={{color:'#89a', fontSize:'0.8rem'}}>{token.local}</Text>
      </TokenValues>
    </TokenWrapper>
  );
  return (
    <TokenList>
      {tokenToDisplay}
    </TokenList>
  )
}

export default Token

const MainContainer = styled.div`
  position: relative;
  display: flex;
`;

const TokenList = styled(MainContainer)`
  flex-direction: column;
  width: 100%;  
`;

const TokenWrapper = styled(MainContainer)`
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  background: #f7f9fc;
  cursor: pointer;
  border-radius: 6px;
  &:hover {
    background: #edf1f7;
  }
`;

const TokenIcon = styled(MainContainer)`
  padding: 20px;
`;

const TokenValues = styled(MainContainer)`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
