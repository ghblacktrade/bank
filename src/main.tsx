import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./components/screens/Home/Home";
import {ChakraProvider, extendTheme, ThemeConfig} from "@chakra-ui/react";
import Theme from "./components/providers/Theme";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }

    }
});



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <Theme>
                <QueryClientProvider client={queryClient}>

            <Home/>
                </QueryClientProvider>
            </Theme>
        </ChakraProvider>
    </React.StrictMode>
)
