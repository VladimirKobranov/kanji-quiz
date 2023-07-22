import React from "react";
import {Box, Text, VStack} from "@chakra-ui/react";
import styleMain from './css/App.module.css';
import ButtonLevels from "./ButtonLevels";

function ChooseLevel({dataArray}) {
    return (
        <Box h="auto" textAlign="center" w="150px">
            <Text className={styleMain.HeaderMain}>
                Choose levels
            </Text>
            <VStack bg="#E6E1E7" rounded="2px" h="auto" spacing="0">
                <ButtonLevels index='5' name='N5'/>
                <ButtonLevels index='4' name='N4'/>
                <ButtonLevels index='3' name='N3'/>
                <ButtonLevels index='2' name='N2'/>
                <ButtonLevels index='1' name='N1'/>
            </VStack>
        </Box>
    );
}

export default ChooseLevel;
