import React from "react";
import Myinput from "./UI/input/Myinput";
import Myselect from "./UI/select/Myselect";

const PostFilter = ({ setSearchQuery, searchQuery, sortPosts, selectedSort }) => {

  return (
    <div>
      <Myinput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Find..."
      />
      <Myselect
        selectedValue={selectedSort}
        onChangeSortPosts={sortPosts}
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
