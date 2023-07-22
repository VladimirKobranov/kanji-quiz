import React, {useEffect, useState} from "react";
import {Box} from "@chakra-ui/react";
import style from './css/MyButton.module.css';
import {addInput, removeInput} from "./store/store";
import {useDispatch, useSelector} from "react-redux";

function ButtonLevels(props) {
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();
    const inputsFromRedux = useSelector((state) => state.inputs);

    useEffect(() => {
        if (inputsFromRedux.length === 0) {
            setIsActive(false);
        }
    }, [inputsFromRedux]);

    function handleClick(index) {
        setIsActive(!isActive);
        if (isActive === false) {
            dispatch(addInput(index));
        } else {
            dispatch(removeInput(index));
        }
    }

    const handleHover = () => {
        if (isActive) {
            return (
                {color: '#fcfcfd', background: '#1b5c84'}
            )
        } else {
            return (
                {color: '#01111f', background: '#d9d7dc'}
            )
        }
    }
    return (
        <Box className={style.Button} onClick={() => handleClick(props.index)} bg={isActive ? "#014A77" : "#E6E1E7"}
             color={isActive ? '#fcfcfd' : '#868686'} _hover={handleHover()}>
            {props.name}
        </Box>
    );
}

export default ButtonLevels;
