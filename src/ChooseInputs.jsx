import React, {useState} from "react";
import {Box, Button, Checkbox, Text} from "@chakra-ui/react";
import MyButton from "./MyButton";
import style from "./App.module.css";

function ChooseInputs() {
    return (
        <Box h="auto" textAlign="center" w='150px'>
            <Text className={style.HeaderMain}>
               Choose inputs
            </Text>
            <Box bg="tomato" rounded='2px'>
                <MyButton name='romaji'/>
                <MyButton name='furigana'/>
                <MyButton name='meaning'/>
            </Box>
        </Box>
    )
}

export default ChooseInputs;