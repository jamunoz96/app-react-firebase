import { Drawer, DrawerContent, useDisclosure, DrawerCloseButton, DrawerOverlay } from "@chakra-ui/react";
import Logout from "src/components/Commons/Logout";
import FormProduct from "src/components/Product/Form";
import ListProduct from "src/components/Product/List";

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return <>
        <Logout />
        <ListProduct onOpen={onOpen} />
        <Drawer closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} size={"md"} >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <FormProduct onClose={onClose} />
            </DrawerContent>
        </Drawer>
    </>
}

export default Home