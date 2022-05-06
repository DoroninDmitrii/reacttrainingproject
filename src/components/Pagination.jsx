import React from "react";

const Pagination = ({ pagesArray, page, changePage }) => {

  return (
    <div className="page__wrapper">
      {pagesArray.map((item) => (
        <span
          onClick={() => changePage(item)}
          key={item}
          className={page === item ? "page page__current" : "page"}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
