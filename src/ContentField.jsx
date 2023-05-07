import React, {useContext} from "react";
import {Box, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import style from './App.module.css';
import {InputsContext, LevelContext} from './Main';
import KanjiCard from "./KanjiCard";

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
            <Box w='100%' h='160px'>
                <Text className={style.SelectedLevel}>
                    {activeLevelButtonIndexes.length > 0 ? `N${activeLevelButtonIndexes.join(',')}` : 'Select N'}
                </Text>
            </Box>
            <Box bg='gray.200' w='100%' h='900px'>
                <SimpleGrid columns={15} spacingX='10px' spacingY='30px'>
                    <KanjiCard color='#E6E1E7' textCol='black'/>
                    <KanjiCard color='#AF282F' textCol='white'/>
                    <KanjiCard color='#014A77' textCol='white'/>
                    <KanjiCard color='#E6E1E7' textCol='black'/>
                    <KanjiCard color='#AF282F' textCol='white'/>
                    <KanjiCard color='#014A77' textCol='white'/>
                    <KanjiCard color='#E6E1E7' textCol='black'/>
                    <KanjiCard color='#AF282F' textCol='white'/>
                    <KanjiCard color='#014A77' textCol='white'/>
                    <KanjiCard color='#E6E1E7' textCol='black'/>
                    <KanjiCard color='#AF282F' textCol='white'/>
                    <KanjiCard color='#014A77' textCol='white'/>
                    <KanjiCard color='#E6E1E7' textCol='black'/>
                    <KanjiCard color='#AF282F' textCol='white'/>
                    <KanjiCard color='#014A77' textCol='white'/>
                    <KanjiCard color='#E6E1E7' textCol='black'/>
                    <KanjiCard color='#AF282F' textCol='white'/>
                    <KanjiCard color='#014A77' textCol='white'/>
                    <KanjiCard color='#E6E1E7' textCol='black'/>
                    <KanjiCard color='#AF282F' textCol='white'/>
                    <KanjiCard color='#014A77' textCol='white'/>
                    <KanjiCard color='#E6E1E7' textCol='black'/>
                    <KanjiCard color='#AF282F' textCol='white'/>
                    <KanjiCard color='#014A77' textCol='white'/>
                    <KanjiCard color='#E6E1E7' textCol='black'/>
                    <KanjiCard color='#AF282F' textCol='white'/>
                    <KanjiCard color='#014A77' textCol='white'/>
                    <KanjiCard color='#E6E1E7' textCol='black'/>
                    <KanjiCard color='#AF282F' textCol='white'/>
                    <KanjiCard color='#014A77' textCol='white'/>
                    <KanjiCard color='#E6E1E7' textCol='black'/>
                    <KanjiCard color='#AF282F' textCol='white'/>
                    <KanjiCard color='#014A77' textCol='white'/>
                </SimpleGrid>
                {activeInputsButtonNames.length > 0 ? activeInputsButtonNames.join(', ') : 'Select inputs'}
            </Box>
        </VStack>
    )
}

export default ContentField;
