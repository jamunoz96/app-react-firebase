
import { ChangeEvent, ReactNode, useRef } from 'react'
import { InputGroup, Input, useToast, Box, Button, Icon } from '@chakra-ui/react'
import { FiFile } from 'react-icons/fi';

const FileUpload = ({ setImages, children }: { setImages: Function, children: ReactNode }) => {

  const toast = useToast();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => inputRef.current?.click();

  const validateFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || !files.length) return;
    if (files.length > 3) {
      return toast({
        title: "¡Upps.",
        description: "You can only upload 3 images.",
        status: "warning",
        duration: 6000,
        isClosable: true,
      })
    };

    let images = []
    for (const file of Array.from(files)) {
      const fsMb = file.size / (1024 * 1024)
      const MAX_FILE_SIZE = 10
      if (fsMb > MAX_FILE_SIZE) {
        return toast({
          title: "¡Upps.",
          description: "Max image size 10mb.",
          status: "warning",
          duration: 6000,
          isClosable: true,
        })
      }
      images.push({ cover: URL.createObjectURL(file), name: file.name })
    }
    setImages(images)
  }

  return <>
    <Box bg="gray.100" borderRadius="10" minW="md"
          justifyContent="center"
          alignItems="center" mt="5" p="5" border="1px solid" borderStyle="dashed">
      
      <InputGroup onClick={handleClick}>
        <Input
          type='file'
          accept={'image/*'}
          multiple
          hidden
          onChange={validateFiles}
          ref={inputRef} />
          <Button width="full" leftIcon={<Icon as={FiFile} />}>
              Upload
          </Button>
      </InputGroup>

      {children}

    </Box>
  </>
}

export default FileUpload;