import React, { Suspense, useContext, useEffect, useState } from "react";
import { StoreContext } from "./store";
import data from "./data.js";
import KanjiCard from "./KanjiCard";
import { Box, Text, Button, Grid, GridItem, Center } from "@chakra-ui/react";

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function Main() {
  const { storeState, setStoreState } = useContext(StoreContext);
  const { results, makeResults } = useContext(StoreContext);
  const { reset } = useContext(StoreContext);
  const { level, setLevel } = useContext(StoreContext);
  const { input, setInput } = useContext(StoreContext);
  const { hintMode, setHintMode } = useContext(StoreContext);
  const [inputVal, setInputVal] = useState("");
  const [shuffledKanjiData, setShuffledKanjiData] = useState([]);

  useEffect(() => {
    const kanjiData = Object.keys(data).filter(
      (key) => data[key]["jlpt_new"] === storeState.jlpt,
    );
    const shuffledData = shuffleArray(kanjiData);
    setShuffledKanjiData(shuffledData);
  }, [storeState.jlpt]);

  useEffect(() => {
    const newData = shuffledKanjiData.map((key) => ({
      kanji: key,
      meanings: data[key].meanings,
      readings_on: data[key].readings_on,
      readings_kun: data[key].readings_kun,
    }));

    setStoreState((prevState) => ({
      ...prevState,
      data: newData,
    }));
  }, [shuffledKanjiData, setStoreState]);

  function handleResults() {
    makeResults();
  }

  function handleReset() {
    setInputVal("");
    reset();
  }

  function handleSelectLevel(index) {
    return () => {
      setLevel(index);
    };
  }
  function handleSelectInput(type) {
    return () => {
      setInput(type);
    };
  }

  function handleHintMode() {
    setHintMode(!hintMode);
    console.log("store hint:", hintMode);
  }

  function handleInputChange(kanjiIndex, newVal) {
    setStoreState((prevState) => {
      const updatedAnswers = [...prevState.answers];
      updatedAnswers[kanjiIndex] = newVal;
      return {
        ...prevState,
        answers: updatedAnswers,
      };
    });
    handleResults();
  }

  return (
    <Box>
      <Suspense fallback={<Text>loading...</Text>}>
        <Button onClick={handleResults}>results</Button>
        <Text>
          {results
            ? `correct: ${results.correct}, total: ${results.total}, percentage: ${results.percentage}%`
            : null}
        </Text>
        <Button onClick={handleReset}>reset</Button>

        <Text>level: {level}</Text>
        <Button onClick={handleSelectLevel(5)}>level 5</Button>
        <Button onClick={handleSelectLevel(4)}>level 4</Button>
        <Button onClick={handleSelectLevel(3)}>level 3</Button>
        <Button onClick={handleSelectLevel(2)}>level 2</Button>
        <Button onClick={handleSelectLevel(1)}>level 1</Button>

        <Text>input: {input}</Text>
        <Button onClick={handleSelectInput("meanings")}>meanings</Button>
        <Button onClick={handleSelectInput("readings_on")}>readings_on</Button>
        <Button onClick={handleSelectInput("readings_kun")}>
          readings_kun
        </Button>

        <Button onClick={handleHintMode}>hint mode</Button>
        {hintMode ? <Text>Hint mode</Text> : null}

        {storeState.data.length === 0 ? <Text>select level</Text> : null}
        <Center>
          <Grid templateColumns="repeat(3, 1fr)" gap={3}>
            {storeState.data.map((kanjiData, index) => (
              <GridItem key={index + 1}>
                <KanjiCard
                  key={index}
                  index={index + 1}
                  kanji={kanjiData.kanji}
                  meanings={kanjiData.meanings}
                  readings_on={kanjiData.readings_on}
                  readings_kun={kanjiData.readings_kun}
                  onInputChange={(newValue) =>
                    handleInputChange(index, newValue)
                  }
                  defaultValue={inputVal}
                  isCorrect={results.state ? results.state[index] : null}
                />
              </GridItem>
            ))}
          </Grid>
        </Center>
      </Suspense>
    </Box>
  );
}
