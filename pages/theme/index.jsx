import { extendTheme, theme as base } from "@chakra-ui/react";
const theme = extendTheme({
  fonts:{
    body:`"Roboto", ${base.fonts?.body}`
  }
});


export default theme;