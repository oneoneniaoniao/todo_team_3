import { Box, Flex, HStack, Input, Select, Text } from "@chakra-ui/react";
import React from "react";

const Priority = () => {
  return (
    <>
      <HStack spacing="24px">
        <Box w="200px">
          <Text fontSize="24px" marginLeft="61px">
            優先度:
          </Text>
        </Box>

        <Box>
          <Select
            width="163px"
            height="52px"
            placeholder="------------"
            borderColor="#bebaba"
            borderWidth="2px"
          >
            <option value="option1">高</option>
            <option value="option2">中</option>
            <option value="option3">低</option>
          </Select>
        </Box>
      </HStack>
    </>
  );
};

export default Priority;
