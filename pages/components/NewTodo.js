import {
  Button,
  Container,
  Stack,
  Flex,
  Box,
  Text,
  Spacer,
  Divider,
  Textarea,
  Select,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import UserButton from "./atoms/Button";
import onSubmitHooks from "./onSubmitHooks";

const NewTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  // onSubmit hooks
  const { onSubmit } = onSubmitHooks();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container py={["20px", "60px"]} maxW="container.lg">
          <Stack spacing={[2, 6]}>
            <FormControl>
              <Flex direction={["column", "row"]}>
                <Flex minW={24} width={24}>
                  <FormLabel>タスク名</FormLabel>
                  <Spacer />
                  <Box>:</Box>
                </Flex>
                <Box>
                  <Input
                    ml={[0, 6]}
                    borderColor="#bebaba"
                    borderWidth="2px"
                    {...register("title", { required: true })}
                  />
                  <Text ml={[0, 6]}>{errors.title && "※必須項目です"}</Text>
                </Box>
              </Flex>
            </FormControl>
            <Divider borderColor="gray" borderBottomWidth="2px" />
            <FormControl>
              <Flex minH={44} direction={["column", "row"]}>
                <Flex minW={24} width={24}>
                  <FormLabel>内容</FormLabel>
                  <Spacer />
                  <Box>:</Box>
                </Flex>
                <Textarea
                  ml={[0, 6]}
                  borderColor="#bebaba"
                  borderWidth="2px"
                  h="180px"
                  {...register("text")}
                />
              </Flex>
            </FormControl>
            <Divider borderColor="gray" borderBottomWidth="2px" />
            <FormControl>
              <Flex>
                <Flex minW={26}>
                  <FormLabel>ステータス</FormLabel>
                  <Spacer />
                  <Box>:</Box>
                </Flex>
                <Select
                  ml={8}
                  borderColor="#bebaba"
                  borderWidth="2px"
                  w=""
                  {...register("status")}
                >
                  <option value="着手前">着手前</option>
                  <option value="進行中">進行中</option>
                  <option value="完了">完了</option>
                </Select>
              </Flex>
            </FormControl>
            <Divider borderColor="gray" borderBottomWidth="2px" />
            <FormControl>
              <Flex>
                <Flex minW={24} width={24}>
                  <FormLabel>優先度</FormLabel>
                  <Spacer />
                  <Box>:</Box>
                </Flex>
                <Select
                  ml={8}
                  borderColor="#bebaba"
                  borderWidth="2px"
                  w=""
                  {...register("priority")}
                >
                  <option value="低">低</option>
                  <option value="中">中</option>
                  <option value="高">高</option>
                </Select>
              </Flex>
            </FormControl>
          </Stack>
        </Container>
        <Spacer />
        <Box pos="absolute" bottom="8" right="0">
          <Button colorScheme="blue" color="#FFFFFF" mr="28px" type="submit">
            保存
          </Button>
          <UserButton
            colorScheme={"teal"}
            color={"#FFFFFF"}
            text={"戻る"}
            mr={"28px"}
            url="/"
          />
        </Box>
      </form>
    </>
  );
};

export default NewTodo;
