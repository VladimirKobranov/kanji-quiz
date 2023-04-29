import React from "react";
import {Box, Checkbox, Text} from "@chakra-ui/react";

function ChooseInputs() {
    return (
        <Box bg="yellow.200" h="auto" textAlign="center" w='150px'>
            <Text fontSize='20px'>
                CHOOSE INPUTS
            </Text>
            <Checkbox w='100%' h='28px'>
                romaji
            </Checkbox>
            <Checkbox w='100%' h='28px'>
                furigana
            </Checkbox>
            <Checkbox w='100%' h='28px'>
                meaning
            </Checkbox>
        </Box>
    )
}

export default ChooseInputs;