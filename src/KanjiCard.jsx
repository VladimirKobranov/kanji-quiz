import React, { useContext, useEffect } from "react";
import { StoreContext } from "./store";
import { Box, Text, Input } from "@chakra-ui/react";

export default function KanjiCard({
  kanji,
  meanings,
  readings_on,
  readings_kun,
  value,
  onInputChange,
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

  useEffect(() => {}, [hintMode]);

  return (
    <Box>
      <Text>Kanji: {kanji}</Text>
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
  );
}
