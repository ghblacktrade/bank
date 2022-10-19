import React, {FC} from 'react';
import {Box, Flex, Heading, Text} from "@chakra-ui/react";


const user = {
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


            <Box pos='relative' width={'50%'} m='auto' mt='4' >
            <Flex justifyContent='center'
                  alignItems='center'
                  direction='column'
            >

                <Heading fontSize='5xl'>$ {user.balance}</Heading>
                <Text fontSize='xl' color='whiteAlpha.500' mt='4'>Balance</Text>

            </Flex>
            </Box>

        </Box>
    );
};

export default Home;