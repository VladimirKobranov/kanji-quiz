import React from "react";
import {Box, Text} from "@chakra-ui/react";
import MyButton from "./MyButton";
import style from "./App.module.css";

function ChooseInputs() {
    return (
        <Box h="auto" textAlign="center" w='150px'>
            <Text className={style.HeaderMain}>
                Choose inputs
            </Text>
            <Box bg="#E6E1E7" rounded='2px'>
                <MyButton name='romaji' index='romaji'/>
                <MyButton name='furigana' index='furigana'/>
                <MyButton name='meaning' index='meaning'/>
            </Box>
        </Box>
    )
}

export default ChooseInputs;