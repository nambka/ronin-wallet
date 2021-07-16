import React, { useState } from 'react';
import { Text, InputGroup, Input, InputRightElement, Image } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import Button from '../components/Button'
import styled from 'styled-components'
import walletLogo from '../assets/images/logo.png'
import { useHistory, Link } from 'react-router-dom'

const Unlock: React.FC = () => {
  const [inputPass, setinputPass] = useState('');
  const history = useHistory();
  const [show, setShow] = React.useState(false)
  const handleShow = () => setShow(!show)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputPass(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push('/wallet')
  }

  return (
    <Box onSubmit={handleSubmit} >
      <Image id="wallet-logo" src={walletLogo} width={114} alt="wallet-logo"/>
      <Text fontSize="3xl" fontWeight="700">Ronin Wallet</Text>
      <Text fontSize="sm">Your Digital Passport</Text>
      <InputGroup>
        <Input type={show ? "text" : "password"} autoFocus
              onChange={handleChange} placeholder="Type your password"/>
        <InputRightElement width="4.5rem" onClick={handleShow}>
            {show ? <ViewIcon color="#89a"/> : <ViewOffIcon color="#89a"/>}
        </InputRightElement>
      </InputGroup>
      <Button type='submit'>Unlock</Button>
    </Box>
  )
}

export default Unlock

const Box = styled.form`
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  padding: 20px;
`;