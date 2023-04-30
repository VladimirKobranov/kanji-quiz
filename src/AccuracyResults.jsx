import React from "react";
import {Box, HStack, Text} from "@chakra-ui/react";
import style from "./App.module.css";

function AccuracyResults() {
    return (
        <Box textAlign="center">
            <Text className={style.HeaderMain}>
                Accuracy
            </Text>
            <HStack>
                <Text w='75px' color='#868686'>
                    45/100
                </Text>
                <Text w='75px' color='#868686'>
                    45%
                </Text>
            </HStack>
        </Box>
    )
}

export default AccuracyResults;