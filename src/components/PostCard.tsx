// Postcard component
import { useState } from 'react';
import { Heading, Box, Input, Button, Flex, Avatar, Text, Center, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { AiFillLike } from 'react-icons/ai';
import Post from '../models/post';
import User from '../models/user';
import sanitizeHtml from 'sanitize-html';
import { format } from 'date-fns';
import { da } from 'date-fns/locale';

interface Props {
  posts: Post[];
  onDeletePost: (id: string) => void;
  onUpdatePost: (id: string, content: string) => void;
  user: User | null;
}

const PostCard = ({ posts, onDeletePost, onUpdatePost, user }: Props) => {
  const [isMyUser, setIsMyUser] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editContent, setEditContent] = useState("");
  const [currentPostId, setCurrentPostId] = useState("");

  const handleEditClick = (post: Post) => {
    setEditContent(post.content);
    setCurrentPostId(post._id);
    onOpen();
  };

  const handleUpdatePost = () => {
    onUpdatePost(currentPostId, editContent);
    onClose();
  };

  const handleDeletePost = () => {
    onDeletePost(currentPostId);
    onClose();
  };

  return (
    <Center>
      <ul style={{ listStyleType: 'none' }}>
        {posts.map((post) => (
          <li key={post._id}>
            <Box maxWidth={'800px'} m={3} backgroundColor='gray.500' p={5} borderRadius={5} position='relative'>
              <Flex>
                <Box>
                  {isMyUser ? (
                    <Heading 
                      as='h2' 
                      fontSize={{ base: '13', md: '20', lg:'25'}} 
                      color="white"
                      sx={{ wordBreak: 'break-word' }}
                    >
                      {user?.fullname}
                    </Heading>
                  ) : (
                    <Flex>
                      <Heading 
                        as='h2' 
                        fontSize={{ base: '13', md: '20', lg:'25'}}
                        color="white"
                        maxWidth={{ base: '125px', sm: '200px', md: '500px'}}
                        sx={{ wordBreak: 'break-word' }}
                      >
                        {user?.username}
                      </Heading>
                      <HiDotsHorizontal
                        color='yellow.900'
                        cursor='pointer'
                        fontSize='24px'
                        onClick={() => handleEditClick(post)}
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                        }}
                      />
                    </Flex>
                  )}
                  <Text 
                    color='grey'
                    fontSize={{ base: '12', md: '20'}}
                  >
                    {format(new Date(post.date), 'HH:mm - dd. MMM yyyy', { locale: da })}
                  </Text>
                </Box>
              </Flex>
              <Box borderBottom={1} borderBottomColor='gray.500'>
                {/* Sanitize post content */}
                <Text 
                  py={5} 
                  fontSize={{ base: '15', md: '20', lg:'23'}} 
                  color="white" 
                  sx={{ wordBreak: 'break-word' }}
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }}
                />
              </Box>
              <Box>
                {post.like}
                <AiFillLike cursor='pointer' />
              </Box>
            </Box>
          </li>
        ))}
      </ul>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Wanna edit or delete?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              variant='white'
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              variant="yellowSmall"
              mr={3}
              onClick={handleUpdatePost}
            >
              Edit Bee
            </Button>
            <Button
              variant="redSmall"
              onClick={handleDeletePost}
            >
              Delete Bee
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default PostCard;