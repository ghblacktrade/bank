import React, {FC} from 'react';
import {Box, Flex, Heading, Text} from "@chakra-ui/react";
import Balance from "./Balance";


export const user = {
    name: 'John Smith',
    balance: 8640
}

const Home: FC = () => {
    return (
        <Box bg='black' p='6'>
            <Box>
                <Text fontSize='xl' color='whiteAlpha.500'>Good morning!</Text>
                <Heading fontSize='2xl'>{user.name}</Heading>
            </Box>
            <Balance/>

        </Box>
    );
};

export default Home;