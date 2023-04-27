import React from "react";
import {Center, Text, VStack} from "@chakra-ui/react";
import styles from "./App.module.css";
import Footer from "./Footer";

function Main() {
    return (
        <Center bg='#AF282F' h='auto' color='white'>
            <VStack>
                <Text className={styles.AppTextMain}>
                    Text english
                </Text>
                <Text className={styles.AppTextMain}>
                    Roboto
                </Text>
                <Text className={styles.AppTexJap}>
                    日本語テキスト
                </Text>
                <Text className={styles.AppTexJap}>
                    noto sans jp
                </Text>
                <Text className={styles.AppTexJap}>
                    NEW TEXT
                </Text>
                <Footer/>
            </VStack>
        </Center>
    )
}

export default Main