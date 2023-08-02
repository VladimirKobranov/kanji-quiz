import './css/App.module.css'
import {ChakraProvider} from '@chakra-ui/react';
import Main from "./Main";

function App() {
    return (
        <ChakraProvider>
            <Main/>
        </ChakraProvider>
    );
}

export default App;