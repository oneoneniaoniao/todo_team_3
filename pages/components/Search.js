import { Box, Container, Input, Select, Text } from "@chakra-ui/react";

const Search = () => {
  return (
    <Container m='0' mt='10' p='3' bg='gray.100' borderRadius='10px'  display='flex' justifyContent='space-around' alignItems='center'>
      <Box>
        <Text textAlign='center'>キーワード</Text>
        <Input placeholder='キーワードを入力'/>
      </Box>

      <Box>
        <Text textAlign='center'>ステータス</Text>
        <Select placeholder='すべて'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </Box>

      <Box>
        <Text textAlign='center'>優先度</Text>
        <Select placeholder='すべて'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </Box>
    </Container>
  );
};

export default Search;
