import { Box } from "@chakra-ui/react";
import React from "react";
import Border from "./components/atoms/Border";
import UserButton from "./components/atoms/Button";
import Context from "./components/organisms/layout/Context";
import Header from "./components/organisms/layout/Header";
import Priority from "./components/organisms/layout/Priority";
import Task from "./components/organisms/layout/Task";

const addtask = () => {
  return (
    <>
      <Header />
      <Task />
      <Border />
      <Context />
      <Border />
      <Priority />
      <Border />
      <Box pos="absolute" bottom="8" right="0">
        <UserButton
          colorScheme={"teal"}
          color={"#FFFFFF"}
          text={"戻る"}
          mr={"28px"}
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

export default addtask;
