import React from "react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const UserButton = (props) => {
  const { colorScheme, color, text, mr, url } = props;
  console.log(url)

  return (
    <Link href={`${url}`} passHref>
      <Button colorScheme={colorScheme} color={color} mr={mr}>
        {text}
      </Button>
    </Link>
  );
};

export default UserButton;
