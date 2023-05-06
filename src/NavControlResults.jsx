import React, {useContext} from "react";
import {Box, Button, Text} from "@chakra-ui/react";
import {InputsContext, LevelContext, ResetContext} from "./Main";

function NavControlResults() {
//    const {buttonStatus: levelStatus, toggleButton: levelButtonHandler} = useContext(LevelContext);
//    const {buttonStatus: inputsStatus, toggleButton: inputsButtonHandler} = useContext(InputsContext);
    const {reset} = useContext(ResetContext);

    const handleResetClick = () => {
        reset();
    };

    return (
        <Box h="auto" width="190" color="white" textAlign="center" w="150px">
            <Button bg="#AF282F" h="30px" rounded="2px" w="100%" mb="5px" onClick={handleResetClick}>
                <Text fontSize="20px">RESET</Text>
            </Button>
            <Button bg="#014A77" h="30px" rounded="2px" w="100%">
                <Text fontSize="20px">RESULT</Text>
            </Button>
        </Box>
    );
}

export default NavControlResults;
