import { StoreProvider } from "./store";
import Main from "./Main";
import * as React from "react";
import { ChakraProvider, Text } from "@chakra-ui/react";
import { BrowserView, MobileView } from "react-device-detect";

export default function App() {
  return (
    <StoreProvider>
      <ChakraProvider>
        <MobileView>
          <Main />
        </MobileView>
        <BrowserView>
          <Text>Desktop version is on development</Text>
        </BrowserView>
      </ChakraProvider>
    </StoreProvider>
  );
}
