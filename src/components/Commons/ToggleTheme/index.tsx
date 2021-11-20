import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Fade, Button, useColorMode } from "@chakra-ui/react";

const ToggleTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    if(colorMode === "light") {
        return <>
            <Button onClick={toggleColorMode} cursor="pointer" display="flex" justifyContent="center" alignItems="center" flexDirection="column" borderRadius="100" bg="black" colorScheme="white" height="120px" width="120px" position="fixed" top="88%" right="-3" >
                <MoonIcon boxSize={8} /> Toggle Dark
            </Button>
        </>
    }

    return <>
        <Button onClick={toggleColorMode} cursor="pointer" display="flex" justifyContent="center" alignItems="center" flexDirection="column" borderRadius="100" bg="white" colorScheme="black" height="120px" width="120px" position="fixed" top="88%" left="-3" >
            <SunIcon boxSize={8} />  Toggle Light
        </Button>
    </>
}

export default ToggleTheme