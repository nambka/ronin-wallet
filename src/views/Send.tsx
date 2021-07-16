import React from 'react'
import { Text, ButtonGroup } from "@chakra-ui/react"
import Button from '../components/Button'

const Send: React.FC = () => {
  return (
    <div>
      <Text>Send Token</Text>
      <ButtonGroup>
        <Button variant="outline">Cancel</Button>
        <Button variant="solid">Next</Button>
      </ButtonGroup>
    </div>
  )
}

export default Send
