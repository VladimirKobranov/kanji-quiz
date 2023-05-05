import React, {useContext} from "react";
import {Box, Text, VStack} from "@chakra-ui/react";
import style from './App.module.css';
import {ButtonContext} from './Main';

function ContentField() {
    const {buttonStatus} = useContext(ButtonContext);

    const activeButtonIndexes = buttonStatus.reduce((acc, button, index) => {
        if (button.active) {
            acc.push(index + 1);
        }
        return acc;
    }, []);

    return (
        <VStack spacing='0'>
            <Box bg="green.300" w='100%' h='160px'>
                <Text className={style.SelectedLevel}>
                    {activeButtonIndexes.length > 0 ? `N${activeButtonIndexes.join(',')}` : 'Select N'}
                </Text>
            </Box>
            <Box bg='tomato' w='100%' h='900px'>
                ssss
            </Box>
        </VStack>
    )
}

export default ContentField;
