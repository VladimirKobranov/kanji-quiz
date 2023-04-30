import React from "react";
import {Center, Text, VStack} from "@chakra-ui/react";
import style from './Title.module.css';

function Title() {
    return (
        <Center w='180px' mb='10px' mt='25px'>
            <VStack>
                <Text className={style.TitleKanji}>
                    漢字 クイズ
                </Text>
                <Text className={style.TitleMain} color='#868686'>
                    KANJI QUIZ
                </Text>
            </VStack>
        </Center>
    )
}

export default Title;