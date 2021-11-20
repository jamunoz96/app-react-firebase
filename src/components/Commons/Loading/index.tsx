import { Fade, Flex, Stack, Heading, CircularProgress } from "@chakra-ui/react"

const Loading = ({ title }: { title?: string }) => {
    return <>
        <Fade in={true}>
            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                justifyContent="center"
                alignItems="center" >

                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center" >

                    <CircularProgress isIndeterminate color="yellow.300" />
                    {title && <Heading color="teal.400">{title}</Heading>}
                    {!title && <Heading color="teal.400">Loading...</Heading>}

                </Stack>

            </Flex>
        </Fade>
    </>
}

export default Loading