import { Box } from "@chakra-ui/react";
import { FaPowerOff } from "react-icons/fa";
import { logout } from "src/redux/actions/AuthActions";
import { AppDispatch } from "src/redux/utils/AppDispatch";
import { getInfoAuth } from "src/utils/getInfoAuth";

const Logout = () => {
    const auth = getInfoAuth();
    return <>
        <Box align="center" borderRadius="50px" w="60" p="2" bg="gray.400" position="fixed" top="5%" left="5%">
            <b> ¡Welcome { auth.displayName }</b>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" borderRadius="50px" w="14" bg="red.400" h="14" onClick={() => AppDispatch(logout())} cursor="pointer" position="fixed" top="4%" bottom="96%" right="10" >
            <FaPowerOff size="2em" />
        </Box>
    </>;
}

export default Logout