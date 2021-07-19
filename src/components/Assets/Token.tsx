import React from 'react'
import { Heading, Text, Image } from "@chakra-ui/react"
import NumberFormat from 'react-number-format';
import styled from 'styled-components'

type Props = {
  token: {
    ticker: string,
    amount: number,
    xrate: number,
    icon: string
  }
  onClick?: () => void;
};

const Token: React.FC<Props> = ({onClick, token}) => {
  return (
    <TokenWrapper onClick={onClick}>
      <TokenIcon>
        <Image boxSize="28px" src={token.icon} alt={token.ticker} />
      </TokenIcon>
      <TokenValues>
        <Heading as="h6" size="xs" style={{color:'#345', marginBottom:'4px'}}>
          <NumberFormat value={token.amount} displayType={'text'} thousandSeparator={true} suffix={" " + token.ticker} />
        
        </Heading>
        <Text fontSize="xs" style={{color:'#89a', fontSize:'0.8rem'}}>
          <NumberFormat value={token.amount*token.xrate} displayType={'text'} thousandSeparator={true} suffix={' VND'} />
        </Text>
      </TokenValues>
    </TokenWrapper>
  )
}

export default Token

const MainContainer = styled.div`
  position: relative;
  display: flex;
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
