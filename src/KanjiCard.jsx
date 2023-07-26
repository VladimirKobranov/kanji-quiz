import React, {useState} from "react";
import {Box, Input, Text, VStack} from "@chakra-ui/react";
import style from "./css/KanjiCard.module.css";
import {useSelector} from "react-redux";

function KanjiCard(props) {
    const inputsFromRedux = useSelector((state) => state.inputs);
    const [color, setColor] = useState("#E6E1E7");
    // const [message, setMessage] = useState('');
    const [keyEnter, setKeyEnter] = useState(false);

    const handleChange = (event, index) => {
        const v = event.target.value
        if (!v) return
        // setMessage(v);
        let valid = props.validation(props.kanji, v);
        console.log('card is valid', valid)
        if (valid) {
            setColor('#014A77')
        } else {
            setColor('#AF282F')
        }
        console.log('index: ', index, inputsFromRedux[index])
        // props.callback(index);
    }
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setKeyEnter(true)
            const v = event.target.value;
            if (!v) return;
            // setMessage(v);
            let valid = props.validation(props.kanji, v);
            console.log('card is valid', valid);
            if (valid) {
                setColor('#014A77');
            } else {
                setColor('#AF282F');
            }
        }
    };

    // useEffect(() => {
    //     console.log(message); // Log the message whenever it changes
    // }, [message]);

    return (
        <VStack spacing="2px" w="100px" bg={color}>
            <Box h="100px" rounded="2px" className={style.CardKanji}>
                <Text color={props.textCol}>{props.kanji}</Text>
            </Box>
            <Box h="auto" rounded="2px" className={style.CardText}>
                <VStack spacing="2px">
                    {inputsFromRedux.map((inputValue, index) => (
                        <Input
                            index={props.index}
                            key={inputsFromRedux[index]}
                            placeholder={inputValue}
                            variant="filled"
                            className={style.CardText}
                            size="sm"
                            style={{width: "100px", height: "29px"}}
                            borderRadius="2px"
                            textAlign="center"
                            bg={color}
                            color={props.textCol}
                            _placeholder={{opacity: 0.2, color: "#000000"}}
                            focusBorderColor="#E6E1E7"
                            _hover={{backgroundColor: color}}
                            _focus={{backgroundColor: color}}
                            // onBlur={keyEnter? null : handleChange()}
                            onBlur={(event) => keyEnter ? null : (handleChange(event, index))}
                            onKeyDown={handleKeyDown}
                        />
                    ))}
                </VStack>
            </Box>
        </VStack>
    );
}

export default KanjiCard;