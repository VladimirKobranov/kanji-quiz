import React, { useContext, useState } from "react";
import { StoreContext } from "./store";
import {
  Box,
  Center,
  Flex,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import "./style.css";

export default function KanjiCard({
  kanji,
  meanings,
  readings_on,
  readings_kun,
  value,
  onInputChange,
  isCorrect,
}) {
  const { input } = useContext(StoreContext);
  const { hintMode } = useContext(StoreContext);
  const [isDisabled, setIsDisabled] = useState(false);

  function handleChange(e) {
    if (e.key === "Enter") {
      const newValue = e.target.value;
      if (!newValue) return;
      onInputChange(newValue);
      setIsDisabled(true);
    }
  }

  function handleBlur(e) {
    const newValue = e.target.value;
    if (!newValue) {
      return;
    }
    onInputChange(newValue);
    setIsDisabled(true);
  }

  function handleCorrect() {
    if (isCorrect === true) {
      return "#014A77FF";
    } else if (isCorrect === false) {
      return "#AF282F";
    } else {
      return "#e6e1e7";
    }
  }

  return (
    <Center>
      <Box w="auto" h="auto" bg={handleCorrect} borderRadius="5px">
        {hintMode ? (
          <Box>
            <Popover>
              <PopoverTrigger>
                <Center role="button" tabIndex="0" children="Click">
                  <Text fontSize="6xl" textAlign="center" className="KanjiCard">
                    {kanji}
                  </Text>
                </Center>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton size="lg" color="#FCFCFDFF" />
                <PopoverHeader
                  fontSize="lg"
                  fontWeight="700"
                  bg="#014A77"
                  color="#FCFCFDFF"
                  rounded="5px"
                >
                  Hint
                </PopoverHeader>
                <PopoverBody rounded="5px">
                  <Flex>
                    <Box mr="15px" p="5px">
                      <Text className="hintHeaderKanji" rounded="2px">
                        {kanji}
                      </Text>
                    </Box>
                    <Box>
                      <Text fontWeight="700">Meaning:</Text>
                      <Text>{meanings.join(", ")}</Text>
                      <Text fontWeight="700">Onyomi:</Text>
                      <Text>{readings_on.join("、 ")}</Text>
                      <Text fontWeight="700">Kunyomi:</Text>
                      <Text>{readings_kun.join("、")}</Text>
                    </Box>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        ) : (
          <Text fontSize="6xl" textAlign="center" className="KanjiCard">
            {kanji}
          </Text>
        )}
        <Input
          className="CardText"
          type="text"
          placeholder={input}
          value={value}
          onBlur={handleBlur}
          onKeyDown={handleChange}
          textAlign="center"
          name="answer"
          disabled={isDisabled}
          _placeholder={{ opacity: 0.2, color: "#000000" }}
          focusBorderColor="#E6E1E7"
          _hover={{ backgroundColor: value }}
          borderColor={handleCorrect}
          // _focus={{ backgroundColor: "black" }}
        />
      </Box>
    </Center>
  );
}
