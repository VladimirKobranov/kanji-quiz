import React, {useEffect, useState} from "react";
import {Box, HStack, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import style from './css/App.module.css';
import KanjiCard from "./KanjiCard";
import Content from "./css/contentField.module.css";
import {useDispatch, useSelector} from "react-redux";
import {addAnswer, addInput, removeAnswer, removeInput, result} from "./store/store";

function ContentField() {
    const levelsFromRedux = useSelector((state) => state.levels);
    const inputsFromRedux = useSelector((state) => state.inputs);
    const dispatch = useDispatch();
    const url = "https://raw.githubusercontent.com/davidluzgouveia/kanji-data/master/kanji.json";
    const [names, setNames] = useState([]);
    const [data, setData] = useState({});
    const [jlptLevelFilter, setJlptLevelFilter] = useState([]);
    const answers = {};

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                const kanjiNames = Object.keys(data);
                setNames(kanjiNames);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);


    useEffect(() => {
        const parsedLevels = levelsFromRedux.map((level) => parseInt(level, 10));
        setJlptLevelFilter(parsedLevels);
    }, [levelsFromRedux]);

    const filteredNames = names.filter((name) => {
        const kanjiData = data[name];
        return kanjiData && jlptLevelFilter.includes(kanjiData.jlpt_new);
    });
    const shuffledNames = [...filteredNames];
    for (let i = shuffledNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledNames[i], shuffledNames[j]] = [shuffledNames[j], shuffledNames[i]];
    }

    function validateCard(kanji, value) { //add to store
        const card = {meanings: []}
        card.meanings = data[kanji].meanings
        const meaningsString = card.meanings.join(',');
        const answer = card.meanings.some(key => key.toUpperCase() === value.trim().toUpperCase());
        if (!answers[kanji]) {
            answers[kanji] = []
        }
        answers[kanji].push({
            input: value,
            correct: answer,
            meaning: meaningsString
        })
        console.log(answers)
        answerToRedux(answers);
        return answer
    }

    const answerToRedux = (answers) => {
        const answersCopy = {...answers};
        dispatch(addAnswer(answersCopy));
        // dispatch(addAnswer(answers[answers.length]))
    }


    function createKanjiCard(name, index) {
        return (
            <KanjiCard
                key={(Math.random() + 1).toString(32).substring(7)}
                textCol="black"
                kanji={name}
                index={index}
                validation={validateCard}
            />
        );
    }

    return (
        <VStack spacing="0">
            <Box w="100%" h="160px">
                <HStack>
                    <Text className={style.SelectedLevel}>
                        {jlptLevelFilter.length ? 'N' + jlptLevelFilter.join(', N') : "Select N"}
                    </Text>
                    <Text className={style.SelectedInputs}>
                        {inputsFromRedux.length ? inputsFromRedux.join(', ') : "Select inputs"}
                    </Text>
                </HStack>
            </Box>
            <Box w="100%" h="76vh" className={Content.scroll}>
                <SimpleGrid columns={15} spacingX="10px" spacingY="30px" minChildWidth='100px'>
                    {shuffledNames.map(createKanjiCard)}
                </SimpleGrid>
            </Box>
        </VStack>
    );
}

export default ContentField;
