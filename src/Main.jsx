import React, {useState} from "react";
import {Grid, GridItem} from "@chakra-ui/react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ContentField from "./ContentField";

export const UserContext = React.createContext();

function Main() {

    const [useLevel, SetUseLevel] = useState('N')

    return (
        <UserContext.Provider value={[useLevel, SetUseLevel]}>
            <Grid
                templateAreas={`"nav main" "footer footer" `}
                gridTemplateRows={" 1fr 38px"}
                gridTemplateColumns={"213px 1fr"}
                h="100%"
                color="blackAlpha"
                margin="10px"
            >
                <GridItem area={"nav"} width="213px" h="94vh">
                    <NavBar/>
                </GridItem>
                <GridItem area={"main"} gridRow={"span 1"}>
                    <ContentField/>
                </GridItem>
                <GridItem pl="2" area={"footer"}>
                    <Footer/>
                </GridItem>
            </Grid>
        </UserContext.Provider>
    );
}

export default Main;
