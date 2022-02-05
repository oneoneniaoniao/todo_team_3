import { EditIcon } from "@chakra-ui/icons";
import { Checkbox, Container, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const TodoList = (props) => {
  const { todos } = props;

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
                <EditIcon />
              </Td>
              <Td color='orange'>{todo.status}</Td>
              <Td color='red'>{todo.priority}</Td>
              <Td>2022-2-1</Td>
              <Td>2022-3-1</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default TodoList;
