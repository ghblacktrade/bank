import React, {FC} from 'react';
import {Alert, AlertDescription, AlertIcon, AlertTitle} from "@chakra-ui/react";

const SuccessAlert :FC= () => {
    return <Alert
    status='success'
    variant='sublte'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='full'
    >
<AlertIcon boxSize='40px' mr={0}/>
        <AlertTitle
        mt={4} mb={1} fontSize='lg'
        >
Money sent!
        </AlertTitle>
<AlertDescription maxWidth='sm'>
    Thanks for use application!
</AlertDescription>
    </Alert>
};

export default Alert;