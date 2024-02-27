import React from "react";

export default function KanjiCard({
  kanji,
  meanings,
  readings_on,
  readings_kun,
  value,
  onInputChange,
}) {
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
        placeholder="text"
        value={value}
        onKeyDown={handleChange}
      />
    </div>
  );
}
