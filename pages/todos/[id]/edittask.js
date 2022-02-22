import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { Box, CircularProgress} from "@chakra-ui/react";

import { todosState } from "../../atoms/atom";
import Border from "../../components/atoms/Border";
import UserButton from "../../components/atoms/Button";
import Context from "../../components/organisms/layout/Context";
import Header from "../../components/organisms/layout/Header";
import Priority from "../../components/organisms/layout/Priority";
import Status from "../../components/organisms/layout/Status";
import Task from "../../components/organisms/layout/Task";

const edittask = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { query, isReady } = useRouter()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const todos = useRecoilValue(todosState)
    
  const editTodo = todos.filter((todo) => {
    return todo.id === Number(query.id);
  })

  if (!isReady) {
    return (
      <>
        <Header />
        <CircularProgress
          size='200px'
          position='absolute'
          top='50%'
          left='50%'
          transform='translateX(-50%) translateY(-50%)'
          isIndeterminate
          color='green.300'
        />
        <Box pos="absolute" bottom="8" right="0">
          <UserButton
            colorScheme={"teal"}
            color={"#FFFFFF"}
            text={"戻る"}
            mr={"28px"}
          />
        </Box>
      </>
    )
  }
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
  );
};

export default edittask;
