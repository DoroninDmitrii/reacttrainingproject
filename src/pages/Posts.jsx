import PostList from '../components/PostList'
import { useEffect, useMemo, useState } from "react";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import Mybutton from "../components/UI/button/Mybutton";
import PastService from "../API/PostServise";
import { getPageCount, getPagesArray } from "../components/utils/pages";
import Pagination from "../components/Pagination";
import Loader from '../components/UI/Loader/Loader';

function Posts() {
  const initialState = [
    { id: 1, title: "a", body: "Description" },
    { id: 2, title: "w", body: "Description" },
    { id: 3, title: "c", body: "Description" },
  ];

  const [posts, setPosts] = useState(initialState);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  // modalewindow
  const [visible, setVisible] = useState(false);
  // loading
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  // pagination
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    } else {
      return posts;
    }
  }, [selectedSort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((item) =>
      item.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout(async () => {
      const response = await PastService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
      setIsPostsLoading(false);
    }, 1000);
  }

  let pagesArray = getPagesArray(totalPages);

  const changePage = (item) => {
    setPage(item);
  };

  return (
    <div className="App">
      <Mybutton style={{ marginTop: 30 }} onClick={() => setVisible(true)}>
        Create user
      </Mybutton>

      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px" }} />
      <PostFilter
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        sortPosts={sortPosts}
        selectedSort={selectedSort}
      />

      {isPostsLoading ? (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}><Loader/></div>
      ) : sortedAndSearchPosts.length !== 0 ? (
        <PostList removePost={deletePost} posts={sortedAndSearchPosts} />
      ) : (
        <h1 style={{ textAlign: "center" }}>There are not posts!</h1>
      )}

      <Pagination pagesArray={pagesArray} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;
