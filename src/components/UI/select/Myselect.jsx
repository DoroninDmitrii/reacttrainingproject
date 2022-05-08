import React from "react";

const Myselect = ({ options, defaultValue, selectedValue, onChangeSortPosts }) => {
  return (
    <select value={selectedValue} onChange={(e) => onChangeSortPosts(e.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Myselect;
