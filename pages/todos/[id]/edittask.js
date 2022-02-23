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
  CircularProgress,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";
import UserButton from "../../components/atoms/Button";
import { todosState } from "../../atoms/atom";
import Header from "../../components/organisms/layout/Header";

const NewTodo = () => {
  const router = useRouter();
  // const [todos, setTodos] = useRecoilState(todosState);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { query, isReady } = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [todos, setTodos] = useRecoilState(todosState);

  const editTodo = todos.filter((todo) => {
    return todo.id === Number(query.id);
  });
  if (!router.isReady) {
    return null;
  }

  console.log(editTodo[0]);

  const today = () => {
    const year = new Date().getFullYear() + "-";
    const month = new Date().getMonth() * 1 + 1 + "-";
    const date = new Date().getDate();
    return year + month + date;
  };

  const hadleEditTask = (title) => {
    const foundTodo = todos.findIndex((todo) => todo.id === editTodo[0]?.id);

    const replaceItemAtIndex = (todos, foundTodo, newValue) => {
      return [
        ...todos.slice(0, foundTodo),
        newValue,
        ...todos.slice(foundTodo + 1),
      ];
    };
    setTodos(() => {
      if (todos[foundTodo].title) {
        return replaceItemAtIndex(todos, foundTodo, {
          ...todos[foundTodo],
          title: title,
        });
      }
    });
  };

  const hadleEditText = (text) => {
    const foundTodo = todos.findIndex((todo) => todo.id === editTodo[0]?.id);

    const replaceItemAtIndex = (todos, foundTodo, newValue) => {
      return [
        ...todos.slice(0, foundTodo),
        newValue,
        ...todos.slice(foundTodo + 1),
      ];
    };
    setTodos(() => {
      if (todos[foundTodo].text) {
        return replaceItemAtIndex(todos, foundTodo, {
          ...todos[foundTodo],
          text: text,
        });
      }
    });
  };

  const hadleEditStatus = (status) => {
    const foundTodo = todos.findIndex((todo) => todo.id === editTodo[0]?.id);

    const replaceItemAtIndex = (todos, foundTodo, newValue) => {
      return [
        ...todos.slice(0, foundTodo),
        newValue,
        ...todos.slice(foundTodo + 1),
      ];
    };
    setTodos(() => {
      if (todos[foundTodo].status) {
        return replaceItemAtIndex(todos, foundTodo, {
          ...todos[foundTodo],
          status: status,
        });
      }
    });
  };

  const hadleEditPriority = (priority) => {
    const foundTodo = todos.findIndex((todo) => todo.id === editTodo[0]?.id);

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
          priority: priority,
        });
      }
    });
  };

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
                    value={editTodo[0].title}
                    onChange={(e) => hadleEditTask(e.target.value)}
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
                  value={editTodo[0].text}
                  onChange={(e) => hadleEditText(e.target.value)}
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
                  value={editTodo[0].status}
                  onChange={(e) => hadleEditStatus(e.target.value)}
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
                  value={editTodo[0].priority}
                  onChange={(e) => hadleEditPriority(e.target.value)}
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
      <Box pos="absolute" bottom="8" right="0">
        <UserButton
          colorScheme={"red"}
          color={"#FFFFFF"}
          text={"削除"}
          mr={"28px"}
        />
        <UserButton
          colorScheme={"teal"}
          color={"#FFFFFF"}
          text={"戻る"}
          mr={"28px"}
          url={"/"}
        />
        <UserButton
          colorScheme={"blue"}
          color={"#FFFFFF"}
          text={"保存"}
          mr={"33px"}
        />
      </Box>
    </>
  );
};

export default NewTodo;
