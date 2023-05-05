import React, {createContext, useState} from "react";
import {Grid, GridItem} from "@chakra-ui/react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ContentField from "./ContentField";


const ButtonContext = createContext();
export {ButtonContext};

function Main() {

    const [buttonStatus, setButtonStatus] = useState([
        {name: "N1", active: false},
        {name: "N2", active: false},
        {name: "N3", active: false},
        {name: "N4", active: false},
        {name: "N5", active: false},
    ]);
    const toggleButton = (index) => {
        const newButtonStatus = [...buttonStatus];
        newButtonStatus[index].active = !newButtonStatus[index].active;
        setButtonStatus(newButtonStatus);
    };

    return (
        <ButtonContext.Provider value={{buttonStatus, toggleButton}}>
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
        </ButtonContext.Provider>
    );
}

export default Main;
