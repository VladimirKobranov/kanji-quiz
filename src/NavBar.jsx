import React from "react";
import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Heading } from '@chakra-ui/react'

function NavBar() {
  return (
    <Center>
      <Box width="150px" >
        <Center w='180px'  textAlign="center">
        <Box bg="blue" mt="25px">
          <Text fontSize="30px"  fontWeight="bold">漢字 クイズ</Text>
          <Text fontSize="20px">KANJI QUIZ</Text>
        </Box>  
        </Center>

        <Box bg="tomato" h="170" mt="40px" textAlign="center">
          <Heading fontSize='20px'>CHOOSE LEVEL</Heading>
          <Button
            background="#E6E1E7"
            _hover={{ background: "#014A77" }}
            mb="0"
            h="30px"
            w="140px"
            rounded="2px"
          >
            N5
          </Button>
          <Button
            background="#E6E1E7"
            _hover={{ background: "#014A77" }}
            mb="0"
            h="30px"
            w="140px"
            rounded="2px"
          >
            N4
          </Button>
          <Button
            background="#E6E1E7"
            _hover={{ background: "#014A77" }}
            mb="0"
            h="30px"
            w="140px"
            rounded="2px"
          >
            N3
          </Button>
          <Button
            background="#E6E1E7"
            _hover={{ background: "#014A77" }}
            mb="0"
            h="30px"
            w="140px"
            rounded="2px"
          >
            N2
          </Button>
          <Button
            background="#E6E1E7"
            _hover={{ background: "#014A77" }}
            mb="0"
            h="30px"
            w="140px"
            rounded="2px"
          >
            N1
          </Button>
        </Box>

        <Box bg="yellow.200" h="130" mt="20px" textAlign="center">
        <Heading fontSize='20px'>CHOOSE INPUTS</Heading>
          <Stack direction="row">
            <Checkbox defaultChecked h="28px" w="28px"></Checkbox>
            <Text> ROMAJI</Text>
          </Stack>
          <Stack direction="row">
            <Checkbox defaultChecked h="28px" w="28px"></Checkbox>
            <Text> FURIGANA</Text>
          </Stack>
          <Stack direction="row">
            <Checkbox defaultChecked w="28px"></Checkbox>
            <Text> MEANING</Text>
          </Stack>
        </Box>

        <Box bg="blue" h="65" width="190" color="white" textAlign="center">
          <Button background="#AF282F" mb="0" h="30px" w="140px" rounded="2px">
          <Heading fontSize='20px'>RESET</Heading>
          </Button>
          <Button background="#014A77" mb="0" h="30px" w="140px" rounded="2px">
          <Heading fontSize='20px'>RESULT</Heading>
          </Button>
        </Box>
 
        <Box bg="violet" h="35" mt="20px" textAlign="center">
            <Heading fontSize='20px'>
                ACCURACY
            </Heading>
            <Stack direction="row"  >
                <Text > 45/100 </Text> 
                <Text> 45% </Text>
            </Stack>
        </Box>
      </Box>
    </Center>
  );
}

export default NavBar;
