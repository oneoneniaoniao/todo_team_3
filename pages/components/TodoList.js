import Link from "next/link";
import { useRecoilValue } from "recoil";
import { EditIcon } from "@chakra-ui/icons";
import { Button, Checkbox, Container, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

import { todosState } from "../atoms/atom";

const TodoList = () => {
  const todos = useRecoilValue(todosState);

  const renderStatus = (todo) => {
    switch(todo.status) {
      case '着手前':
        return 'orange';
        break;

      case '進行中':
        return 'skyblue'
        break;

      case '完了':
        return 'green'
        break;
    }
  }

  const renderPriority = (todo) => {
    switch(todo.priority) {
      case '低':
        return 'green';
        break;

      case '中':
        return 'yellow.400'
        break;

      case '高':
        return 'red'
        break;
    }
  }

  return (
    <Container h='100%' maxW='100%' mt='5'>
      <Table>
        <Thead bg='gray.100'>
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
              <Td display='flex' justifyContent='space-between'>
                <Checkbox />
                <Link href={`/todos/${todo.id}`} passHref>
                  <Text cursor='pointer' _hover={{opacity: 0.7}}>
                    {todo.title}
                  </Text>
                </Link>
                <Link href={`/todos/${todo.id}/edittask`} passHref>
                  <Button size='xs' colorScheme='teal' variant='outline'><EditIcon /></Button>
                </Link>
              </Td>
              <Td color={renderStatus(todo)}>{todo.status}</Td>
              <Td color={renderPriority(todo)}>{todo.priority}</Td>
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
