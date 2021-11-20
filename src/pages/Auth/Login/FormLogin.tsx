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
  HStack,
  Text,
  Fade
} from "@chakra-ui/react";
import { FaTwitter, FaGoogle } from "react-icons/fa";
import { Formik, Field, Form } from "formik";
import { CFaLock, CFaUserAlt, handleValidation } from "./constants";

import { loginWithEmail, loginWithGoogle, loginWithTwitter } from "src/redux/actions/AuthActions";
import { AppDispatch } from "src/redux/utils/AppDispatch";
import { AuthLogin } from "src/types/AuthLogin";
import { CustomLink } from "src/themes/Custo Link";


const FormLogin = () => {

  const initialValues = { email: "ronald.cifuentes2020@gmail.com", password: "jjjjjjjjj" };
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginWithEmail = (formValue: AuthLogin) => AppDispatch(loginWithEmail(formValue));
  const handleLoginWithGoogle = () => AppDispatch(loginWithGoogle());
  const handleLoginWithTwitter = () => AppDispatch(loginWithTwitter());

  return (
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
          <Heading color="teal.400">Sign In</Heading>

          <Box minW="md" >

            <Formik
              initialValues={initialValues}
              onSubmit={handleLoginWithEmail}
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
                    Login
                  </Button>

                  <HStack>
                    <Text width="60%">
                      Enter with:
                    </Text>
                    <Button type="button" onClick={handleLoginWithGoogle} width="full" leftIcon={<FaGoogle />}>
                      Google
                    </Button>
                    <Button type="button" onClick={handleLoginWithTwitter} width="full" colorScheme="twitter" leftIcon={<FaTwitter />}>
                      Twitter
                    </Button>
                  </HStack>

                </Stack>
              </Form>
            </Formik>
          </Box>
        </Stack>

        <Box mt="10">
          New to us?
          <CustomLink ms="4" color="teal.500" href="#" to="/auth/register">
            Sign Up
          </CustomLink>
        </Box>

      </Flex>
    </Fade>
  );
};

export default FormLogin;
