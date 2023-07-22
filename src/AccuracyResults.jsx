import React, {useEffect, useState} from "react";
import {Box, HStack, Text} from "@chakra-ui/react";
import style from './css/App.module.css';

function AccuracyResults() {
    const [percentage, setPercentage] = useState('45%');



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