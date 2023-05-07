import React from "react";
import {Box, Input, Text, VStack} from "@chakra-ui/react";
import style from "./KanjiCard.module.css";

function KanjiCard(props) {
    return (
        <VStack spacing='2px'>
            <Box bg={props.color} w='100px' h='100px' rounded='2px' className={style.CardKanji}>
                <Text color={props.textCol}>
                    漢
                </Text>
            </Box>
            <Box w='100px' h='auto' rounded='2px' className={style.CardText}>
                <VStack spacing='2px'>
                    <Input variant='filled'
                           className={style.CardText}
                           placeholder='romaji'
                        //                    value={name}
                           size="sm" style={{width: "100px", height: "29px"}}
                           borderRadius='2px'
                           textAlign='center'
                           bg={props.color}
                           color={props.textCol}
                           _placeholder={{opacity: 1.0, color: '#D9D7DC'}}
                           focusBorderColor='#E6E1E7'
                           _hover={{backgroundColor: props.color}}
                           _focus={{backgroundColor: props.color}}
                        //                    onChange={event => setName(event.target.value)}
                    />
                    <Input variant='filled'
                           className={style.CardText}
                           placeholder='furigana'
                        //                    value={name}
                           size="sm" style={{width: "100px", height: "29px"}}
                           borderRadius='2px'
                           textAlign='center'
                           bg={props.color}
                           color={props.textCol}
                           _placeholder={{opacity: 1.0, color: '#D9D7DC'}}
                           focusBorderColor='#E6E1E7'
                           _hover={{backgroundColor: props.color}}
                           _focus={{backgroundColor: props.color}}
                        //                    onChange={event => setName(event.target.value)}
                    />
                    <Input variant='filled'
                           className={style.CardText}
                           placeholder='meaning'
                        //                    value={name}
                           size="sm" style={{width: "100px", height: "29px"}}
                           borderRadius='2px'
                           textAlign='center'
                           bg={props.color}
                           color={props.textCol}
                           _placeholder={{opacity: 1.0, color: '#D9D7DC'}}
                           focusBorderColor='#E6E1E7'
                           _hover={{backgroundColor: props.color}}
                           _focus={{backgroundColor: props.color}}
                        //                    onChange={event => setName(event.target.value)}
                    />
                </VStack>
            </Box>
        </VStack>
    )
}

export default KanjiCard;