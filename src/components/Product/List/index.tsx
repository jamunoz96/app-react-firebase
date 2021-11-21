import { Table, Tbody, Td, Th, Thead, Tr, Box, Heading, Skeleton, Button, Text } from "@chakra-ui/react"
import { useProduct } from "src/redux/hooks/useProduct";
import { Product } from "src/types/Product";
import { PropsListProduct } from "src/types/PropsListProduct";

const ListProduct = ({ onOpen }: PropsListProduct) => {
    const { isLoading, errorMessage, products } = useProduct();
    return <>
        <Box mt="5%" pl="20" pr="20" >
            <Heading mb="5" color="teal.500">
                Product List
                <Button m={4} onClick={onOpen} > Add Product </Button>
            </Heading>
            <Table variant="simple">
                <Thead >
                    <Tr bg="gray.200" >
                        <Th>Name</Th>
                        <Th>Description</Th>
                        <Th isNumeric>Price $</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {isLoading ?
                        <Tr>
                            <Td p="0" colSpan={3}>
                                <Skeleton mt="2" height="20px" />
                                <Skeleton mt="2" height="20px" />
                                <Skeleton mt="2" height="20px" />
                            </Td>
                        </Tr> : null
                    }

                    {!isLoading && !errorMessage && products.length ?
                        products.map((product: Product) => {
                            return <Tr key={product.id}>
                                <Td>{product.name}</Td>
                                <Td>{product.description}</Td>
                                <Td isNumeric>{product.price}</Td>
                            </Tr>
                        }) : null
                    }

                    {!isLoading && !errorMessage && !products.length ?
                        <Tr>
                            <Td p="5" colSpan={3}>
                                <Text align="center">0 Products</Text>
                            </Td>
                        </Tr> : null
                    }
                </Tbody>
            </Table>
        </Box>
    </>
}

export default ListProduct