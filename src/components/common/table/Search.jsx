import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = (props) => {
  return (
    <div class="flex justify-end items-center pb-4 sm:px-6 lg:px-8">
      <div class="relative">
        <input
          type="text"
          class="h-11 w-60 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
          placeholder="Search details.."
          onChange={(e) => {
            props.setSearchTerm(e.target.value);
          }}
        />
        <div class="absolute top-4 right-3">
          <FiSearch className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
          {/* <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
