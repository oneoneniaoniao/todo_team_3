import {
  Button,
  Container,
  Stack,
  Flex,
  Box,
  Spacer,
  Divider,
  Textarea,
  Select,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import UserButton from "../../components/atoms/Button";
import { todosState } from "../../atoms/atom";
import Header from "../../components/organisms/layout/Header";
import { useState } from "react";

const NewTodo = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  const router = useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { query } = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const editTodo = todos.filter((todo) => {
    return todo.id === Number(query.id);
  });
  if (!router.isReady) {
    return null;
  }
  const [newTitle, setNewTitle] = useState(editTodo[0].title);
  const [newText, setNewText] = useState(editTodo[0].text);
  const [newStatus, setNewStatus] = useState(editTodo[0].status);
  const [newPriority, setNewPriority] = useState(editTodo[0].priority);
  const toast = useToast();

  const handleSetNewTitle = (e) => {
    setNewTitle(e.target.value);
  };
  const handleSetNewText = (e) => {
    setNewText(e.target.value);
  };
  const handleSetNewStatus = (e) => {
    setNewStatus(e.target.value);
  };
  const handleSetNewPriority = (e) => {
    setNewPriority(e.target.value);
  };

  const handleEditTodo = (id, title, text, status, priority) => {
    const foundTodo = todos.findIndex((todo) => todo.id === id);

    const replaceItemAtIndex = (todos, foundTodo, newValue) => {
      return [
        ...todos.slice(0, foundTodo),
        newValue,
        ...todos.slice(foundTodo + 1),
      ];
    };

    setTodos(() => {
      if (todos[foundTodo].priority) {
        return replaceItemAtIndex(todos, foundTodo, {
          ...todos[foundTodo],
          title: title,
          text: text,
          status: status,
          priority: priority,
        });
      }
    });

    toast({
      title: "保存しました.",
      position: "top",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  // const today = () => {
  //   const year = new Date().getFullYear() + "-";
  //   const month = new Date().getMonth() * 1 + 1 + "-";
  //   const date = new Date().getDate();
  //   return year + month + date;
  // };

  return (
    <>
      <Header />
      <form>
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
                    value={newTitle}
                    onChange={handleSetNewTitle}
                  />
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
                  value={newText}
                  onChange={handleSetNewText}
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
                  value={newStatus}
                  onChange={handleSetNewStatus}
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
                  value={newPriority}
                  onChange={handleSetNewPriority}
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
      </form>
    
      <Box pos="absolute"  right="0">
        <Button
          colorScheme="red"
          mr={"28px"}
          onClick={() =>
            toast({
              title: "削除しました",
              position: "top",
              status: "error",
              duration: 1000,
              isClosable: true,
            })
          }
        >
          削除
        </Button>
        <UserButton
          colorScheme={"teal"}
          color={"#FFFFFF"}
          text={"戻る"}
          mr={"28px"}
          url={"/"}
        />
        <Button
          colorScheme="blue"
          mr="8px"
          onClick={() =>
            handleEditTodo(
              editTodo[0]?.id,
              newTitle,
              newText,
              newStatus,
              newPriority
            )
          }
        >
          保存
        </Button>
      </Box>
    </>
  );
};

export default NewTodo;
