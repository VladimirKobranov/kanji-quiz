import React, {useContext} from "react";
import {Box, Button, VStack} from "@chakra-ui/react";
import {ButtonContext} from "./Main";
import style from "./ChooseLevel.module.css";

function ChooseLevel() {
    const {buttonStatus, toggleButton} = useContext(ButtonContext);

    return (
        <Box bg="#E6E1E7" rounded='2px' h='auto'>
            <VStack
                spacing='0'>
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
            </VStack>
        </Box>
    )
}

export default ChooseLevel;