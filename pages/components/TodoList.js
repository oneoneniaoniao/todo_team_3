import { EditIcon } from "@chakra-ui/icons";
import { Button, Checkbox, Container, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const TodoList = (props) => {
  const { todos } = props;

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
          {todos.map((todo, index) => (
            <Tr key={index}>
              <Td display='flex' justifyContent='space-between'>
                <Checkbox />
                {todo.text}
                <Button size='xs' colorScheme='teal' variant='outline'><EditIcon /></Button>
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
