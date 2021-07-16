import React, { useState } from 'react';
import styled from 'styled-components'
import { Button, ButtonGroup } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCopy, faCreditCard, faPaperPlane, faRetweet, faUser } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

const Wallet: React.FC = () => {
  const history = useHistory();
  const navigateToDeposit = () => history.push('/deposit');
  const navigateToSend = () => history.push('/send');
  const navigateToSwap = () => history.push('/swap');
  
  return (
    <Wrapper>
      <TopBar>
        <Network><FontAwesomeIcon icon={faCircle} style={{color:'#1273ea', fontSize:'0.6rem'}}/>&nbsp;&nbsp;&nbsp;Ronin Network</Network>
        <LinkIcon icon={faUser} style={{color:'#1273ea'}}/>
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
      </TopBar>
      <WSummary>
        <WHeader>
          <Flex>
            <h5>My Wallet</h5>
            <div style={{color:'#8dc9f9', fontSize:'0.85rem'}}>(7300 3777 3888 3334)</div>
            <LinkIcon icon={faCopy} />
          </Flex>
        </WHeader>
        <h2 className="ronin-header">1,000 USD</h2>
        <h4>23,046,000 VND</h4>
      </WSummary>
      <Action>
        <Button label="Deposit" faIcon={faCreditCard} onClick={navigateToDeposit}/>
        <Button label="Send" faIcon={faPaperPlane} onClick={navigateToSend}/>
        <Button label="Swap" faIcon={faRetweet} onClick={navigateToSwap} disabled/>
      </Action>
      <h3 className="ronin-header">Assets</h3>
      {/* <Assets /> */}
    </Wrapper>
  )
}

export default Wallet

const MainContainer = styled.div`
  position: relative;
  display: flex;
  /* margin-left: auto; */
  /* margin-right: auto; */
`;

const Wrapper = styled(MainContainer)`
  flex-direction: column;
  padding: 0 20px;
`;

const TopBar = styled(MainContainer)`
  justify-content: space-between;
  align-items: center;
`;

const WSummary = styled(MainContainer)`
  flex-direction: column;
  padding: 20px;
  background-image: linear-gradient(to right, #1273ea, #1c94f4);
  color: #fff;
  border-radius: 1rem;
  box-shadow:  
    rgba(0, 0, 0, 0.05) 0px 0px 1px, 
    rgba(0, 0, 0, 0.1) 0px 4px 8px, 
    rgba(0, 0, 0, 0.1) 0px 16px 24px;
  `;

const WHeader = styled.div`
  &:after {
    position: absolute;
    content: '';
    display: block;
    background: #8dc9f9;
    width: calc(100% - 40px);
    height: 1px;
    margin: 10px 0;
  }
`;

const Flex = styled(MainContainer)`
  flex-direction: row;
  justify-content: space-between;
`;

const Action = styled(ButtonGroup)`
  padding: 20px;
  /* justify-content: center; */
  margin-left: auto;
  margin-right: auto;
`;

const Network = styled.h5`
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  background-color: #f7f9fc;
  &:hover {
    background-color: #edf1f7;
  }
`;

const LinkIcon = styled(FontAwesomeIcon)`
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #edf1f7;
  }
`;