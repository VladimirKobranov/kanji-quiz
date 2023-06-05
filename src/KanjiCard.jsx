import React, {useContext, useState} from "react";
import {Box, Input, Text, VStack} from "@chakra-ui/react";
import style from "./KanjiCard.module.css";
import {InputsContext} from "./Main";

function KanjiCard(props) {
    const {buttonStatus} = useContext(InputsContext);
    const [enteredValues, setEnteredValues] = useState({});
    const [color, setColor] = useState("#E6E1E7");

    const handleInputChange = (event, index) => {
        const fieldName = buttonStatus[index].name;
        const value = event.target.value;

        setEnteredValues((prevEnteredValues) => ({
            ...prevEnteredValues,
            [fieldName]: value,
        }));
    };

    const handleInputKeyDown = (event, index) => {
        if (event.key === "Enter") {
            const fieldName = buttonStatus[index].name;
            const enteredValue = event.target.value;

            setEnteredValues((prevEnteredValues) => ({
                ...prevEnteredValues,
                [fieldName]: enteredValue,
            }));

            updateColor(enteredValue);
        }
    };

    const handleInputBlur = (event, index) => {
        const fieldName = buttonStatus[index].name;
        const enteredValue = event.target.value;

        if (enteredValue !== "") {
            console.log(`Entered value: ${enteredValue}`);
        }

        setEnteredValues((prevEnteredValues) => ({
            ...prevEnteredValues,
            [fieldName]: enteredValue,
        }));

        updateColor(enteredValue);
    };

    const updateColor = (enteredValue) => {
        if (enteredValue === "true") {
            setColor("#014A77");
        } else {
            setColor("#AF282F");
        }
    };

    const renderInput = (index) => {
        if (buttonStatus[index].active) {
            const fieldName = buttonStatus[index].name;
            const enteredValue = enteredValues[fieldName] || "";

            return (
                <React.Fragment key={index}>
                    <Input
                        value={enteredValue}
                        onChange={(event) => handleInputChange(event, index)}
                        onKeyDown={(event) => handleInputKeyDown(event, index)}
                        onBlur={(event) => handleInputBlur(event, index)}
                        variant="filled"
                        className={style.CardText}
                        placeholder={fieldName}
                        size="sm"
                        style={{width: "100px", height: "29px"}}
                        borderRadius="2px"
                        textAlign="center"
                        bg={color}
                        color={props.textCol}
                        _placeholder={{opacity: 1.0, color: "#D9D7DC"}}
                        focusBorderColor="#E6E1E7"
                        _hover={{backgroundColor: color}}
                        _focus={{backgroundColor: props.color}}
                    />
                </React.Fragment>
            );
        }
        return null;
    };

    return (
        <VStack spacing="2px">
            <Box bg={color} w="100px" h="100px" rounded="2px" className={style.CardKanji}>
                <Text color={props.textCol}>{props.kanji}</Text>
            </Box>
            <Box w="100px" h="auto" rounded="2px" className={style.CardText}>
                <VStack spacing="2px">
                    {buttonStatus.map((button, index) => (
                        <React.Fragment key={index}>{renderInput(index)}</React.Fragment>
                    ))}
                </VStack>
            </Box>
        </VStack>
    );
}

export default KanjiCard;
