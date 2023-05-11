import React, {useContext, useEffect, useState} from "react";
import {Box, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import style from "./App.module.css";
import {InputsContext, LevelContext} from "./Main";
import KanjiCard from "./KanjiCard";

function ContentField() {
    const {buttonStatus: levelButtonStatus} = useContext(LevelContext);
    const {buttonStatus: inputsButtonStatus} = useContext(InputsContext);

    const [jsonData, setJsonData] = useState([]);
    const [activeLevelButtonIndexes, setActiveLevelButtonIndexes] = useState([]);
    const [activeInputsButtonNames, setActiveInputsButtonNames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


//    from David Gouveia
//  https://github.com/davidluzgouveia
    const url =
        "https://raw.githubusercontent.com/davidluzgouveia/kanji-data/master/kanji.json";

    function pullJson() {
        setIsLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                const filteredData = Object.keys(responseData).filter((key) => {
                    const jlptLevel = responseData[key].jlpt_new;
                    return activeLevelButtonIndexes.includes(jlptLevel);
                });
                setJsonData(filteredData);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        pullJson();
    }, [activeLevelButtonIndexes]);

    useEffect(() => {
        const levelButtons = levelButtonStatus.reduce((acc, button, index) => {
            if (button.active) {
                acc.push(index + 1);
            }
            return acc;
        }, []);
        setActiveLevelButtonIndexes(levelButtons);
    }, [levelButtonStatus]);

    useEffect(() => {
        const inputButtons = inputsButtonStatus.reduce((acc, button) => {
            if (button.active) {
                acc.push(button.name);
            }
            return acc;
        }, []);
        setActiveInputsButtonNames(inputButtons);
    }, [inputsButtonStatus]);

    function createKanjiCard(name) {
        return (
            <KanjiCard
                key={(Math.random() + 1).toString(36).substring(7)}
                color="#E6E1E7"
                textCol="black"
                kanji={name}
            />
        );
    }

    return (
        <VStack spacing="0">
            <Box w="100%" h="160px">
                <Text className={style.SelectedLevel}>
                    {activeLevelButtonIndexes.length > 0
                        ? `N${activeLevelButtonIndexes.join(",")}`
                        : "Select N"}
                </Text>
            </Box>
            <Box bg="gray.200" w="100%" h="900px">
                {activeInputsButtonNames.length > 0
                    ? ""
                    : "Select inputs"}
                {isLoading ? (
                    <Text>Loading...</Text>
                ) : (
                    <SimpleGrid columns={15} spacingX="10px" spacingY="30px">
                        {jsonData.map(createKanjiCard)}
                    </SimpleGrid>
                )}
            </Box>
        </VStack>
    );
}

export default ContentField;
