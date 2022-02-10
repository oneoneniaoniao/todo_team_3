import React from 'react'
import { Flex, Heading } from "@chakra-ui/react"

const Header = () => {
  return (
   <Flex
    height="100px"
    as="nav"
    bg="#829098"
    color="#FFFFFF"
    align="center"

  >
   <Heading 
    as="h1"  
    fontSize="48px"
    marginLeft="61px">Todoアプリ</Heading>
  </Flex>
  )
}

export default Header