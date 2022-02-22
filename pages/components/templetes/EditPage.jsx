import { Box } from '@chakra-ui/react'
import React from 'react'
import Border from '../atoms/Border'
import UserButton from '../atoms/Button'
import Context from '../organisms/layout/Context'
import Header from '../organisms/layout/Header'
import Priority from '../organisms/layout/Priority'
import Status from '../organisms/layout/Status'
import Task from '../organisms/layout/Task'

export const EditPage = () => {
  
  return (
   <>
   <Header />
      <Task />
      <Border />
      <Context />
      <Border />
      <Status />
      <Border />
      <Priority />
      <Border />
      <Box pos="absolute" bottom="8" right="0">
        <UserButton
          colorScheme={"red"}
          color={"#FFFFFF"}
          text={"削除"}
          mr={"28px"}
        />
        <UserButton
          colorScheme={"teal"}
          color={"#FFFFFF"}
          text={"戻る"}
          mr={"28px"}
          url={"/"}
        />
        <UserButton
          colorScheme={"blue"}
          color={"#FFFFFF"}
          text={"保存"}
          mr={"33px"}
        />
      </Box>
   </>
  )
}
