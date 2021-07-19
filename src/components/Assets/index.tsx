import React from 'react'
import styled from 'styled-components'
import Token from './Token'

type Props = {
  assets: {
    ticker: string,
    amount: number,
    xrate: number,
    icon: string
  }[];
  onClick?: () => void;
};

const Assets: React.FC<Props> = ({assets, onClick}) => {
  let tokenToDisplay = assets.map((_t) =>
    <Token 
      key={Math.random().toString(36).substr(2, 9)} 
      token={_t} 
      onClick={onClick}/>
  );

  return (
    <AssetsWrapper >
      {tokenToDisplay}
    </AssetsWrapper>
  )
}

export default Assets

const MainContainer = styled.div`
  position: relative;
  display: flex;
`;
const AssetsWrapper = styled(MainContainer)`
  margin-top: 10px;
  flex-direction: column;
  width: 100%;  
`;