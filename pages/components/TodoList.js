import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Container,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { todosState } from "../atoms/atom";


// const [status,setStatus] = useRecoilState(statusState)

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  console.log(todos);
  // const [status, setStatus] =useRecoilState(statusState)

  // const todo = todos.filter((todo) => {
  //   return todo.id === Number(router.query.id)
  // })

  // const handleOnEdit = (id) => {
  //   /**
  //    * 引数として渡された todo の id が一致する
  //    * todos ステート（のコピー）内の todo の
  //    * value プロパティを引数 value (= e.target.value) に書き換える
  //    */
  //   const newTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return alert(todo.id );
  //     }
  //     return todo;
  //   });

  //   // todos ステートを更新
  //   setTodos(newTodos);
  // };

  // const renderStatus = (todo) => {
  //   switch (todo.status) {
  //     case "着手前":
  //       return "orange";
  //       break;

  //     case "進行中":
  //       return "skyblue";
  //       break;

  //     case "完了":
  //       return "green";
  //       break;
  //   }
  // };

  // const renderPriority = (todo) => {
  //   switch (todo.priority) {
  //     case "低":
  //       return "green";
  //       break;

  //     case "中":
  //       return "yellow.400";
  //       break;

  //     case "高":
  //       return "red";
  //       break;
  //   }
  // };

  // const handleChangeSelect = (e) => {
  //   setTodos({...todos[1],status:e.target.value})
  // }

  return (
    <Container h="100%" maxW="100%" mt="5">
      <Table>
        <Thead bg="gray.100">
          <Tr>
            <Th>タスク名</Th>
            <Th>ステータス</Th>
            <Th>優先度</Th>
            <Th>作成日時</Th>
            <Th>更新日時</Th>
          </Tr>
        </Thead>

        <Tbody>
          {todos.map((todo, index) => (
            <Tr key={index}>
              <Td display="flex" justifyContent="space-between">
                <Checkbox />
                {todo.text}
                <Button size="xs" colorScheme="teal" variant="outline">
                  <EditIcon />
                </Button>
              </Td>
              <Td>
                <Select
                  value={todo.status}
                  onChange={ e => setTodos({status: e.target.value}) }
                  placeholder="Select status"
                >
                  <option value="incomplete">未着手</option>
                  <option value="progress">進行中</option>
                  <option value="complete">完了</option>
                </Select>
              </Td>
              <Td>
                <Select placeholder="Select option">
                  <option value="option1">高</option>
                  <option value="option2">中</option>
                  <option value="option3">低</option>
                </Select>
              </Td>
              <Td>{todo.createDate}</Td>
              <Td>{todo.updateDate}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default TodoList;
