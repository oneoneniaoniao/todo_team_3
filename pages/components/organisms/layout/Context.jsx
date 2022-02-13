import { Box, Flex, HStack, Text, Textarea } from "@chakra-ui/react";
import React from "react";

const Context = () => {
  return (
    <>
      <HStack>
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
          />
        </Box>
      </HStack>
    </>
  );
};

export default Context;
