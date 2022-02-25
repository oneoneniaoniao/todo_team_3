import Link from "next/link";
import { useRecoilState } from "recoil";
import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Container,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  HStack,
} from "@chakra-ui/react";
import {useState} from "react"
import { todosState } from "../atoms/atom";
import StatusSelect from "./atoms/StatusSelect";
import PrioritySelect from "./atoms/PrioritySelect";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  const [statusArrow, setStatusArrow] = useState("▲");
  const [priorityArrow, setPriorityArrow] = useState("▲");
  const [createArrow, setCreateArrow] = useState("▲");
  const [updateArrow, setUpdateArrow] = useState("▲");

  const renderStatus = (todo) => {
    switch (todo.status) {
      case "着手前":
        return "orange";
        break;

      case "進行中":
        return "skyblue";
        break;

      case "完了":
        return "green";
        break;
    }
  };

  const renderPriority = (todo) => {
    switch (todo.priority) {
      case "低":
        return "green";
        break;

      case "中":
        return "yellow.400";
        break;

      case "高":
        return "red";
        break;
    }
  };

  const handleSortStatus=(todos) =>{
    const high = todos.filter((todo) => todo.status === "完了");
    const middle = todos.filter((todo) => todo.status === "進行中");
    const low = todos.filter((todo) => todo.status === "着手前");
    if(statusArrow==="▲"){
      setTodos([...low, ...middle, ...high]);
      setStatusArrow("▼");
    }else{
      setTodos([...high, ...middle, ...low])
      setStatusArrow("▲");
    }
  }

  const handleSortPriority=(todos) =>{
    const high = todos.filter((todo) => todo.priority === "高");
    const middle = todos.filter((todo) => todo.priority === "中");
    const low = todos.filter((todo) => todo.priority === "低");
    if(priorityArrow==="▲"){
      setTodos([...low, ...middle, ...high]);
      setPriorityArrow("▼");
    }else{
      setTodos([...high, ...middle, ...low])
      setPriorityArrow("▲");
    }
  }

  const handleSortCreate=(todos) =>{
    const targetTodos = [...todos]
    if(createArrow==="▲"){
      targetTodos.sort((a,b)=>{
        return new Date(a.createDate) - new Date(b.createDate)
      });
      setTodos(targetTodos);
      setCreateArrow("▼");
    }else{
      targetTodos.sort((a,b)=>{
        return new Date(b.createDate) - new Date(a.createDate)
      })
      setTodos(targetTodos);
      setCreateArrow("▲");
    }
  }

  const handleSortUpdate=(todos) =>{
    const targetTodos = [...todos]
    if(updateArrow==="▲"){
      targetTodos.sort((a,b)=>{
        return new Date(a.updateDate) - new Date(b.updateDate)
      });
      setTodos(targetTodos);
      setUpdateArrow("▼");
    }else{
      targetTodos.sort((a,b)=>{
        return new Date(b.updateDate) - new Date(a.updateDate)
      })
      setTodos(targetTodos);
      setUpdateArrow("▲");
    }
  }


  return (
    <>
      <Container h="100%" maxW="100%" mt="5">
        <Table>
          <Thead bg="gray.100">
            <Tr>
              <Th>タスク名</Th>
              <Th>
                <HStack>
                  <Text>ステータス</Text>
                    <Button colorScheme="yellow" size="xs" variant="outline" onClick={()=>{handleSortStatus(todos)}}>
                      {statusArrow}
                    </Button>
                </HStack>
              </Th>
              <Th>
                <HStack>
                  <Text>優先度</Text>
                    <Button colorScheme="yellow" size="xs" variant="outline" onClick={()=>{handle}}
                    onClick={() => {handleSortPriority(todos)}}
                    >
                      {priorityArrow}
                    </Button>
                </HStack>
              </Th>
              <Th>
                <HStack>
                  <Text>作成日時</Text>
                    <Button colorScheme="yellow" size="xs" variant="outline" onClick={()=>{handleSortCreate(todos)}}>
                      {createArrow}
                    </Button>
                </HStack>
              </Th>
              <Th>
                <HStack>
                  <Text>更新日時</Text>
                    <Button colorScheme="yellow" size="xs" variant="outline" onClick={()=>{handleSortUpdate(todos)}}>
                      {updateArrow}
                    </Button>
                </HStack>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {todos.map((todo) => (
              <Tr key={todo.id}>
                <Td display="flex" justifyContent="space-between" h="65.5px">
                  <Checkbox />
                  <Link href={`/todos/${todo.id}`} passHref>
                    <Text
                      cursor="pointer"
                      _hover={{ opacity: 0.7 }}
                      lineHeight="32.5px"
                    >
                      {todo.title}
                    </Text>
                  </Link>
                  <Link href={`/todos/${todo.id}/edittask`} passHref>
                    <Button size="xs" colorScheme="teal" variant="outline">
                      <EditIcon />
                    </Button>
                  </Link>
                </Td>

                <Td color={renderStatus(todo)}>
                  <StatusSelect todo={todo} />
                </Td>

                <Td color={renderPriority(todo)}>
                  <PrioritySelect todo={todo} />
                </Td>

                <Td>{todo.createDate}</Td>
                <Td>{todo.updateDate}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </>
  );
};

export default TodoList;
