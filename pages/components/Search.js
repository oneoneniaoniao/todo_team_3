import { Box, Input, Select, Text,HStack } from "@chakra-ui/react";

const Search = () => {
  return (
    <HStack ml='0' mt={['3','5']} p={2} bg='gray.100' borderRadius='0' justifyContent='space-around' alignItems='center' fontSize={["14px","16px"]} maxW="550px">
      <Box>
        <Text textAlign='center'>キーワード</Text>
        <Input minW={["140px", "280px"]} fontSize={["14px","16px"]} p="2" placeholder='キーワードを入力'/>
      </Box>

      <Box>
        <Text textAlign='center'>ステータス</Text>
        <Select minW={["70px", "80px"]} fontSize={["14px","16px"]} placeholder='All'>
          <option value='着手前'>着手前</option>
          <option value='進行中'>進行中</option>
          <option value='完了'>完了</option>
        </Select>
      </Box>

      <Box>
        <Text textAlign='center'>優先度</Text>
        <Select minW={["70px", "80px"]} fontSize={["14px","16px"]} placeholder='All'>
          <option value='低'>低</option>
          <option value='中'>中</option>
          <option value='高'>高</option>
        </Select>
      </Box>
    </HStack>
  );
};

export default Search;
