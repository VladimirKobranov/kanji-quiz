import React, {useContext} from "react";
import {Box, Text, VStack} from "@chakra-ui/react";
import style from './App.module.css';
import {UserContext} from "./Main";

function ContentField() {
    const theme = useContext(UserContext);

    return (
        <VStack spacing='0'>
            <Box bg="green.300" w='100%' h='160px'>
                <Text className={style.SelectedLevel}>
                    {theme}
                </Text>
            </Box>
            <Box bg='tomato' w='100%' h='900px'>
                ssss
            </Box>
        </VStack>
    )
}

export default ContentField;