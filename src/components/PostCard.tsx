import { useState } from 'react';
import { Heading, Box, Input, Button, Flex, Avatar, Text, Center, Modal, Grid, GridItem, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { AiFillLike } from 'react-icons/ai';

const PostCard = () => {
  // depends on user
      const [isMyUser, setIsMyUser] = useState(false);
  // Open modal
      const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Center>
        <Box m={3} width={800} backgroundColor='#3D3D3D' p={5} borderRadius={5}>
            <Flex>
                <Avatar 
                    boxSize='40px' 
                    src='https://via.placeholder.com/32' 
                    /> 
                <Box ml={2}>
            {/* Hvis det er ens eget opslag - viser den kun navn - ellers kan man follow og edit */}
                {isMyUser ? (
                <Heading 
                    as='h2'
                    fontSize={25}
                    fontFamily = 'Chakra Petch'
                    color="white"
                    >Emilie Hansen</Heading>
                    ) : (
                    <>
                    <Flex>
                    <Heading 
                    as='h2'
                    fontSize={25}
                    fontFamily = 'Chakra Petch'
                    color="white"
                    >Emilie Hansen</Heading>
                    <Button
                    color='#FBC027'
                    ml={3}
                    background='transparent'
                    _hover={{
                        textDecoration: 'none',
                        background: 'transparent',
                      }}
                      padding='0'
                      height='auto'
                    >
                        Follow
                    </Button>
                    <Flex>
                      <HiDotsHorizontal
                      color='#FBC027'
                      cursor='pointer'
                      onClick={onOpen}
                    ></HiDotsHorizontal>
                    </Flex>
                    
                  
                  {/* Edit modal */}
                    <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                              <ModalHeader>Wanna edit or delete?</ModalHeader>
                              <ModalCloseButton />
                              <ModalBody>
                                <Input backgroundColor={'white'} color={'black'}></Input>
                              </ModalBody>
                              <ModalFooter>
                                <Button borderRadius='20px' backgroundColor='#FBC027' colorScheme='yellow' mr={3}>
                                  Edit Bee
                                </Button>
                                <Button borderRadius='20px' backgroundColor='#FB4027' colorScheme='red' >Delete Bee</Button>
                              </ModalFooter>
                            </ModalContent>
                          </Modal>
                    </Flex>
                    </>
                    )}

                {/* Post text */}
                    <Text color='grey'>
                        Date
                    </Text>
                </Box>
            </Flex>
            <Box borderBottom={1} borderBottomColor='#3D3D3D'>
              <Text py={5} fontSize={20} color="white">Jeg elsker Berta</Text>
            </Box>
            <Box>
              {/* Like icon */}
              <AiFillLike
              cursor='pointer'>
              </AiFillLike>
            </Box>
        </Box>
    </Center>
    </>
  );
};


export default PostCard;