import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./components/screens/Home";
import {ChakraProvider, extendTheme, ThemeConfig} from "@chakra-ui/react";
import Theme from "./components/providers/Theme";



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <Theme>

            <Home/>
            </Theme>
        </ChakraProvider>
    </React.StrictMode>
)
