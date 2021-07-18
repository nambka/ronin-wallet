import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
import Assets from '../components/Assets'
import Token from '../components/Assets/Token'
import { Button as ButtonUI, Image, useDisclosure } from "@chakra-ui/react"
import { 
  Heading, 
  Text, 
  ButtonGroup,
  InputGroup, 
  Input,
  InputLeftElement,
  InputRightElement, 
  FormControl,
  FormLabel,
  FormHelperText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton } from "@chakra-ui/react"
import { HamburgerIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

const Send: React.FC = () => {
  const history = useHistory();
  const navigateToWallet = () => history.push('/wallet');
  const { 
    isOpen: isOpenAssets, 
    onOpen: onOpenAssets, 
    onClose: onCloseAssets 
  } = useDisclosure()
  const { 
    isOpen: isOpenAlert, 
    onOpen: onOpenAlert, 
    onClose: onCloseAlert 
  } = useDisclosure()

  return (
    <SendWrapper>
      <TopContainer>
        <TopBar>
          <ChevronLeftIcon style={{cursor:'pointer'}} onClick={navigateToWallet}/>
          <Heading as="h6" size="xs">Send Assets</Heading>
          <HamburgerIcon style={{opacity: '0'}}/>
        </TopBar>

        <Body>
          <FControl id="from">
            <LabelLeft>From</LabelLeft>
            <Input variant="filled" type="text" placeholder="My Wallet (7300...3334)" />
          </FControl>

          <FControl id="to">
            <LabelLeft>To</LabelLeft>
            <Input type="text" />
          </FControl>

          <FControl id="assets">
            <LabelLeft>Asset</LabelLeft>
            <InputGroup>
              <InputLeftElement
                  pointerEvents="none"
                  children={
                    <TokenWrapper>
                      <Image boxSize="20px" src="images/eur.png" alt="images/eur.png" />
                      <Text fontSize="sm" style={{color:'#123', paddingLeft:'10px'}}>EUR</Text>
                    </TokenWrapper>
                  }
                />
              <Input type="text" onClick={onOpenAssets} />
              <InputRightElement children={
                <HamburgerIcon  
                  color="#89a" 
                  style={{cursor:'pointer'}}
                  onClick={onOpenAssets} />
                }/>
            </InputGroup>
          </FControl>

          <FControl id="amount">
            <LabelInfo>
              <LabelLeft>Amount</LabelLeft>
              <LabelRight>Available: 50 EUR</LabelRight>
            </LabelInfo>
            <InputGroup>
              <Input type="number"/>
              <InputRightElement width="4.5rem" >
                <ButtonUI h="1.5rem" size="sm" onClick={() => void 0}>
                  <Text fontSize="xs" style={{color:'#456'}}>MAX</Text>
                  {/* {max ? "" : "MAX"} */}
                </ButtonUI>
              </InputRightElement>
            </InputGroup>
          </FControl>
        </Body>
      </TopContainer>

      <BottomContainer>
        <Button variant="outline" width="100%" onClick={navigateToWallet} >Cancel</Button>
        <Button variant="solid" width="100%" onClick={onOpenAlert} >Send</Button>
      </BottomContainer>

      <Modal isOpen={isOpenAssets} size="xs" onClose={onCloseAssets}>
        <ModalOverlay />
        <ModalContent>
          <ModalHdr>
            <Heading as="h6" size="xs">Select an Asset</Heading>
          </ModalHdr>
          <ModalCloseButton />
          <ModalBody>
            <Token onClick={onCloseAssets}/>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal closeOnOverlayClick={false} isOpen={isOpenAlert} size="xs" onClose={onCloseAlert}>
        <ModalOverlay />
        <ModalContent>
          <AlertHdr>Successfully sent</AlertHdr>
          <AlertBody>
            <Text fontSize="xl">2,000 <b>EUR</b></Text>
            <Text fontSize="sm">Thank you for using our service!</Text>
          </AlertBody>

          <ModalFooter>
            <Button width="100%" onClick={navigateToWallet}>OK</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </SendWrapper>
  )
}

export default Send

const MainContainer = styled.div`
  position: relative;
  display: flex;
`;

const SendWrapper = styled(MainContainer)`
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 20px;
`;

const TopBar = styled(MainContainer)`
  justify-content: space-between;
  align-items: center;
`;

const TopContainer = styled(MainContainer)`
  flex-direction: column;
`;

const Body = styled(MainContainer)`
  flex-direction: column;
  margin-top: 50px;
`;

const BottomContainer = styled(ButtonGroup)`
  justify-content: space-between;
  align-items: center;
`;

const FControl = styled(FormControl)`
  margin-bottom: 20px;
`;

const LabelInfo = styled(MainContainer)`
  justify-content: space-between;
  font-size: 0.65rem!important;
  font-weight: 700;
  color: #123;
  text-transform: uppercase;
`;

const LabelLeft = styled(LabelInfo)`
  margin: 0 0 5px 10px!important;
`;

const LabelRight = styled(LabelInfo)`
  margin-right: 10px;
`;

const ModalHdr = styled(ModalHeader)`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  &:after {
    position: absolute;
    content: '';
    display: block;
    background: #cdd1d7;
    width: 100%;
    height: 1px;
    margin: 35px 0;
  }
`;

const AlertHdr = styled(ModalHeader)`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const AlertBody = styled(ModalBody)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TokenWrapper = styled(MainContainer)`
  justify-content: flex-start;
  margin-left: 30px;
  &:hover {
    background: #edf1f7;
  }
`;