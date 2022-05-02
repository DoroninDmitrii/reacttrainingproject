import "./styles/App.css"
import PostList from "./components/PostList";
import { useEffect, useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import Mybutton from "./components/UI/button/Mybutton";
import PastService from "./API/PostServise";

function App() {

  const initialState = [
    { id: 1, title: 'a', body: 'Description' },
    { id: 2, title: 'w', body: 'Description' },
    { id: 3, title: 'c', body: 'Description' }
  ]

  const [posts, setPosts] = useState(initialState);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetchPosts()
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setVisible(false)
  }

  const deletePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    } else {
      return posts;
    }
  }, [selectedSort, posts])

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(item => item.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  async function fetchPosts() {
    const post = await PastService.getAll();
    setPosts(post);
  }

  return (
    <div className="App">
      <Mybutton style={{ marginTop: 30 }} onClick={() => setVisible(true)}>Create user</Mybutton>
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px" }} />
      <PostFilter setSearchQuery={setSearchQuery} sortPosts={sortPosts} searchQuery={searchQuery} selectedSort={selectedSort} />

      {sortedAndSearchPosts.length !== 0 ? <PostList removePost={deletePost} posts={sortedAndSearchPosts} /> : <h1 style={{ textAlign: "center" }}>There are not posts!</h1>}
    </div>
  );
}

export default App;
