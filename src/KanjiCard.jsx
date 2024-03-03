import React, { useContext, useState } from "react";
import { StoreContext } from "./store";
import { Box, Text, Input, Center } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
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
                  {/* <Button w="90px" h="120px" variant="ghost"> */}
                  <Text fontSize="6xl" textAlign="center" className="KanjiCard">
                    {kanji}
                  </Text>
                  {/* </Button> */}
                </Center>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader bg="tomato">Hint!</PopoverHeader>
                <PopoverBody>
                  <Text>Meanings: {meanings.join(", ")}</Text>
                  <Text>Readings (On): {readings_on.join("、 ")}</Text>
                  <Text>Readings (Kun): {readings_kun.join("、 ")}</Text>
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
          // _hover={{ backgroundColor: color }}
          // _focus={{ backgroundColor: color }}
        />
      </Box>
    </Center>
  );
}
