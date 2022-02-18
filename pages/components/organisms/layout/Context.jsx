import { Box, Flex, HStack, Text, Textarea } from "@chakra-ui/react";
import React from "react";

const Context = (props) => {
  const { editTodo, todo } = props;

  return (
    <>
      <HStack spacing="24px">
        <Box w="200px">
          <Text fontSize="24px" marginLeft="61px">
            内容:
          </Text>
        </Box>
        <Box>
          <Textarea
            width="800px"
            height="47px"
            borderColor="#bebaba"
            borderWidth="2px"
            value={editTodo? editTodo[0]?.context : todo.context}
            id="context"
            placeholder="内容を入力してください"
          />
        </Box>
      </HStack>
    </>
  );
};

export default Context;
