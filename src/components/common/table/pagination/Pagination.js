import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
// import "./pagination.scss";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="flex items-start justify-center max-w-2xl mx-auto py-4">
      <ul
        className={classnames("flex", {
          [className]: className,
        })}
      >
        <li
          className={classnames(
            "select-none cursor-pointer mx-1 px-1 py-2 bg-gray-200 text-gray-500 hover:text-gray-700 rounded-lg"
          )}
          onClick={currentPage === 1 ? currentPage : onPrevious}
        >
          <p className="flex items-center font-bold">
            <span className="mx-1">Prev</span>
          </p>
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }

          return (
            <li
              className={classnames(
                "select-none cursor-pointer mx-1 px-3 py-2 bg-gray-200 text-gray-500  rounded-lg",
                {
                  selected: pageNumber === currentPage,
                },
                currentPage === pageNumber
                  ? "bg-gray-700 text-gray-200"
                  : "page-item"
              )}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={classnames(
            "select-none cursor-pointer mx-1 px-3 py-2 bg-gray-200 text-gray-500 hover:text-gray-700 rounded-lg"
          )}
          onClick={currentPage === lastPage ? currentPage : onNext}
        >
          <p className="flex items-center font-bold">
            <span className="mx-1">Next</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
