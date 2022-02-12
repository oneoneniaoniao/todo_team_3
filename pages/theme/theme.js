import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: "#E5E5E5",
        minHeight: "100vh",
      },
    },
  },
});

export default theme;
