import React from 'react';
import { Text, InputGroup, Input, InputRightElement, Image, FormControl } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import Button from '../components/Button'
import styled from 'styled-components'
import walletLogo from '../assets/images/logo.png'
import { useHistory } from 'react-router-dom'

const Unlock: React.FC = () => {
  const history = useHistory();
  const [show, setShow] = React.useState(false)
  const handleShow = () => setShow(!show)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push('/wallet')
  }

  return (
    <Box onSubmit={handleSubmit} >
      <Image id="wallet-logo" src={walletLogo} width={114} alt="wallet-logo"/>
      <Brand fontSize="3xl" fontWeight="700">Ronin Wallet</Brand>
      <Slogan fontSize="sm">Your Digital Passport</Slogan>
      <FControl id="password">
        <LabelLeft>Enter Password</LabelLeft>
        <InputGroup>
          <Input type={show ? "text" : "password"} autoFocus
                placeholder="Type your password"/>
          <InputRightElement width="4.5rem" onClick={handleShow}>
              {show ? <ViewIcon color="#89a"/> : <ViewOffIcon color="#89a"/>}
          </InputRightElement>
        </InputGroup>
      </FControl>
      <Button type='submit'>Unlock</Button>
    </Box>
  )
}

export default Unlock

const MainContainer = styled.div`
  position: relative;
  display: flex;
`;

const Box = styled.form`
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  padding: 20px;
`;

const Brand = styled(Text)`
  margin-top: 24px;
`;

const Slogan = styled(Text)`
  margin-top: 6px;
`;

const FControl = styled(FormControl)`
  margin: 24px 0;
`;

const LabelInfo = styled(MainContainer)`
  justify-content: space-between;
  font-size: 0.65rem!important;
  font-weight: 700;
  color: #456;
  text-transform: uppercase;
`;

const LabelLeft = styled(LabelInfo)`
  margin: 0 0 5px 10px!important;
`;