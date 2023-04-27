import React from "react";
import { Center, Text, HStack } from "@chakra-ui/react";
import styles from "./App.module.css";
import Footer from "./Footer";
import { Flex, Spacer } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";


function Main() {
  return (
    <Grid
      templateAreas={`
                "nav main"
                  "footer footer" 
                  `}
      gridTemplateRows={" 1fr 38px"}
      gridTemplateColumns={"200px 1fr"}
      h="100%"
      gap="0"
      color="blackAlpha"
      margin="10px"
    >
      {/* <GridItem pl="2" bg="orange.300" area={"header"} >
        Header
      </GridItem> */}
      <GridItem pl="2" bg="pink.300" area={"nav"} width="200px" h="94vh">
asd
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"} gridRow={"span 1"}>
        Main{" "}
        <Text>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        </Text>
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        <Footer/>
      </GridItem> 
    </Grid>
  );
}

export default Main;
