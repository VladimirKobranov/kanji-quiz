import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "./store";
import { Box, Text, Input, Center } from "@chakra-ui/react";

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

  function handleChange(e) {
    if (e.key === "Enter") {
      const newValue = e.target.value;
      onInputChange(newValue);
    }
  }
  function handleBlur(e) {
    const newValue = e.target.value;
    if (!newValue) {
      return;
    }
    onInputChange(newValue);
  }

  function handleCorrect() {
    if (isCorrect === true) {
      return "blue";
    } else if (isCorrect === false) {
      return "red";
    } else {
      return "gray";
    }
  }

  return (
    <Center>
      <Box w="120px" h="auto" bg={handleCorrect}>
        <Text fontSize="6xl" textAlign="center">
          {kanji}
        </Text>
        {hintMode ? (
          <Box>
            <Text>Meanings: {meanings.join(", ")}</Text>
            <Text>Readings (On): {readings_on.join("、 ")}</Text>
            <Text>Readings (Kun): {readings_kun.join("、 ")}</Text>
          </Box>
        ) : null}
        <Input
          type="text"
          placeholder={input}
          value={value}
          onBlur={handleBlur}
          onKeyDown={handleChange}
        />
      </Box>
    </Center>
  );
}
