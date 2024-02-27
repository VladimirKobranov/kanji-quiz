import React, { useContext } from "react";
import { StoreContext } from "./store";

export default function KanjiCard({
  kanji,
  meanings,
  readings_on,
  readings_kun,
  value,
  onInputChange,
}) {
  const { input } = useContext(StoreContext);

  function handleChange(e) {
    if (e.key === "Enter") {
      const newValue = e.target.value;
      onInputChange(newValue);
    }
  }

  return (
    <div>
      <div>Kanji: {kanji}</div>
      <div>Meanings: {meanings}</div>
      <div>Readings (On): {readings_on}</div>
      <div>Readings (Kun): {readings_kun}</div>
      <input
        type="text"
        placeholder={input}
        value={value}
        onKeyDown={handleChange}
      />
    </div>
  );
}
