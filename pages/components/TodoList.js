import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Container,
  Flex,
  Grid,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { todosState } from "../atoms/atom";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);

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

  const [isEditable, setIsEditable] = useState(false);
  const [editId, setEditId] = useState();
  const [newStatus, setNewStatus] = useState();
  

  const handleSetNewStatus = (e) => {
    setNewStatus(e.target.value);
  };

  const handleOpenEditStatus = ({ id, status }) => {
    setEditId(id);
    setIsEditable(true);
    setNewStatus(status);
    console.log(isEditable);
    
  };

  const handleCloseEditStatus = () => {
    setIsEditable(false);
    setEditId();
    setNewStatus();
  };

  // 編集フォームへの値のコピー
  const handleEditStatus = () => {
    setTodos(
      [...todos].map((todo) =>
        todo.id === editId ? { ...todo, status: newStatus } : todo
      )
    );

    handleCloseEditStatus();
    setEditId();
    setNewStatus();
  };

  // console.log(todos);

  return (
    <>
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
                {!isEditable ? (
                  <Td color={renderStatus(todo)}>
                    <Flex justifyContent="space-between">
                      <Text lineHeight="32.5px">{todo.status}</Text>
                      <Button
                        p="16px"
                        size="sm"
                        onClick={() => handleOpenEditStatus(todo)}
                        value="edit"
                      >
                        編集
                      </Button>
                    </Flex>
                  </Td>
                ) : (
                  <Td color={renderStatus(todo)}>
                    <Flex justifyContent="space-between">
                      <select
                        value={newStatus}
                        onChange={handleSetNewStatus}
                        w="8px"
                      >
                        <option value="着手前">着手前</option>
                        <option value="進行中">進行中</option>
                        <option value="完了">完了</option>
                      </select>

                      <Button
                        p="16px"
                        size="sm"
                        onClick={() => handleEditStatus()}
                        value="save"
                      >
                        保存
                      </Button>
                    </Flex>
                  </Td>
                )}

                <Td color={renderPriority(todo)}>{todo.priority}</Td>
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
