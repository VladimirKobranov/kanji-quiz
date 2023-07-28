import React from "react";
import {Box, Grid, GridItem, HStack, Text, VStack} from "@chakra-ui/react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ContentField from "./ContentField";
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect';
import Icon from '@mdi/react';
import { mdiHammerWrench } from '@mdi/js';


function Main() {
    return (
        <Box>
            <BrowserView>
                <Grid
                    templateAreas={`"nav main" "footer footer" `}
                    gridTemplateRows="1fr 38px"
                    gridTemplateColumns="213px 1fr"
                    height="100%"
                    color="blackAlpha"
                    margin="10px"
                >
                    <GridItem area="nav" width="213px" height="94vh">
                        <NavBar/>
                    </GridItem>
                    <GridItem area="main" gridRow="span 1">
                        <ContentField/>
                    </GridItem>
                    <GridItem pl="2" area="footer">
                        <Footer/>
                    </GridItem>
                </Grid>
            </BrowserView>
            <MobileView>
                <VStack mb='65vh'>
                    <Text align='center' mt='50%' fontSize='25px'>
                        Under construction
                    </Text>
                    <Icon path={mdiHammerWrench} size={2} />
                </VStack>
                <Footer/>
            </MobileView>
        </Box>
    );
}


export default Main;
