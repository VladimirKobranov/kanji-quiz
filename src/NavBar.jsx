import React from "react";
import {VStack} from "@chakra-ui/react";
import ChooseLevel from "./ChooseLevel";
import ChooseInputs from "./ChooseInputs";
import Title from "./Title";
import NavControlResults from "./NavControlResults";

function NavBar() {
    return (
        <VStack spacing='20px'>
            <Title/>
            <ChooseLevel/>
            <ChooseInputs/>
            <NavControlResults/>
        </VStack>
    );
}

export default NavBar;
