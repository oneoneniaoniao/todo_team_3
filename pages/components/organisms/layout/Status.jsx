import { Box, Flex, HStack, Input, Select, Text } from "@chakra-ui/react";
import React from "react";

const Status = () => {
  return (
    <>
      <HStack spacing="24px">
        <Box w="200px">
          <Text fontSize="24px" marginLeft="61px">
            ステータス:
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
            <option value="option1">未着手</option>
            <option value="option2">進行中</option>
            <option value="option3">完了</option>
          </Select>
        </Box>
      </HStack>
    </>
  );
};

export default Status;
