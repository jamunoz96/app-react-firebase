import { AppStateType } from "src/redux/types/AppStateType";
import { AuthType } from "src/redux/types/AuthType";
import { useSelector } from "react-redux";
import Loading from "src/components/Commons/Loading";
import FormRegister from "./FormRegister";
import { useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { getErrorFirebase } from "src/utils/getErrorFirebase";
import { AppDispatch } from "src/redux/utils/AppDispatch";
import { clearMessages } from "src/redux/actions/AuthActions";
import { Navigate } from "react-router-dom";

const Register = () => {
  const toast = useToast();
  const { isLoading, errorMessage, verificationSend } : AuthType = useSelector((state: AppStateType) => state.auth);
  
  useEffect(() => {
    if(errorMessage) {
      let message = getErrorFirebase(errorMessage);
      toast({
        title: "¡Upps.",
        description: message,
        status: "warning",
        duration: 6000,
        isClosable: true,
      })
      AppDispatch(clearMessages())
    }

    if(verificationSend) {
        toast({
          title: "Successful registration.",
          description: "We have sent an email to your email account to confirm the registration.",
          status: "info",
          duration: 6000,
          isClosable: true,
        })
        AppDispatch(clearMessages())
    }

  }, [errorMessage, verificationSend]);

  if(isLoading)
    return <Loading />
  else if(verificationSend)
    return <Navigate to="/auth/login" />
  else
    return <FormRegister />

};

export default React.memo(Register);
