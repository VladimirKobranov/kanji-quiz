import React, {useContext} from "react";
import {Box, Text, VStack} from "@chakra-ui/react";
import style from './App.module.css';
import {InputsContext, LevelContext} from './Main';

function ContentField() {
    const {buttonStatus: levelButtonStatus} = useContext(LevelContext);
    const {buttonStatus: inputsButtonStatus} = useContext(InputsContext);

    const activeLevelButtonIndexes = levelButtonStatus.reduce((acc, button, index) => {
        if (button.active) {
            acc.push(index + 1);
        }
        return acc;
    }, []);

    const activeInputsButtonNames = inputsButtonStatus.reduce((acc, button) => {
        if (button.active) {
            acc.push(button.name);
        }
        return acc;
    }, []);

    return (
        <VStack spacing='0'>
            <Box bg="green.300" w='100%' h='160px'>
                <Text className={style.SelectedLevel}>
                    {activeLevelButtonIndexes.length > 0 ? `N${activeLevelButtonIndexes.join(',')}` : 'Select N'}
                </Text>
            </Box>
            <Box bg='tomato' w='100%' h='900px'>
                {activeInputsButtonNames.length > 0 ? activeInputsButtonNames.join(', ') : 'Select inputs'}
            </Box>
        </VStack>
    )
}

export default ContentField;
