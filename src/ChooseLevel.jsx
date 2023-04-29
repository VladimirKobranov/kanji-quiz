import React from "react";
import {Box, Button, Text} from "@chakra-ui/react";

function ChooseLevel() {
    return (
        <Box h="auto" textAlign="center" w='150px'>
            <Text fontSize='20px'>
                CHOOSE LEVEL
            </Text>
            <Box bg="tomato" rounded='2px'>
                <Button
                    colorScheme='teal' variant='solid'
                    bg="#E6E1E7"
                    _hover={{background: "#014A77"}}
                    h="30px"
                    w="100%"
                    rounded="2px"
                >
                    N5
                </Button>
                <Button
                    bg="#E6E1E7"
                    _hover={{background: "#014A77"}}
                    h="30px"
                    w="100%"
                    rounded="2px"
                >
                    N4
                </Button>
                <Button
                    bg="#E6E1E7"
                    _hover={{background: "#014A77"}}
                    h="30px"
                    w="100%"
                    rounded="2px"
                >
                    N3
                </Button>
                <Button
                    bg="#E6E1E7"
                    _hover={{background: "#014A77"}}
                    h="30px"
                    w="100%"
                    rounded="2px"
                >
                    N2
                </Button>
                <Button
                    bg="#E6E1E7"
                    _hover={{background: "#014A77"}}
                    h="30px"
                    w="100%"
                    rounded="2px"
                >
                    N1
                </Button>
            </Box>
        </Box>
    )
}

export default ChooseLevel;