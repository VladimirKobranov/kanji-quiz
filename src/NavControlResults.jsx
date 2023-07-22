import React from "react";
import {Box, Button, Text} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {reset, result} from "./store/store";

function NavControlResults() {
    const dispath = useDispatch();
    const answersFromRedux = useSelector((state)=> state.answers);
    const handleResetClick = () => {
        dispath(reset());
    }
    const handleResultClick = () => {
        dispath(result());
        console.log('result pressed')
        console.log(answersFromRedux)
    }
    return (
        <Box h="auto" width="190" color="white" textAlign="center" w="150px">
            <Button bg="#AF282F" h="30px" rounded="2px" w="100%" mb="5px" onClick={() => handleResetClick()}>
                <Text fontSize="20px">RESET</Text>
            </Button>
            <Button bg="#014A77" h="30px" rounded="2px" w="100%" onClick={()=>handleResultClick()}>
                <Text fontSize="20px">RESULT</Text>
            </Button>
        </Box>
    );
}

export default NavControlResults;
