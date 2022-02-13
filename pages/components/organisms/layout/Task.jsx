import { Box, Flex, HStack, Input, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Task = () => {
  return (
   <>
  <HStack marginTop="48px"> 
    <Box w="180px">
    <Text fontSize="24px"  marginLeft="61px">タスク名:</Text>
    </Box>

    <Box>
    <Input 
      width="800px" 
      height="47px"   
      borderColor="#bebaba"
      borderWidth="2px"
      margin="auto"
      />
    </Box>
  </HStack>
   </>
  )
}

export default Task