import {
    Heading,
    Input,
    Button,
    Stack,
    Box,
    useToast,
    Avatar,
    FormControl,
    Textarea,
    Text,
    FormErrorMessage
} from "@chakra-ui/react";
import { handleValidation, initialValues } from "./constants";
import { Formik, Field, Form } from "formik";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { ProductType } from "src/redux/types/ProductType";
import { useSelector } from "react-redux";
import { AppStateType } from "src/redux/types/AppStateType";
import { useEffect, useState } from "react";
import { AppDispatch } from "src/redux/utils/AppDispatch";
import { saveProduct } from "src/redux/actions/ProductActions";
import FileUpload from "../Files/FileUpload";
import FileCover from "../Files/FileCover";
import { Product } from "src/types/Product";
import { PropsFormProduct } from "src/types/PropsFormProduct";


const FormProduct = ({ onClose } : PropsFormProduct) => {

    const toast = useToast();
    const { isLoading, errorMessage, saved }: ProductType = useSelector((state: AppStateType) => state.product);
    const [images, setImages] = useState([]);
    const handleSave = (product: Product) => {
        if(images.length !== 3){
            toast({
                title: "¡Upps.",
                description: "You must load the 3 images to continue.",
                status: "warning",
                duration: 6000,
                isClosable: true,
            })
        } else {
            AppDispatch(saveProduct(product, images));
        }
    }

    useEffect(() => {
        if (errorMessage && saved === "N") {
            toast({
                title: "¡Upps.",
                description: "There was a problem saving the product.",
                status: "warning",
                duration: 6000,
                isClosable: true,
            })
        }

        if(saved === "Y" && !isLoading) {
            onClose();
            toast({
                title: "Saved Product.",
                description: "Successful process.",
                status: "success",
                duration: 6000,
                isClosable: true,
            })
        }

    }, [errorMessage, saved, isLoading, onClose, toast]);

    return <>
            <Stack
                mb="2"
                mt="10%"
                justifyContent="center"
                alignItems="center" >

                <Avatar bg="teal.500" icon={<PlusSquareIcon boxSize="7" color="white" />} />
                <Heading color="teal.400">New Product</Heading>
                <Box minW="md">

                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSave}
                        validationSchema={handleValidation} >

                        {({ setValues }) => (

                            <Form>

                                <Stack
                                    spacing={4}
                                    p="1rem"
                                    boxShadow="md" >

                                    <Field name="name" >
                                        {({ field, form }: any) => (
                                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                                <Input disabled={isLoading} {...field} id="name" type="text" placeholder="Name" />
                                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name="description" >
                                        {({ field, form }: any) => (
                                            <FormControl isInvalid={form.errors.description && form.touched.description}>
                                                <Textarea disabled={isLoading} {...field} id="description" placeholder="Description" />
                                                <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name="price" >
                                        {({ field, form }: any) => (
                                            <FormControl isInvalid={form.errors.price && form.touched.price}>
                                                <Input disabled={isLoading} {...field} id="price" type="number" placeholder="Price" />
                                                <FormErrorMessage>{form.errors.price}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name="price" >
                                        {({ form }: any) => (
                                            <Text color="red.400">{form.errors.images}</Text>
                                        )}
                                    </Field>

                                    <Button
                                        type="submit"
                                        variant="solid"
                                        colorScheme="teal"
                                        isLoading={isLoading}
                                        width="full" >
                                        Save
                                    </Button>

                                    <Button
                                        type="button"
                                        onClick={() => {
                                            setValues(initialValues);
                                            setImages([])
                                        }}
                                        disabled={isLoading}
                                        width="full" >
                                        Reset
                                    </Button>

                                </Stack>

                                <FileUpload setImages={setImages} >
                                    <FileCover files={images} />
                                </FileUpload>

                            </Form>
                        )}
                    </Formik>
                </Box>
            </Stack>
    </>
}

export default FormProduct