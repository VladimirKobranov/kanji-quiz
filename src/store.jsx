import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
  const [level, setLevel] = useState(5);
  const [input, setInput] = useState("meanings");
  const [results, setResults] = useState(0);

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
    setResults(1); // just check
    console.log("results function");
  };

  const reset = () => {
    setInput("meanings");
    setLevel(5);
    setStoreState((prevState) => ({
      ...prevState,
      answers: [],
    }));
    console.log("reset function");
  };

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
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
