import React from "react";
import {Grid, GridItem} from "@chakra-ui/react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ContentField from "./ContentField";

function Main() {
    return (
        <Grid
            templateAreas={`"nav main" "footer footer" `}
            gridTemplateRows={" 1fr 38px"}
            gridTemplateColumns={"213px 1fr"}
            h="100%"
            color="blackAlpha"
            margin="10px"
        >
            <GridItem pl="2" bg="pink.300" area={"nav"} width="213px" h="94vh">
                <NavBar/>
            </GridItem>
            <GridItem pl="2" bg="green.300" area={"main"} gridRow={"span 1"}>
                <ContentField/>
            </GridItem>
            <GridItem pl="2" bg="blue.300" area={"footer"}>
                <Footer/>
            </GridItem>
        </Grid>
    );
}

export default Main;
