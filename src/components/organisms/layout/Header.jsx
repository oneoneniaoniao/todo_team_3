import Link from "next/link";
import { Flex, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex height="100px" as="nav" bg="#829098" color="#FFFFFF" align="center">
      <Link href='/' passHref>
        <Heading as="h1" fontSize="48px" marginLeft="61px" cursor='pointer' _hover={{opacity: 0.7}}>
          Todoアプリ
        </Heading>
      </Link>
    </Flex>
  );
};

export default Header;
