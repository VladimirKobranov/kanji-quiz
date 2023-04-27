import React from "react";
import {Text} from "@chakra-ui/react";
import style from './Footer.module.css';
const d = new Date();
let year = d.getFullYear();

function Footer() {
    return (
        <Text className={style.footer}>
            copyright {year}
        </Text>
    )
}

export default Footer;