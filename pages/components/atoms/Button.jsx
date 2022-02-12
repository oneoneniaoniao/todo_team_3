import React from "react";
import { Button } from "@chakra-ui/react";

const UserButton = (props) => {
  const { colorScheme, color, text, mr } = props;
  return (
    <Button colorScheme={colorScheme} color={color} mr={mr}>
      {text}
    </Button>
  );
};

export default UserButton;
