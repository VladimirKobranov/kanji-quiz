import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
  const [level, setLevel] = useState(0);
  const [input, setInput] = useState("meanings");
  const [results, setResults] = useState({
    correct: 0,
    total: 0,
    percentage: 0,
    state: [],
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
    const resultState = [];

    for (let i = 0; i < answers.length; i++) {
      const correctData = data[i][mode];
      let isCorrect;

      if (answers[i]) {
        const answerToCheck =
          mode === "meanings" ? answers[i].toLowerCase() : answers[i];
        const correctDataToCheck =
          mode === "meanings"
            ? correctData.map((meaning) => meaning.toLowerCase())
            : correctData;

        if (correctDataToCheck.includes(answerToCheck)) {
          correctCount++;
          isCorrect = true;
        } else {
          isCorrect = false;
        }
        totalItems++;
      } else {
        isCorrect = undefined;
      }

      resultState.push(isCorrect);
    }

    let percentage = ((correctCount / totalItems) * 100).toFixed(2);
    if (isNaN(percentage)) {
      percentage = 0;
    }

    console.log("percentage: ", percentage);
    setResults({
      correct: correctCount,
      total: totalItems,
      percentage: percentage,
      state: resultState,
    });
    console.log("results:", results);
  };

  const reset = () => {
    setInput("meanings");
    setLevel(0);
    setStoreState((prevState) => ({
      ...prevState,
      answers: [],
    }));
    setResults({
      correct: 0,
      total: 0,
      percentage: 0,
    });
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
