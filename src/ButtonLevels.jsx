import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import style from "./css/MyButton.module.css";
import { addLevel, removeLevel } from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import { isBrowser } from "react-device-detect";

function ButtonLevels(props) {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const levelsFromRedux = useSelector((state) => state.levels);

  useEffect(() => {
    if (levelsFromRedux.length === 0) {
      setIsActive(false);
    }
  }, [levelsFromRedux]);

  function handleClick(index) {
    setIsActive(!isActive);
    if (!isActive) {
      dispatch(addLevel(index));
    } else {
      dispatch(removeLevel(index));
    }
  }

  const handleHover = () => {
    if (isActive) {
      return { color: "#fcfcfd", background: "#1b5c84" };
    } else {
      return { color: "#01111f", background: "#d9d7dc" };
    }
  };

  return (
    <Box
      className={isBrowser ? style.Button : style.ButtonMobile}
      onClick={() => handleClick(props.index)}
      bg={isActive ? "#014A77" : "#E6E1E7"}
      color={isActive ? "#fcfcfd" : "#868686"}
      _hover={handleHover()}
    >
      {props.name}
    </Box>
  );
}

export default ButtonLevels;
