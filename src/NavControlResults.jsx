import React, {useState} from "react";
import {Box, Button, Center, HStack, Text} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {reset, result} from "./store/store";
import style from './css/App.module.css';
import {isBrowser} from 'react-device-detect';

function NavControlResults() {
    const dispatch = useDispatch();
    const answersFromRedux = useSelector((state) => state.answers.answers);
    const totalQuestions = Object.keys(answersFromRedux).length;
    const correctAnswers = Object.values(answersFromRedux).map((item) => item[0].correct);
    const correctAnswersOn = Object.values(answersFromRedux).map((item) => item[0].correctOn);
    const correctAnswersKun = Object.values(answersFromRedux).map((item) => item[0].correctKun);

    const correctCount = correctAnswers.filter((answer) => answer).length +
        correctAnswersOn.filter((answer) => answer).length +
        correctAnswersKun.filter((answer) => answer).length;

    const accuracyPercentage = ((correctCount / totalQuestions) * 100).toFixed(0) + "%";
    const [percentage, setPercentage] = useState('0%');
    const [questions, setQuestions] = useState('0/0')

    const handleResetClick = () => {
        dispatch(reset());
    }
    const handleResultClick = () => {
        dispatch(result());
        setPercentage(accuracyPercentage)
        setQuestions(`${correctCount}/${totalQuestions}`);
    }
    return (
        <Box textAlign="center">
            <Box
                h="auto"
                width="auto"
                color="white"
                w={isBrowser ? "150px" : '200px'}
                mb='20px'
            >
                <Button
                    bg="#AF282F"
                    h={isBrowser ? "30px" : '30px'}
                    rounded={isBrowser ? "2px" : '5px'}
                    w={isBrowser ? "150px" : '200px'}
                    onClick={() => handleResetClick()}
                    mb={isBrowser ? '5px' : '10px'}
                >
                    <Text fontSize={isBrowser ? "20px" : '20px'}>
                        RESET
                    </Text>
                </Button>

                <Button
                    bg="#014A77"
                    h={isBrowser ? "30px" : '30px'}
                    rounded={isBrowser ? "2px" : '5px'}
                    w="100%"
                    onClick={() => handleResultClick()}>
                    <Text
                        fontSize={isBrowser ? "20px" : '20px'}
                    >RESULT</Text>
                </Button>
            </Box>
            <Box>
                <Text className={isBrowser ? style.HeaderMain : style.HeaderMainMobile}>
                    Accuracy
                </Text>
                <HStack>
                    <Center w='100%'>
                        <Text w='auto' color='#868686' mr='20px'>
                            {questions}
                        </Text>
                        <Text w='auto' color='#868686'>
                            {percentage}
                        </Text>
                    </Center>
                </HStack>
            </Box>
        </Box>
    );
}

export default NavControlResults;
