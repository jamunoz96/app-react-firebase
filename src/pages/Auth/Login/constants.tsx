import { chakra } from "@chakra-ui/react";
import * as Yup from "yup";
import { FaUserAlt, FaLock } from "react-icons/fa";

export const CFaUserAlt = chakra(FaUserAlt);
export const CFaLock = chakra(FaLock);
export const handleValidation = () => {
  return Yup.object().shape({
    email: Yup.string().required("This field is required!").email(),
    password: Yup.string().required("This field is required!").min(7),
  });
};