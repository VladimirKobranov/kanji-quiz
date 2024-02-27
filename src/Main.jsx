import { Suspense, useContext, useEffect } from "react";
import { StoreContext } from "./store";
import data from "./data.js";
import KanjiCard from "./KanjiCard";

export default function Main() {
  const { storeState, setStoreState } = useContext(StoreContext);
  const { results, makeResults } = useContext(StoreContext);
  const { reset } = useContext(StoreContext);
  const { level, setLevel } = useContext(StoreContext);
  const { input, setInput } = useContext(StoreContext);

  const kanjiData = Object.keys(data).filter(
    (key) => data[key]["jlpt_new"] === storeState.jlpt,
  );

  useEffect(() => {
    const newData = kanjiData.map((key) => ({
      kanji: key,
      meanings: data[key].meanings,
      readings_on: data[key].readings_on,
      readings_kun: data[key].readings_kun,
    }));

    setStoreState((prevState) => ({
      ...prevState,
      data: newData,
    }));
  }, [storeState.jlpt]);

  function handleResults() {
    makeResults();
  }

  function handleReset() {
    reset();
  }

  function handleSelectLevel(index) {
    return () => {
      setLevel(index);
    };
  }
  function handleSelectInput(type) {
    return () => {
      setInput(type);
    };
  }

  function handleInputChange(kanjiIndex, newVal) {
    setStoreState((prevState) => {
      const updatedAnswers = [...prevState.answers];
      updatedAnswers[kanjiIndex] = newVal;
      return {
        ...prevState,
        answers: updatedAnswers,
      };
    });
  }

  console.log(storeState);

  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <button onClick={handleResults}>results</button>
        <div>results: {results}</div>
        <button onClick={handleReset}>reset</button>

        <div>level: {level}</div>
        <button onClick={handleSelectLevel(5)}>level 5</button>
        <button onClick={handleSelectLevel(4)}>level 4</button>
        <button onClick={handleSelectLevel(3)}>level 3</button>
        <button onClick={handleSelectLevel(2)}>level 2</button>
        <button onClick={handleSelectLevel(1)}>level 1</button>

        <div>input: {input}</div>
        <button onClick={handleSelectInput("meanings")}>meanings</button>
        <button onClick={handleSelectInput("readings_on")}>readings_on</button>
        <button onClick={handleSelectInput("readings_kun")}>
          readings_kun
        </button>

        {storeState.data.map((kanjiData, index) => (
          <KanjiCard
            key={index}
            index={index + 1}
            kanji={kanjiData.kanji}
            meanings={kanjiData.meanings}
            readings_on={kanjiData.readings_on}
            readings_kun={kanjiData.readings_kun}
            onInputChange={(newValue) => handleInputChange(index, newValue)}
          />
        ))}
      </Suspense>
    </div>
  );
}
