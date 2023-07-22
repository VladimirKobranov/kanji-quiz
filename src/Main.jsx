import React from "react";
import {Grid, GridItem} from "@chakra-ui/react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ContentField from "./ContentField";


function Main() {
    return (
        <Grid
            templateAreas={`"nav main" "footer footer" `}
            gridTemplateRows="1fr 38px"
            gridTemplateColumns="213px 1fr"
            height="100%"
            color="blackAlpha"
            margin="10px"
        >
            <GridItem area="nav" width="213px" height="94vh">
                <NavBar/>
            </GridItem>
            <GridItem area="main" gridRow="span 1">
                <ContentField/>
            </GridItem>
            <GridItem pl="2" area="footer">
                <Footer/>
            </GridItem>
        </Grid>

    );
}


export default Main;
