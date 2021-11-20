import { Stack, Image, Fade } from "@chakra-ui/react"

const FileCover = ({ files }: { files: any[] }) => {

    if (!files.length) {
        return <Stack direction="row" mt="5" justifyContent="center" alignItems="center">
            <Image
                boxSize="120px"
                objectFit="cover"
                src="https://via.placeholder.com/120"
                alt="product" />
            <Image
                boxSize="120px"
                objectFit="cover"
                src="https://via.placeholder.com/120"
                alt="product" />
            <Image
                boxSize="120px"
                objectFit="cover"
                src="https://via.placeholder.com/120"
                alt="product" />
        </Stack>
    }

    return <Stack direction="row" mt="5" justifyContent="center" alignItems="center">
        {
            files.map((file: any, index: number) => {
                return <Fade in={true} key={index}>
                    <Image
                        boxSize="120px"
                        objectFit="cover"
                        src={file.cover}
                        alt="product" />
                </Fade>
            })
        }
    </Stack>
}

export default FileCover