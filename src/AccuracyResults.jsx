import React from "react";
import {Box, HStack, Text} from "@chakra-ui/react";

function AccuracyResults() {
    return (
        <Box bg="violet" h="35" textAlign="center" w='150px'>
            <Text fontSize='20px'>
                ACCURACY
            </Text>
            <HStack>
                <Text w='75px'>
                    45/100
                </Text>
                <Text w='75px'>
                    45%
                </Text>
            </HStack>
        </Box>
    )
}

export default AccuracyResults;