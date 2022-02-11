import React from 'react'
import { Button} from '@chakra-ui/react'

const UserButton = (props) => {
  const {bg,color,text,mr} = props
  return (
    <Button bg={bg} color={color} mr={mr}>{text}</Button>
  )
}

export default UserButton
