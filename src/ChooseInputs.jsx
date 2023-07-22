import React from "react";
import {Box, Text, VStack} from "@chakra-ui/react";
import styleMain from './css/App.module.css';
import ButtonInputs from "./ButtonInputs";

function ChooseInputs() {
    return (
        <Box h="auto" textAlign="center" w='150px'>
            <Text className={styleMain.HeaderMain}>
                Choose inputs
            </Text>
            <Box bg="#E6E1E7" rounded='2px'>
                <VStack bg="#E6E1E7" rounded="2px" h="auto" spacing="0">
                    <ButtonInputs index='meaning' name='meaning'/>
                    <ButtonInputs index='romaji' name='reading-on'/>
                    <ButtonInputs index='furigana' name='reading-kun'/>
                </VStack>
            </Box>
        </Box>
    );
}

export default ChooseInputs;
