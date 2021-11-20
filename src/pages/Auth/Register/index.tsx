import { AppStateType } from "src/redux/types/AppStateType";
import { AuthType } from "src/redux/types/AuthType";
import { useSelector } from "react-redux";
import Loading from "src/components/Commons/Loading";
import FormRegister from "./FormRegister";
import { useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { getErrorFirebase } from "src/utils/getErrorFirebase";

const Register = () => {
  const toast = useToast();
  const { isLoading, errorMessage } : AuthType = useSelector((state: AppStateType) => state.auth);
  
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
    }
  }, [errorMessage]);

  if(isLoading) return <Loading />
  return <FormRegister />

};

export default React.memo(Register);
