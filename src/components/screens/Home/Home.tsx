import React, {FC} from 'react';
import {Box, Flex, Heading, IconButton, Text, useBoolean, useDisclosure} from "@chakra-ui/react";
import Balance from "./Balance";
import {ArrowRightIcon} from "@chakra-ui/icons";
import TransferModal from "./TransferModal";


export const user = {
    name: 'John Smith',
    balance: 8640,
    cardNumber: 2456_7644_2990_5394
}

const Home: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Box bg='black' p='6'>
            <Box>
                <Text fontSize='xl' color='whiteAlpha.500'>Good morning!</Text>
                <Heading fontSize='2xl'>{user.name}</Heading>
            </Box>
            <Balance/>
            <IconButton
                m='auto'
                display='block'
                mt={8}
                variant='outline'
                colorScheme='white'
                aria-label='transfer'
                fontSize='18px'
                icon={<ArrowRightIcon/>}
                onClick={onOpen}
            />

             <TransferModal isOpen={isOpen} onClose={onClose} />
        </Box>
    );
};

export default Home;