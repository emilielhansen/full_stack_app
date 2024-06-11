import './App.css'
import PostCreate from './components/PostCreate'
import PostCard from './components/PostCard'

function App() {

  return (
    <>
      <PostCreate onAddPost={addPost} />
      <PostCard posts={posts} onDeletePost={deletePost} onUpdatePost={updatePost}/>
    </>
    
  )
}

export default App
