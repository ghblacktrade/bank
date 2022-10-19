import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./components/screens/Home";
import {ChakraProvider} from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <Home/>
        </ChakraProvider>
    </React.StrictMode>
)
