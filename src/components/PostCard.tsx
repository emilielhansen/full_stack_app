import { useState, useEffect } from 'react';
import { Heading, Box, Input, Button, Flex, Avatar, Text, Center, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { AiFillLike } from 'react-icons/ai';
import Post from '../models/post';
import User from '../models/user';
  interface Props {
    posts: Post[];
    onDeletePost: (id: string) => void;
    onUpdatePost: (id: string, content: string) => void;
    user: User | null;
  }

const PostCard = ({posts, onDeletePost, onUpdatePost, user }: Props) => {
  // depends on user
      const [isMyUser, setIsMyUser] = useState(false);
  // Open modal
      const { isOpen, onOpen, onClose } = useDisclosure();
      
      // useEffect(() => {
      //   setIsMyUser(user !== null);
      // }, [user]);

  return (
    <>
    <Center>
      <ul style={{ listStyleType: 'none' }}>
        {posts.map((post) => (
          <li key={post._id}>
            <Box m={3} backgroundColor='gray.500' p={5} borderRadius={5} maxWidth={800} position='relative'>
              <Flex>
                  <Avatar 
                      boxSize='40px' 
                      src='https://via.placeholder.com/' 
                      /> 
                  <Box ml={2}>
              {/* Hvis det er ens eget opslag - viser den kun navn - ellers kan man follow og edit */}
                  {isMyUser ? (
                  <Heading 
                      as='h2'
                      fontSize={{ base: '13', md: '20', lg:'25'}}
                      color="white"
                      sx={{ wordBreak: 'break-word' }}
                      >{user?.fullname}</Heading>
                      ) : (
                      <Flex>
                      <Heading 
                      as='h2'
                      fontSize={{ base: '13', md: '20', lg:'25'}}
                      color="white"
                      maxWidth={{ base: '125px', sm: '200px', md: '500px'}}
                      sx={{ wordBreak: 'break-word' }}
                      >{post._id}</Heading>
                      <Button
                      type='submit'
                      color='yellow.900'
                      fontSize={{ base: '12', md: '20'}}
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
                        color='yellow.900'
                        cursor='pointer'
                        fontSize='24px'
                        onClick={onOpen}
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',}}

                      ></HiDotsHorizontal>
                      </Flex>
                      
                    {/* Edit modal */}
                      <Modal isOpen={isOpen} onClose={onClose}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>Wanna edit or delete?</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                  <Input variant='white' ></Input>
                                </ModalBody>
                                <ModalFooter>
                                  {/* Edit button */}
                                  <Button
                                  variant="yellowSmall" 
                                  mr={3}
                                  onClick={() => onUpdatePost(post._id, post.content)}
                                  >
                                    Edit Bee
                                  </Button>
                                  {/* Delete button */}
                                  <Button 
                                  variant="redSmall" 
                                  onClick={() => onDeletePost(post._id)}
                                  >Delete Bee</Button>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>
                      </Flex>
                      )}

                  {/* Post text */}
                      <Text color='grey'
                      fontSize={{ base: '12', md: '20'}}>
                      {post.date}
                      </Text>
                  </Box>
              </Flex>
              <Box borderBottom={1} borderBottomColor='gray.500'>
                <Text py={5} fontSize={{ base: '15', md: '20', lg:'23'}} color="white" sx={{ wordBreak: 'break-word' }}>{post.content}</Text>
              </Box>
              <Box>
                {/* Like icon */}
                {post.like}
                <AiFillLike
                cursor='pointer'>
                </AiFillLike>
              </Box>
          </Box>
          </li>
        ))}  
      </ul>      
    </Center>
    </>
  );
};


export default PostCard;