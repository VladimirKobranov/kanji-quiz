import React, {useState} from "react";
import {Box, Button, HStack, Text} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {reset, result} from "./store/store";
import style from './css/App.module.css';


function NavControlResults() {
    const dispatch = useDispatch();
    const answersFromRedux = useSelector((state) => state.answers.answers);
    const totalQuestions = Object.keys(answersFromRedux).length;
    const correctAnswers = Object.values(answersFromRedux).map((item) => item[0].correct);
    const correctCount = correctAnswers.filter((answer) => answer).length;
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
        console.log(answersFromRedux)
    }
    return (
        <Box>
            <Box h="auto" width="190" color="white" textAlign="center" w="150px" mb='20px'>
                <Button bg="#AF282F" h="30px" rounded="2px" w="100%" mb="5px" onClick={() => handleResetClick()}>
                    <Text fontSize="20px">RESET</Text>
                </Button>
                <Button bg="#014A77" h="30px" rounded="2px" w="100%" onClick={() => handleResultClick()}>
                    <Text fontSize="20px">RESULT</Text>
                </Button>
            </Box>
            <Box textAlign="center">
                <Text className={style.HeaderMain}>
                    Accuracy
                </Text>
                <HStack>
                    <Text w='75px' color='#868686'>
                        {/*45/100*/}
                        {questions}
                    </Text>
                    <Text w='75px' color='#868686'>
                        {percentage}
                    </Text>
                </HStack>
            </Box>
        </Box>
    );
}

export default NavControlResults;
