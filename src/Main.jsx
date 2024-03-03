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
  calc,
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
import Footer from "./Footer";

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
          <DrawerHeader p="0">
            <Center>
              <VStack mt="20px">
                <Text className="TitleKanji">漢字 クイズ</Text>
                <Text className="TitleMain">Kanji Quiz</Text>
              </VStack>
            </Center>
          </DrawerHeader>
          <DrawerBody>
            <VStack>
              <Box>
                <VStack>
                  <Text className="HeaderMain">Choose level</Text>
                  <Button onClick={handleSelectLevel(5)} className="Button">
                    level 5
                  </Button>
                  <Button onClick={handleSelectLevel(4)} className="Button">
                    level 4
                  </Button>
                  <Button onClick={handleSelectLevel(3)} className="Button">
                    level 3
                  </Button>
                  <Button onClick={handleSelectLevel(2)} className="Button">
                    level 2
                  </Button>
                  <Button onClick={handleSelectLevel(1)} className="Button">
                    level 1
                  </Button>
                </VStack>
              </Box>

              <Box>
                <VStack>
                  <Text className="HeaderMain">Choose input</Text>
                  <Button
                    onClick={handleSelectInput("meanings")}
                    className="Button"
                  >
                    meanings
                  </Button>
                  <Button
                    onClick={handleSelectInput("readings_on")}
                    className="Button"
                  >
                    readings_on
                  </Button>
                  <Button
                    onClick={handleSelectInput("readings_kun")}
                    className="Button"
                  >
                    readings_kun
                  </Button>
                </VStack>
              </Box>

              <Box>
                <VStack>
                  <Button
                    onClick={handleHintMode}
                    bg={hintMode ? "#014A77FF" : null}
                    className="Button"
                  >
                    hint mode
                  </Button>
                  <Button onClick={handleReset} className="Button" bg="#AF282F">
                    reset
                  </Button>
                  <Button
                    onClick={handleResults}
                    className="Button"
                    bg="#014A77FF"
                  >
                    results
                  </Button>
                  <Text className="HeaderMain">Accuracy</Text>
                  <Text className="results">
                    {results
                      ? `${results.correct}/${results.total}/${results.percentage}%`
                      : null}
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </DrawerBody>
          <DrawerFooter justifyContent="center" className="footer">
            <Footer />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Suspense fallback={<Text>loading...</Text>}>
        <Box>
          <VStack alignItems="start">
            <Text className="SelectedLevel">
              {storeState.data.length === 0
                ? "Select level"
                : `N${storeState.jlpt}`}
            </Text>
            <Text className="SelectedInput">
              {storeState.data.length === 0
                ? "Select input"
                : `${storeState.input}`}
            </Text>
            <Text className="hint">{hintMode ? "Hint mode" : null}</Text>
          </VStack>
        </Box>
        <Center>
          {storeState.data.length === 0 ? (
            <Box>
              <Text>Wellcome</Text>
              <Text>info message</Text>
            </Box>
          ) : null}
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={3}
            className={hintMode ? "gridFieldHint" : "gridField"}
          >
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
