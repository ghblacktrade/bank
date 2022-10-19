import React, {FC} from 'react';
import {
    Button, FormControl, FormErrorMessage, FormLabel, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, Stack
} from "@chakra-ui/react";
import {user} from "../Home";
import {formatCardNumber} from "../../../../utls/formatCardNumber";
import {SubmitHandler, useForm} from "react-hook-form";
import {ITransferData} from "./transferInterface";


interface ITransferModal {
    isOpen: boolean
    onClose: () => void
}


const TransferModal: FC<ITransferModal> = ({isOpen, onClose}) => {


    const {
        handleSubmit,
        register,
        formState: {errors, isSubmitting},
    } = useForm<ITransferData>({mode: 'onChange'})

    const onSubmit: SubmitHandler<ITransferData> = data => { }


    return (
        <Modal isOpen={isOpen} onClose={onClose} size='full'>
            <ModalOverlay/>
            <ModalContent bg='#171717'>
                <ModalHeader>Transfer your money</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack>
                            <Input placeholder='From card' size='md' defaultValue={formatCardNumber(user.cardNumber)}
                                   disabled/>

                            <FormControl isInvalid={!!errors.card?.message}>
                                <Input
                                    id='name'
                                    size='md'
                                    placeholder='To card'
                                    {...register('card', {
                                        required: 'This is required',
                                        minLength: {value: 16, message: 'Minimum length should be 16'},
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.card?.message}
                                </FormErrorMessage>
                            </FormControl>
                            <Button variant='outline' mr='3'>Send money</Button>
                        </Stack>

                    </form>
                </ModalBody>

                <ModalFooter>

                    <Button colorScheme='green' onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default TransferModal;