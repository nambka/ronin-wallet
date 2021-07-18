import React from 'react';
import styled from 'styled-components'
import ButtonT from '../components/ButtonT'
import Assets from '../components/Assets'
import { ButtonGroup, Heading, Text } from "@chakra-ui/react"
import { CopyIcon, StarIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCreditCard, faPaperPlane, faRetweet, faUser } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

const Wallet: React.FC = () => {
  const history = useHistory();
  const navigateToDeposit = () => history.push('/deposit');
  const navigateToSend = () => history.push('/send');
  const navigateToSwap = () => history.push('/swap');
  
  return (
    <Wrapper>
      <TopBar>
        <SecondaryButton>
          <FontAwesomeIcon icon={faCircle} style={{color:'#1273ea', fontSize:'0.5rem'}}/>
          &nbsp;&nbsp;&nbsp;
          <Heading as="h6" size="xs" style={{color:'#123',fontSize:'0.8rem'}}>Ronin Network</Heading>
        </SecondaryButton>
        <SecondaryButton>
          <FontAwesomeIcon icon={faUser} style={{color:'#2287ec'}}/>  
        </SecondaryButton>
      </TopBar>
      <WSummary>
        <WHeader>
          <Flex>
            <Flex>
              <Heading as="h6" size="xs">My Wallet</Heading>&nbsp;&nbsp;
              <Text style={{color:'#8dc9f9', fontSize:'0.9rem'}}>(7300 3777 3888 3334)</Text>
            </Flex>
            <CopyIcon />
          </Flex>
        </WHeader>
        <WBody>
          <FlexCol>
            <Heading as="h2" size="xl">1,000 USD</Heading>
            <Heading as="h5" size="sm" style={{color:'#8dc9f9', marginTop:'10px'}}>23,046,000 VND</Heading>
          </FlexCol>
          <StarIcon w={8} h={8} />
        </WBody>
      </WSummary>
      <Action>
        <ButtonT label="Deposit" faIcon={faCreditCard} onClick={navigateToDeposit}/>
        <ButtonT label="Send" faIcon={faPaperPlane} onClick={navigateToSend}/>
        <ButtonT label="Swap" faIcon={faRetweet} onClick={navigateToSwap} disabled/>
      </Action>
      <AssetsContainer>
        <Heading as="h5" size="sm" style={{marginTop:'10px'}}>Assets</Heading>
        <Assets />
      </AssetsContainer>
    </Wrapper>
  )
}

export default Wallet

const MainContainer = styled.div`
  position: relative;
  display: flex;
`;

const Wrapper = styled(MainContainer)`
  flex-direction: column;
  padding: 0 20px;
`;

const AssetsContainer = styled(MainContainer)`
  flex-direction: column;
  /* margin-top: 10px; */
`;

const TopBar = styled(MainContainer)`
  justify-content: space-between;
  align-items: center;
`;

const WSummary = styled(MainContainer)`
  flex-direction: column;
  padding: 15px 20px 20px;
  background-image: linear-gradient(to right, #1273ea, #1c94f4);
  color: #fff;
  border-radius: 1rem;
  box-shadow:  
    rgba(0, 0, 0, 0.05) 0px 0px 1px, 
    rgba(0, 0, 0, 0.1) 0px 4px 8px, 
    rgba(0, 0, 0, 0.1) 0px 16px 24px;
  `;

const WHeader = styled.div`
  cursor: pointer;
  &:after {
    position: absolute;
    content: '';
    display: block;
    background: #8dc9f966;
    width: calc(100% - 40px);
    height: 1px;
    margin: 10px 0;
  }
`;

const Flex = styled(MainContainer)`
  justify-content: space-between;
  align-items: center;
`;

const WBody = styled(Flex)`
  align-items: flex-end;
  padding: 20px 0 0;
`;

const FlexCol = styled(MainContainer)`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Action = styled(ButtonGroup)`
  padding: 20px 0 0;
  /* justify-content: center; */
  margin-left: auto;
  margin-right: auto;
`;

const SecondaryButton = styled(MainContainer)`
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 5px 12px;
  border-radius: 6px;
  cursor: pointer;
  background-color: #f7f9fc;
  &:hover {
    background-color: #edf1f7;
  }
`;