import React, {FC} from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";


const user = {
    name: 'John Smith',
    balance: 8640
}

const Home: FC = () => {
    return (
        <Box bg='black' p='6'>
            <Box>
                <Text fontSize='xl'>Good morning!</Text>
                <Heading fontSize='2xl'>{user.name}</Heading>
            </Box>

            <Heading fontSize='5xl'>{user.balance}</Heading>
            <Text fontSize='xl' color='whiteAlpha.400'>Balance</Text>

        </Box>
    );
};

export default Home;