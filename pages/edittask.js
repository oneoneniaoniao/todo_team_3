import { Box } from '@chakra-ui/react'
import React from 'react'
import Border from './components/atoms/Border'
import UserButton from './components/atoms/Button'
import Context from './components/organisms/layout/Context'
import Header from './components/organisms/layout/Header'
import Priority from './components/organisms/layout/Priority'

import Status from './components/organisms/layout/Status'
import Task from './components/organisms/layout/Task'




const edittask = () => {
  return (
    <>
    <Header />
    <Task />
    <Border />
    <Context />
    <Border />
    <Status/>
    <Border />
    <Priority />
    <Border />
    <Box pos="absolute" bottom="8" right="0">
      <UserButton  bg={"#AB312A"} color={"#FFFFFF"} text={"削除"} mr={"28px"} />
      <UserButton  bg={"#84ADC5"} color={"#FFFFFF"} text={"戻る"} mr={"28px"} />
      <UserButton bg={"#4E758D"} color={"#FFFFFF"} text={"保存"} mr={"33px"}/>
    </Box>
   


    
    </>
  )
}

export default edittask
