import React, {FC} from 'react';
import {
    Button, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, Stack
} from "@chakra-ui/react";
import {user} from "./Home";
import {formatCardNumber} from "../../../utls/formatCardNumber";


interface ITransferModal {
    isOpen : boolean
    onClose: () => void
}


const TransferModal :FC<ITransferModal> = ({isOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size='full'>
            <ModalOverlay />
            <ModalContent bg='#171717'>
                <ModalHeader>Transfer your money</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack>
                        <Input  placeholder='From card' size='md' defaultValue={formatCardNumber(user.cardNumber)} disabled/>
                        <Input  placeholder='To card' size='md' focusBorderColor='green'/>
                    </Stack>
                </ModalBody>

                <ModalFooter>
                    <Button variant='outline' mr='3'>Sec ondary Action</Button>
                    <Button colorScheme='green' onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default TransferModal;