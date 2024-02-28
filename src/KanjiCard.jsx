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
  function handleBlur(e) {
    const newValue = e.target.value;
    if (!newValue) {
      return;
    }
    onInputChange(newValue);
  }

  useEffect(() => {}, [hintMode]);

  return (
    <div>
      <div>Kanji: {kanji}</div>
      {hintMode ? (
        <div>
          <div>Meanings: {meanings.join(", ")}</div>
          <div>Readings (On): {readings_on.join("、 ")}</div>
          <div>Readings (Kun): {readings_kun.join("、 ")}</div>
        </div>
      ) : null}
      <input
        type="text"
        placeholder={input}
        value={value}
        onBlur={handleBlur}
        onKeyDown={handleChange}
      />
    </div>
  );
}
