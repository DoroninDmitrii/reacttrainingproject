function App() {

  const initialState = [
    { id: 1, title: 'a', body: 'Description' },
    { id: 2, title: 'w', body: 'Description' },
    { id: 3, title: 'c', body: 'Description' }
  ]

  const [posts, setPosts] = useState(initialState);

  const [selectedSort, setSelectedSort] = useState('');

  const [searchQuery, setSearchQuery] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  // first variant
  // function getSortedPosts() {
  //   if (selectedSort) {
  //     return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
  //   } else {
  //     return posts;
  //   }
  // }

  const sortedPosts = useMemo(() => {
    // console.log('hey');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    } else {
      return posts;
    }
  }, [selectedSort, posts])

  // first variant
  // const sortPosts = (sort) => {
  //   setSelectedSort(sort)
  //     setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  // }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px" }} />
      <div>
        <Myinput value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Find..." />
        <Myselect value={selectedSort} onChange={sortPosts} defaultValue="Sort" options={[
          { value: "title", name: "Name" },
          { value: "body", name: "Description" }
        ]} />
      </div>
      {posts.length !== 0 ? <PostList removePost={deletePost} posts={sortedPosts} /> : <h1 style={{ textAlign: "center" }}>There are not posts!</h1>}
    </div>
  );
}

export default App;
