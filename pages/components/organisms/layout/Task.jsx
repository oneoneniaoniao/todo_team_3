import { Box, HStack, Input, Text } from "@chakra-ui/react";


const Task = (props) => {
  const { editTodo, todo } = props;

  return (
    <>
      <HStack marginTop="48px" spacing="24px">
        <Box w="200px">
          <Text fontSize="24px" marginLeft="61px">
            タスク名:
          </Text>
        </Box>

        <Box>
          <Input
            width="800px"
            height="47px"
            borderColor="#bebaba"
            borderWidth="2px"
            margin="auto"
            id="task"
            value={editTodo? editTodo[0]?.title : todo.title}
            placeholder="タスク名を入力してください(必須)"
          />
        </Box>
      </HStack>
    </>
  );
};

export default Task;
