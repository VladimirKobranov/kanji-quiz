import React from "react";
import {Box, Text} from "@chakra-ui/react";
import MyButton from "./MyButton";
import style from "./App.module.css";

function ChooseLevel() {
    return (<Box h="auto" textAlign="center" w='150px'>
        <Text className={style.HeaderMain}>
            Choose level
        </Text>
        <Box bg="tomato" rounded='2px'>
            <MyButton name='N5'/>
            <MyButton name='N4'/>
            <MyButton name='N3'/>
            <MyButton name='N2'/>
            <MyButton name='N1'/>
        </Box>
    </Box>)
}

export default ChooseLevel;