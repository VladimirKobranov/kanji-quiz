import React, {useState} from "react";
import {Box} from "@chakra-ui/react";
import style from './MyButton.module.css';

function MyButton(props) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

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
        <Box className={style.Button} onClick={handleClick} bg={isActive ? "#014A77" : "#E6E1E7"}
             color={isActive ? '#fcfcfd' : '#868686'} _hover={handleHover()}>
            {props.name}
        </Box>
    );
}

export default MyButton;
