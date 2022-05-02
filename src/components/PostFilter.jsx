import React from "react";
import Myinput from "./UI/input/Myinput";
import Myselect from "./UI/select/Myselect";

const PostFilter = ({ setSearchQuery, sortPosts, searchQuery, selectedSort }) => {

  return (
    <div>
      <Myinput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Find..."
      />
      <Myselect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sort"
        options={[
          { value: "title", name: "Name" },
          { value: "body", name: "Description" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
