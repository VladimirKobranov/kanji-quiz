import {Box, Text} from "@chakra-ui/react";
import Content from "./css/contentField.module.css";
import React from "react";


function InfoMessage() {
    return (
        <Box width='500px'>
            <Text className={Content.infoGreetingsJap}>
                いらっしゃいませ!
            </Text>
            <Text className={Content.infoGreetingsEngl} mb='20px'>
                or greetings!
            </Text>
            <Text className={Content.infoGreetingsText} mb='20px'>
                Welcome to the Kanji Quiz App.
                <br/>
                Here, you can practice with N5 to N1 Kanji levels, along with their meanings and On'yomi and
                Kun'yomi readings.
            </Text>
            <Text className={Content.infoGreetingsText} mb='20px'>
                First, select the desired level or even several levels.<br/>
                Then, input your options. (On'yomi and Kun'yomi readings require a Japanese keyboard.)
            </Text>
            <Text className={Content.infoGreetingsText} mb='20px'>
                A blue card indicates a correct answer, while a red card indicates an incorrect one. <br/>
                After you're done, press the "Results" button to see your accuracy percentage.
            </Text>
            <Text className={Content.infoGreetingsText} mb='20px'>
                Press the "Reset" button to start over.
            </Text>
            <Text className={Content.infoGreetingsText} mb='20px'>
                Good luck!
            </Text>
            <Text className={Content.infoGreetingsGoodLuckJap}>
                頑張って!
            </Text>
        </Box>
    )
}

export default InfoMessage();