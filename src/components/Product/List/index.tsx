import {
    Table, Tbody, Td, Th, Thead, Tr, Box,
    Heading, Skeleton, Button, Text, Stack, Image
} from "@chakra-ui/react"
import { FaRegLaughSquint } from "react-icons/fa";
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
                        <Th>Images</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {isLoading ?
                        <Tr>
                            <Td p="0" colSpan={4}>
                                <Skeleton mt="2" height="80px" />
                                <Skeleton mt="5" height="80px" />
                                <Skeleton mt="5" height="80px" />
                            </Td>
                        </Tr> : null
                    }

                    {!isLoading && !errorMessage && products.length ?
                        products.map((product: Product) => {
                            return <Tr key={product.id}>
                                <Td>{product.name}</Td>
                                <Td>{product.description}</Td>
                                <Td isNumeric>{product.price}</Td>
                                <Td w="20%">
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        {!product.images?.length ?
                                            <>
                                                <Skeleton ml="4" width="50px" height="50px" />
                                                <Skeleton ml="4" width="50px" height="50px" />
                                                <Skeleton ml="4" width="50px" height="50px" />
                                            </> :
                                            product.images.map((image: any, index: number) => {
                                                return <Image
                                                            ml="4"
                                                            key={index}
                                                            boxSize="50px"
                                                            objectFit="cover"
                                                            src={image}
                                                            alt="product" />
                                            })

                                        }
                                    </Box>
                                </Td>
                            </Tr>
                        }) : null
                    }

                    {!isLoading && !errorMessage && !products.length ?
                        <Tr>
                            <Td p="5" colSpan={4}>
                                <Stack align="center">
                                    <FaRegLaughSquint color="teal" size="3em" />
                                    <Text >No products, add one</Text>
                                </Stack>
                            </Td>
                        </Tr> : null
                    }
                </Tbody>
            </Table>
        </Box>
    </>
}

export default ListProduct