import React from "react";
import {Center, Text} from "@chakra-ui/react";
import style from "./Footer.module.css";

const d = new Date();
let year = d.getFullYear();

function Footer() {
    return (
        <Center>
            <Text className={style.footer}>copyright {year}</Text>
        </Center>
    );
}

export default Footer;