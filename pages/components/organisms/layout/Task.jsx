import { Box, HStack, Input, Text } from "@chakra-ui/react";


const Task = (props) => {
  const { editTodo } = props;

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
            value={editTodo[0]?.title}
          />
        </Box>
      </HStack>
    </>
  );
};

export default Task;
