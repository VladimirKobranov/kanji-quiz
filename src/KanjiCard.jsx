import React, { useContext, useEffect } from "react";
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
  const { hintMode } = useContext(StoreContext);

  function handleChange(e) {
    if (e.key === "Enter") {
      const newValue = e.target.value;
      onInputChange(newValue);
    }
  }

  useEffect(() => {}, [hintMode]);

  return (
    <div>
      <div>Kanji: {kanji}</div>
      {hintMode ? (
        <div>
          <div>Meanings: {meanings}</div>
          <div>Readings (On): {readings_on}</div>
          <div>Readings (Kun): {readings_kun}</div>
        </div>
      ) : null}
      <input
        type="text"
        placeholder={input}
        value={value}
        onKeyDown={handleChange}
      />
    </div>
  );
}
