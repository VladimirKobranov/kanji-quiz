import React, {useContext} from "react";
import {Box, Button, Text, VStack} from "@chakra-ui/react";
import {LevelContext} from "./Main";
import style from "./ChooseLevel.module.css";
import styleMain from "./App.module.css";

function ChooseLevel() {
    const {buttonStatus, toggleButton} = useContext(LevelContext);

    return (
        <Box h="auto" textAlign="center" w='150px'>
            <Text className={styleMain.HeaderMain}>
                Choose levels
            </Text>
            <VStack bg="#E6E1E7" rounded='2px' h='auto' spacing='0'>
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