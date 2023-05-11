import React, {useContext} from "react";
import {Box, Input, Text, VStack} from "@chakra-ui/react";
import style from "./KanjiCard.module.css";
import {InputsContext} from "./Main";

function KanjiCard(props) {
    const {buttonStatus} = useContext(InputsContext);

    const renderInput = (index) => {
        if (buttonStatus[index].active) {
            return (
                <Input
                    variant="filled"
                    className={style.CardText}
                    placeholder={buttonStatus[index].name}
                    size="sm"
                    style={{width: "100px", height: "29px"}}
                    borderRadius="2px"
                    textAlign="center"
                    bg={props.color}
                    color={props.textCol}
                    _placeholder={{opacity: 1.0, color: "#D9D7DC"}}
                    focusBorderColor="#E6E1E7"
                    _hover={{backgroundColor: props.color}}
                    _focus={{backgroundColor: props.color}}
                />
            );
        }
        return null;
    };

    return (
        <VStack spacing="2px">
            <Box bg={props.color} w="100px" h="100px" rounded="2px" className={style.CardKanji}>
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
