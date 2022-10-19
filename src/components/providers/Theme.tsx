import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useColorMode} from "@chakra-ui/react";

const Theme :FC<PropsWithChildren> = ({children}) => {

    const {setColorMode} = useColorMode()

    useEffect(() => {
        setColorMode('dark')
    }, [])


    return <>{children}</>

};

export default Theme;