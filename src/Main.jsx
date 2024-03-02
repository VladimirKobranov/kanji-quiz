import React, { Suspense, useContext, useEffect, useState } from "react";
import { StoreContext } from "./store";
import data from "./data.js";
import KanjiCard from "./KanjiCard";
import {
  Box,
  Text,
  Button,
  Grid,
  GridItem,
  Center,
  VStack,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import "./style.css";

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
    const currentKanjiData = storeState.data[kanjiIndex];
    const cleanedInput = newVal.trim();
    const mode = storeState.input;

    let isCorrect;
    if (mode === "meanings") {
      isCorrect = currentKanjiData[mode]
        .map((meaning) => meaning.toLowerCase())
        .includes(cleanedInput.toLowerCase());
    } else {
      isCorrect = currentKanjiData[mode].includes(cleanedInput);
    }

    setStoreState((prevState) => {
      const updatedAnswers = [...prevState.answers];
      updatedAnswers[kanjiIndex] = newVal;
      const updatedResults = [...prevState.results];
      updatedResults[kanjiIndex] = isCorrect;
      return {
        ...prevState,
        answers: updatedAnswers,
        results: updatedResults,
      };
    });
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box m="10px">
      <Icon
        className="menuIcon"
        path={mdiMenu}
        size={2}
        onClick={onOpen}
        ref={btnRef}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Icon
            path={mdiMenu}
            size={2}
            onClick={onClose}
            className="menuIcon"
          />
          <DrawerHeader bg="tomato">
            <Center>
              <VStack>
                <Text>漢字 クイズ</Text>
                <Text>Kanji Quiz</Text>
              </VStack>
            </Center>
          </DrawerHeader>
          <DrawerBody bg="gray.400">
            <VStack>
              <Box>
                <VStack>
                  <Text>level: {level}</Text>
                  <Button onClick={handleSelectLevel(5)}>level 5</Button>
                  <Button onClick={handleSelectLevel(4)}>level 4</Button>
                  <Button onClick={handleSelectLevel(3)}>level 3</Button>
                  <Button onClick={handleSelectLevel(2)}>level 2</Button>
                  <Button onClick={handleSelectLevel(1)}>level 1</Button>
                </VStack>
              </Box>

              <Box>
                <VStack>
                  <Text>input: {input}</Text>
                  <Button onClick={handleSelectInput("meanings")}>
                    meanings
                  </Button>
                  <Button onClick={handleSelectInput("readings_on")}>
                    readings_on
                  </Button>
                  <Button onClick={handleSelectInput("readings_kun")}>
                    readings_kun
                  </Button>
                </VStack>
              </Box>

              <Box>
                <VStack>
                  <Button onClick={handleResults}>results</Button>
                  <Text>
                    {results
                      ? `correct: ${results.correct}, total: ${results.total}, percentage: ${results.percentage}%`
                      : null}
                  </Text>
                </VStack>
              </Box>

              <Button onClick={handleReset}>reset</Button>

              <Box>
                <Button onClick={handleHintMode}>hint mode</Button>
              </Box>
            </VStack>
          </DrawerBody>
          <DrawerFooter justifyContent="center" bg="cyan">
            copyright vk | 2024
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Suspense fallback={<Text>loading...</Text>}>
        <Box bg="tomato">
          <VStack>
            {storeState.data.length === 0 ? (
              <Text>Select level</Text>
            ) : (
              <Text>N{storeState.jlpt} selected</Text>
            )}
            {storeState.data.length === 0 ? (
              <Text>Select input</Text>
            ) : (
              <Text>{storeState.input} selected</Text>
            )}
            {hintMode ? <Text>Hint mode</Text> : null}
          </VStack>
        </Box>
        <Center>
          {storeState.data.length === 0 ? (
            <Box>
              <Text>Wellcome</Text>
              <Text>info message</Text>
            </Box>
          ) : null}
          <Grid templateColumns="repeat(3, 1fr)" gap={3}>
            {storeState.data.map((kanjiData, index) => (
              <GridItem key={index}>
                <KanjiCard
                  key={index}
                  index={index}
                  kanji={kanjiData.kanji}
                  meanings={kanjiData.meanings}
                  readings_on={kanjiData.readings_on}
                  readings_kun={kanjiData.readings_kun}
                  onInputChange={(newValue) =>
                    handleInputChange(index, newValue)
                  }
                  defaultValue={inputVal}
                  isCorrect={
                    storeState.results ? storeState.results[index] : null
                  }
                />
              </GridItem>
            ))}
          </Grid>
        </Center>
      </Suspense>
    </Box>
  );
}
