// Postcard component
import { useState } from 'react';
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

const PostCard = ({ posts, onDeletePost, onUpdatePost, user }: Props) => {
  const [isMyUser, setIsMyUser] = useState(false); // State to check if the user is the post owner
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook to manage Modal state
  const [editContent, setEditContent] = useState(""); // State to store the content being edited
  const [currentPostId, setCurrentPostId] = useState(""); // State to store the ID of the post being edited

  // Function to handle edit button click
  const handleEditClick = (post: Post) => {
    setEditContent(post.content);
    setCurrentPostId(post._id);
    onOpen();
  };

  // Function to handle post update
  const handleUpdatePost = () => {
    onUpdatePost(currentPostId, editContent);
    onClose();
  };

  // Function to handle post deletion
  const handleDeletePost = () => {
    onDeletePost(currentPostId);
    onClose();
  };

  return (
    <Center>
      <ul style={{ listStyleType: 'none' }}>
        {posts.map((post) => (
          <li key={post._id}>
            {/* Post container */}
            <Box m={3} backgroundColor='gray.500' p={5} borderRadius={5} maxWidth={800} position='relative'>
              <Flex>
                <Avatar boxSize='40px' src='https://via.placeholder.com/' />
                <Box ml={2}>
                  {isMyUser ? (
                    // Display user's full name if it's their post
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
                      {/* Display post ID (this should probably be the username or full name) */}
                      <Heading 
                        as='h2' 
                        fontSize={{ base: '13', md: '20', lg:'25'}}
                        color="white"
                        maxWidth={{ base: '125px', sm: '200px', md: '500px'}}
                        sx={{ wordBreak: 'break-word' }}
                      >
                        {post._id}
                      </Heading>
                      {/* Edit button */}
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
                  {/* Post date */}
                  <Text 
                    color='grey'
                    fontSize={{ base: '12', md: '20'}}
                  >
                    {post.date}
                  </Text>
                </Box>
              </Flex>
              {/* Post content */}
              <Box borderBottom={1} borderBottomColor='gray.500'>
                <Text 
                  py={5} 
                  fontSize={{ base: '15', md: '20', lg:'23'}} 
                  color="white" 
                  sx={{ wordBreak: 'break-word' }}
                >
                  {post.content}
                </Text>
              </Box>
              {/* Like button and count */}
              <Box>
                {post.like}
                <AiFillLike cursor='pointer' />
              </Box>
            </Box>
          </li>
        ))}
      </ul>

      {/* Modal for editing and deleting post */}
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