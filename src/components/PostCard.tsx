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

  return (
    <Center>
      <ul style={{ listStyleType: 'none' }}>
        {posts.map((post) => (
          <li key={post._id}>
            <Box m={3} width={800} backgroundColor='#3D3D3D' p={5} borderRadius={5}>
              <Flex>
                <Avatar boxSize='40px' src='https://via.placeholder.com/' />
                <Box ml={2}>
                  {isMyUser ? (
                    <Heading as='h2' fontSize={25} color="white">{user?.fullname}</Heading>
                  ) : (
                    <Flex>
                      <Heading as='h2' fontSize={25} color="white">{post._id}</Heading>
                      <HiDotsHorizontal
                        color='#FBC027'
                        cursor='pointer'
                        onClick={() => handleEditClick(post)}
                      />
                    </Flex>
                  )}
                  <Text color='grey'>{post.date}</Text>
                </Box>
              </Flex>
              <Box borderBottom={1} borderBottomColor='#3D3D3D'>
                <Text py={5} fontSize={20} color="white">{post.content}</Text>
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
              onClick={() => onDeletePost(currentPostId)}
            >Delete Bee</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default PostCard;