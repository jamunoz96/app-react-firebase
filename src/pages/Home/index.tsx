import { Drawer, DrawerContent, useDisclosure, Button, DrawerCloseButton } from "@chakra-ui/react";
import Logout from "src/components/Commons/Logout";
import FormProduct from "src/components/Product/Form";
import ListProduct from "src/components/Product/List";

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return <>
        <Button m={4} onClick={onOpen} > Add Product </Button>
        <ListProduct />
        <Drawer onClose={onClose} isOpen={isOpen} size={"md"} >
            <DrawerContent>
                <DrawerCloseButton />
                <FormProduct />
            </DrawerContent>
        </Drawer>
        <Logout />
    </>
}

export default Home