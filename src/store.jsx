import React, { createContext, useEffect, useState } from "react";

export const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
  const [level, setLevel] = useState(0);
  const [input, setInput] = useState("meanings");
  const [results, setResults] = useState({
    correct: 0,
    total: 0,
    percentage: 0,
  });
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
    results: [],
  });

  useEffect(() => {
    setStoreState((prevState) => ({
      ...prevState,
      jlpt: level,
      input: input,
    }));
  }, [level, input]);

  const makeResults = () => {
    const resultState = storeState.results;

    let correctCount = 0;
    let totalItems = 0;

    for (let i = 0; i < resultState.length; i++) {
      if (resultState[i] === true) {
        correctCount++;
      }
      if (resultState[i] !== undefined) {
        totalItems++;
      }
    }

    const percentage =
      totalItems === 0 ? 0 : ((correctCount / totalItems) * 100).toFixed(2);

    setResults({
      correct: correctCount,
      total: totalItems,
      percentage: percentage,
    });
  };

  const reset = () => {
    setInput("meanings");
    setLevel(0);
    setStoreState((prevState) => ({
      ...prevState,
      answers: [],
      results: [],
    }));
    setResults({
      correct: 0,
      total: 0,
      percentage: 0,
      state: [],
    });
    setHintMode(false);
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
