import React, {useContext} from "react";
import {Button, VStack} from "@chakra-ui/react";
import ChooseLevel from "./ChooseLevel";
import ChooseInputs from "./ChooseInputs";
import Title from "./Title";
import NavControlResults from "./NavControlResults";
import AccuracyResults from "./AccuracyResults";
import {UserContext} from "./Main";

function NavBar() {
    const [useLevel, SetUseLevel] = useContext(UserContext)
    return (
        <VStack spacing='20px'>
            <Title/>
            <ChooseLevel/>
            <ChooseInputs/>
            <NavControlResults/>
            <AccuracyResults/>

            {/*test use context*/}
            <Button onClick={() => SetUseLevel('clicked')}>
                button
            </Button>

        </VStack>
    );
}

export default NavBar;
