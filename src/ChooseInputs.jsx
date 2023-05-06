import React, {useContext} from "react";
import {Box, Button, Text} from "@chakra-ui/react";
import style from "./ChooseLevel.module.css";
import {InputsContext} from "./Main";
import styleMain from "./App.module.css";

function ChooseInputs() {

    const {buttonStatus, toggleButton} = useContext(InputsContext);

    return (
        <Box h="auto" textAlign="center" w='150px'>
            <Text className={styleMain.HeaderMain}>
                Choose inputs
            </Text>
            <Box bg="#E6E1E7" rounded='2px'>
                {buttonStatus.map((button, index) => (
                    <Button
                        w='150px'
                        h='30px'
                        className={style.Button}
                        variant='ghost'
                        _hover={{}}
                        borderRadius='2px'
                        key={index}
                        fontSize='23px'
                        background={button.active ? "#014A77" : "#e6e1e7"}
                        color={button.active ? "#FDFFFE" : "#868686"}
                        onClick={() => toggleButton(index)}
                    >
                        {button.name}
                    </Button>
                ))}
            </Box>
        </Box>
    )
}

export default ChooseInputs;