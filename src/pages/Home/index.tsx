import { Drawer, DrawerContent, useDisclosure, DrawerCloseButton, Stack } from "@chakra-ui/react";
import Logout from "src/components/Commons/Logout";
import FormProduct from "src/components/Product/Form";
import ListProduct from "src/components/Product/List";

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return <>
        <Stack pb="40" >
            <ListProduct onOpen={onOpen} />
            <Drawer closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} size={"md"} >
                <DrawerContent>
                    <DrawerCloseButton />
                    <FormProduct onClose={onClose} />
                </DrawerContent>
            </Drawer>
        </Stack>
        <Logout />
    </>
}

export default Home