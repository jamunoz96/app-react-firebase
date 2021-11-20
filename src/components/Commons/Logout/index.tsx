import { Box } from "@chakra-ui/react";
import { FaPowerOff } from "react-icons/fa";
import { logout } from "src/redux/actions/AuthActions";
import { AppDispatch } from "src/redux/utils/AppDispatch";

const Logout = () => {
    return <>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" borderRadius="50px" w="14" bg="red.400" h="14" onClick={() => AppDispatch(logout())} cursor="pointer" position="fixed" top="4%" bottom="96%" right="10" >
            <FaPowerOff size="2em" />
        </Box>
    </>;
}

export default Logout