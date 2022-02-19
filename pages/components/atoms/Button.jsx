import React from "react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const UserButton = (props) => {
  const { colorScheme, color, text, mr } = props;

  return (
    <Link href='/' passHref>
      <Button colorScheme={colorScheme} color={color} mr={mr}>
        {text}
      </Button>
    </Link>
  );
};

export default UserButton;
