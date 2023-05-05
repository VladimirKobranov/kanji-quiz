import React from "react";
import {VStack} from "@chakra-ui/react";
import ChooseLevel from "./ChooseLevel";
import ChooseInputs from "./ChooseInputs";
import Title from "./Title";
import NavControlResults from "./NavControlResults";
import AccuracyResults from "./AccuracyResults";

function NavBar() {
    return (
        <VStack spacing='20px'>
            <Title/>
            <ChooseLevel/>
            <ChooseInputs/>
            <NavControlResults/>
            <AccuracyResults/>
        </VStack>
    );
}

export default NavBar;
