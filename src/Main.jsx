import React, {createContext, useState} from "react";
import {Grid, GridItem} from "@chakra-ui/react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ContentField from "./ContentField";

export const LevelContext = createContext();
export const InputsContext = createContext();
export const ResetContext = createContext();

function Main() {
    const [levelStatus, setLevelStatus] = useState([
        {name: "N1", active: false},
        {name: "N2", active: false},
        {name: "N3", active: false},
        {name: "N4", active: false},
        {name: "N5", active: false},
    ]);

    const levelButtonHandler = (index) => {
        const newButtonStatus = [...levelStatus];
        newButtonStatus[index].active = !newButtonStatus[index].active;
        setLevelStatus(newButtonStatus);
    };

    const [inputsStatus, setInputsStatus] = useState([
        {name: "romaji", active: false},
        {name: "furigana", active: false},
        {name: "meaning", active: false},
    ]);

    const inputsButtonHandler = (index) => {
        const newButtonStatus = [...inputsStatus];
        newButtonStatus[index].active = !newButtonStatus[index].active;
        setInputsStatus(newButtonStatus);
    };

    const reset = () => {
        setLevelStatus([
            {name: "N1", active: false},
            {name: "N2", active: false},
            {name: "N3", active: false},
            {name: "N4", active: false},
            {name: "N5", active: false},
        ]);
        setInputsStatus([
            {name: "romaji", active: false},
            {name: "furigana", active: false},
            {name: "meaning", active: false},
        ]);
    };

    return (
        <LevelContext.Provider
            value={{buttonStatus: levelStatus, toggleButton: levelButtonHandler}}
        >
            <InputsContext.Provider
                value={{buttonStatus: inputsStatus, toggleButton: inputsButtonHandler}}
            >
                <ResetContext.Provider value={{reset}}>
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
                </ResetContext.Provider>
            </InputsContext.Provider>
        </LevelContext.Provider>
    );
}

export default Main;
