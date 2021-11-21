import { useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    Box,
    Avatar,
    FormControl,
    InputRightElement,
    FormErrorMessage,
    Fade
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { CFaLock, CFaUserAlt, handleRegister, handleValidation, initialValues } from "./constants";
import { CustomLink } from "src/themes/CustomLink";


const FormRegister = () => {

    const [showPassword, setShowPassword] = useState(false);

    return <>
        <Fade in={true}>
            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                justifyContent="center"
                alignItems="center" >
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center" >

                    <Avatar bg="teal.500" />
                    <Heading color="teal.400">Sign Up</Heading>
                    <Box minW="md">

                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleRegister}
                            validationSchema={handleValidation} >
                            <Form>
                                <Stack
                                    spacing={4}
                                    p="1rem"
                                    boxShadow="md" >

                                    <Field name="email" >
                                        {({ field, form }: any) => (
                                            <FormControl isInvalid={form.errors.email && form.touched.email}>
                                                <InputGroup>
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<CFaUserAlt color="gray.300" />}
                                                    />
                                                    <Input {...field} id="email" type="email" placeholder="name" />
                                                </InputGroup>
                                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name="password" >
                                        {({ field, form }: any) => (
                                            <FormControl isInvalid={form.errors.password && form.touched.password}>
                                                <InputGroup>
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<CFaLock color="gray.300" />} />

                                                    <Input {...field} id="password" type={showPassword ? "text" : "password"} placeholder="password" />
                                                    <InputRightElement width="4.5rem">
                                                        <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                                                            {showPassword ? "Hide" : "Show"}
                                                        </Button>
                                                    </InputRightElement>
                                                </InputGroup>
                                                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>


                                    <Button
                                        type="submit"
                                        variant="solid"
                                        colorScheme="teal"
                                        width="full" >
                                        Register
                                    </Button>

                                </Stack>
                            </Form>
                        </Formik>
                    </Box>
                </Stack>

                <Box>
                    <CustomLink ms="4" color="teal.500" to="/auth/login">
                        Sign In
                    </CustomLink>
                </Box>

            </Flex>
        </Fade>
    </>;
};

export default FormRegister;
