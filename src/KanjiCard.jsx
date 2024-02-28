import React, { useContext, useRef, useEffect } from "react";
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
  const { reset } = useContext(StoreContext);
  const { hintMode } = useContext(StoreContext);
  const inputRef = useRef(null);

  function handleChange(e) {
    if (e.key === "Enter") {
      const newValue = e.target.value;
      onInputChange(newValue);
    }
  }

  function handleReset() {
    inputRef.current.value = "";
  }

  useEffect(() => {
    // inputRef.current.value = "";
  }, [reset]);

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
        ref={inputRef}
      />
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
