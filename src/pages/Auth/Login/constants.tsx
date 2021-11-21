import { chakra } from "@chakra-ui/react";
import * as Yup from "yup";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { AuthForm } from "src/types/AuthForm";
import { AppDispatch } from "src/redux/utils/AppDispatch";
import { loginWithEmail, loginWithGoogle, loginWithTwitter } from "src/redux/actions/AuthActions";

export const CFaUserAlt = chakra(FaUserAlt);
export const CFaLock = chakra(FaLock);
export const handleValidation = () => {
  return Yup.object().shape({
    email: Yup.string().required("This field is required!").email(),
    password: Yup.string().required("This field is required!").min(7),
  });
};

export const initialValues = { email: "ronald.cifuentes2020@gmail.com", password: "jjjjjjjjj" };
export const handleLoginWithEmail = (formValue: AuthForm) => AppDispatch(loginWithEmail(formValue));
export const handleLoginWithGoogle = () => AppDispatch(loginWithGoogle());
export const handleLoginWithTwitter = () => AppDispatch(loginWithTwitter());