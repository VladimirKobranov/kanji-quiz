import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
  const [level, setLevel] = useState(5);
  const [input, setInput] = useState("meanings");
  const [results, setResults] = useState(0);
  const [hintMode, setHintMode] = useState(false);

  const [storeState, setStoreState] = useState({
    jlpt: level,
    input: input,
    data: [
      {
        kanji: [],
        meanings: [],
        readings_on: [],
        readings_kun: [],
      },
    ],
    answers: [],
  });

  useEffect(() => {
    setStoreState((prevState) => ({
      ...prevState,
      jlpt: level,
      input: input,
    }));
  }, [level, input]);

  const makeResults = () => {
    const answers = storeState.answers;
    const mode = storeState.input;
    const data = storeState.data;

    let correctCount = 0;
    let totalItems = 0;

    for (let i = 0; i < answers.length; i++) {
      const answer =
        mode === "meanings" ? answers[i].toLowerCase() : answers[i];
      const correctData =
        mode === "meanings"
          ? data[i][mode].map((meaning) => meaning.toLowerCase())
          : data[i][mode];

      if (correctData.includes(answer)) {
        correctCount++;
      }
      totalItems++;
    }

    const percentage = ((correctCount / totalItems) * 100).toFixed(2);
    setResults(percentage + "%");
  };

  const reset = () => {
    setInput("meanings");
    setLevel(5);
    setStoreState((prevState) => ({
      ...prevState,
      answers: [],
    }));
    setResults(0);
    setHintMode(false);
    console.log("reset function");
  };

  console.log("store:", storeState);

  return (
    <StoreContext.Provider
      value={{
        storeState,
        setStoreState,
        results,
        makeResults,
        reset,
        level,
        setLevel,
        input,
        setInput,
        hintMode,
        setHintMode,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
