import { Box ,Button} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { useRecoilState } from 'recoil'

import Border from "./components/atoms/Border";
import UserButton from "./components/atoms/Button";
import Context from "./components/organisms/layout/Context";
import Header from "./components/organisms/layout/Header";
import Priority from "./components/organisms/layout/Priority";
import Task from "./components/organisms/layout/Task";
import { todosState } from './atoms/atom'
import { v4 as uuidv4 } from "uuid";

const addtask = () => {
  const router = useRouter();
  const [todos, setTodos] = useRecoilState(todosState);
  console.log(todos);

  const today = () => {
    const year = new Date().getFullYear() + "/";
    const month = new Date().getMonth() * 1 + 1 + "/";
    const date = new Date().getDate();
    return year + month + date;
  };

  const todo = {
    id: null,
    title: null,
    text: null,
    status: null,
    priority: null,
  };
  const addtodo = (e) => {
    e.preventDefault();
    if(document.getElementById("task").value===""||null){
      alert("タスク名を入力してください");
      return;
    }
    if(!confirm("下記内容で登録しますか？")){
      return;
    }
    const newTodos = [...todos];
    newTodos.push({
      id: uuidv4(),
      title: document.getElementById("task").value,
      text: document.getElementById("context").value,
      status: "着手前",
      priority: "低",
      createDate: today(),
      updateDate: today(),
    });
    console.log(newTodos);
    setTodos(newTodos);
    router.push("/");
  };

  return (
    <>
      <Header />
      <Task todo={todo} />
      <Border />
      <Context todo={todo} />
      <Border />
      <Priority />
      <Border />
      <Box pos="absolute" bottom="8" right="0">
        <UserButton
          colorScheme={"teal"}
          color={"#FFFFFF"}
          text={"戻る"}
          mr={"28px"}
        />
        <Button
          colorScheme="blue"
          color="#FFFFFF"
          mr="33px"
          onClick={addtodo}
          type="button"
        >保存</Button>
      </Box>
    </>
  );
};

export default addtask;
