import React, {FC} from 'react';
import {
    Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement, InputRightElement,
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
import {SubmitHandler, useForm, Controller} from "react-hook-form";
import {ITransferData} from "./transferInterface";
import {CheckIcon} from "@chakra-ui/icons";


interface ITransferModal {
    isOpen: boolean
    onClose: () => void
}

const TransferModal: FC<ITransferModal> = ({isOpen, onClose}) => {
    const {
        handleSubmit,
        register,
        control,

        formState: {errors, isSubmitting},
    } = useForm<ITransferData>({
        mode: 'onChange', defaultValues: {
            amount: 0,
        }
    })

    const onSubmit: SubmitHandler<ITransferData> = data => {
    }


    return (
        <Modal isOpen={isOpen}
               onClose={onClose}
               size='full'
        motionPreset='slideInBottom'
        >
            <ModalOverlay/>
            <ModalContent bg='#171717'>
                <ModalHeader>Transfer your money</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack>
                            <Input placeholder='From card' size='md' defaultValue={formatCardNumber(user.cardNumber)}
                                   disabled/>
                            <Controller
                                control={control}
                                name='card'
                                render={({field: {onChange, name, value}}) => (
                                    <FormControl>
                                        <Input
                                            id={name}
                                            size='md'
                                            placeholder='To card'
                                            value={formatCardNumber(value)}
                                            onChange={e => onChange(e.target.value)}
                                        />
                                        <FormErrorMessage> {errors.card?.message} </FormErrorMessage>
                                    </FormControl>
                                )}
                                rules={{
                                    required: 'This is required',
                                    minLength: {
                                        value: 16, message: 'Minimum length should be 16'
                                    }
                                }}
                            />

                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color='gray'
                                    fontSize=''
                                    children='$'

                                />
                                <Input placeholder='Enter amount'    {...register('amount', {
                                    required: 'This is required',
                                })} />
                            </InputGroup>
                            <Button variant='outline' colorScheme='green'>Send money</Button>
                        </Stack>

                    </form>
                </ModalBody>

                <ModalFooter>

                    <Button variant='outline' onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default TransferModal;