import React, {useEffect, useState} from "react";
import {Box, HStack, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import style from './css/App.module.css';
import KanjiCard from "./KanjiCard";
import Content from "./css/contentField.module.css";
import {useDispatch, useSelector} from "react-redux";
import {addAnswer} from "./store/store";
import InfoMessage from "./InfoMessage";
import dataKanji from "./data/kanji.json";
function ContentField() {
    const levelsFromRedux = useSelector((state) => state.levels);
    const inputsFromRedux = useSelector((state) => state.inputs);
    const dispatch = useDispatch();

    // const url = "https://raw.githubusercontent.com/davidluzgouveia/kanji-data/master/kanji.json";
    const [names, setNames] = useState([]);
    const [data, setData] = useState({});
    const [jlptLevelFilter, setJlptLevelFilter] = useState([]);
    // var inputIndex;
    //
    // const handleCallback = (index) => {
    //     // Do something with the index received from KanjiCard
    //     inputIndex = index;
    //     console.log("Received index from KanjiCard:", index);
    // };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch(url);
                // const data = await response.json();
                const data = dataKanji;
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
        card.readings_on = data[kanji].readings_on
        card.readings_kun = data[kanji].readings_kun
        const meaningsString = card.meanings.join(',');
        const answer = card.meanings.some(key => key.toUpperCase() === value.trim().toUpperCase()
            && inputsFromRedux.includes('meaning'));
        const answerOn = card.readings_on.some(key => key.toUpperCase() === value.trim().toUpperCase()
            && inputsFromRedux.includes('reading-on'));
        const answerKun = card.readings_kun.some(key => key.toUpperCase() === value.trim().toUpperCase()
            && inputsFromRedux.includes('reading-kun'));
        const readings_on = card.readingOn
        const readings_kun = card.readingKun
        let answersTrue = false

        if (answer || answerOn || answerKun) {
            answersTrue = true
        }
        console.log('input: ', answer, answerOn, answerKun, inputsFromRedux, card.readings_kun)
        console.log('index from content: ', inputsFromRedux.map(x => x))
        dispatch(addAnswer(
            {
                kanji,
                input: value,
                correct: answer,
                correctOn: answerOn,
                correctKun: answerKun,
                meaning: meaningsString,
                readingOn: readings_on,
                readingKun: readings_kun
            }
        ));
        return answersTrue
    }

    function createKanjiCard(name) {
        return (
            <KanjiCard
                key={(Math.random() + 1).toString(32).substring(7)}
                textCol="black"
                kanji={name}
                validation={validateCard}
                index={inputsFromRedux.map(x => x)}
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
                    {levelsFromRedux.length === 0 ? InfoMessage : shuffledNames.map(createKanjiCard)}
                </SimpleGrid>
            </Box>
        </VStack>
    );
}

export default ContentField;
