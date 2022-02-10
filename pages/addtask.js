import { Box } from '@chakra-ui/react'
import React from 'react'
import Border from './components/atoms/Border'
import UserButton from './components/atoms/Button'
import Context from './components/organisms/latout/Context'
import Header from './components/organisms/latout/Header'
import Priority from './components/organisms/latout/Priority'
import Task from './components/organisms/latout/Task'



const addtask = () => {
  return (
    <>
    <Header />
    <Task />
    <Border />
    <Context />
    <Border />
    <Priority/>
    <Border />
    <Box pos="absolute" bottom="8" right="0">
      <UserButton  bg={"#84ADC5"} color={"#FFFFFF"} text={"戻る"} mr={"28px"} />
      <UserButton bg={"#4E758D"} color={"#FFFFFF"} text={"保存"} mr={"33px"}/>
    </Box>
   


    
    </>
  )
}

export default addtask