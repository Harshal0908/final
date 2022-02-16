import React, { useEffect, useState } from "react";
import _ from "lodash";
import MockData from "../data.json";

//pagesize
const pageSize = 10;

const TableData = (props) => {
  const data = MockData;
  // const [data, setData] = useState(MockData);

  //order by which sorting is done
  const [order, setOrder] = useState("ASC");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data);

  //data on specific page
  const [paginatedData, setPaginatedData] = useState(
    _(filteredData).slice(0).take(pageSize).value()
  );

  //tempdata is data after applying the filter on actual data
  useEffect(() => {
    const tempData = data.filter((val) => {
      if (props.searchTerm === "") {
        return val;
      } else if (
        val.first_name.toLowerCase().includes(props.searchTerm.toLowerCase())
      ) {
        return val;
      } else if (
        val.last_name.toLowerCase().includes(props.searchTerm.toLowerCase())
      ) {
        return val;
      } else if (
        val.email.toLowerCase().includes(props.searchTerm.toLowerCase())
      ) {
        return val;
      }
      return null;
    });
    console.log(tempData);
    setFilteredData(tempData);
  }, [data, props.searchTerm]);

  //pagecount=stores dynamic page count
  const pageCount = filteredData
    ? Math.ceil(filteredData.length / pageSize)
    : 0;

  //total no of pages
  const pages = _.range(1, pageCount + 1);

  //Pagination function to get data entries of specific page
  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(filteredData)
      .slice(startIndex)
      .take(pageSize)
      .value();
    setPaginatedData(paginatedPost);
  };

  //sorting function to sort the column after clicking on column head
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...filteredData].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setFilteredData(sorted);
      setOrder("DSC");
    } else if (order === "DSC") {
      const sorted = [...filteredData].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setFilteredData(sorted);
      setOrder("ASC");
    }
    pages.map((page) => pagination(page));
    // pagination(currentPage);
  };

  return (
    <div className="container">
      <table className="w-full  font-mono">
        <thead>
          <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th className="px-4 py-3">No.</th>
            <th
              className="px-4 py-3"
              onClick={() => {
                sorting("first_name");
              }}
            >
              First Name
            </th>
            <th
              className="px-4 py-3"
              onClick={() => {
                sorting("last_name");
              }}
            >
              Last Name
            </th>
            <th
              className="px-4 py-3"
              onClick={() => {
                sorting("email");
              }}
            >
              Email
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {paginatedData
            .filter((val) => {
              if (props.searchTerm === "") {
                return val;
              } else if (
                val.first_name
                  .toLowerCase()
                  .includes(props.searchTerm.toLowerCase())
              ) {
                return val;
              } else if (
                val.last_name
                  .toLowerCase()
                  .includes(props.searchTerm.toLowerCase())
              ) {
                return val;
              } else if (
                val.email.toLowerCase().includes(props.searchTerm.toLowerCase())
              ) {
                return val;
              }
              return null;
            })
            .map((user, i) => {
              return (
                <tr className="text-gray-700" key={user.id}>
                  <td className="px-4 py-3 text-xs font-semibold border">
                    {user.id}
                  </td>
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold text-black">
                          {user.first_name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold text-black">
                          {user.last_name}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-xs border">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {" "}
                      {user.email}{" "}
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="flex items-start justify-center max-w-2xl mx-auto py-4">
        <ul className="flex">
          <li
            onClick={() =>
              pagination(currentPage === 1 ? currentPage : currentPage - 1)
            }
            className="select-none cursor-pointer mx-1 px-3 py-2 bg-gray-200 text-gray-500 hover:text-gray-700 rounded-lg"
          >
            <p className="flex items-center font-bold">
              <span className="mx-1">Prev</span>
            </p>
          </li>
          {pages.map((page) => (
            <li
              onClick={() => pagination(page)}
              className={`select-none cursor-pointer mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-gray-200 rounded-lg ${
                currentPage === page ? "bg-gray-700 text-gray-200" : "page-item"
              }`}
            >
              <p className="font-bold">{page}</p>
            </li>
          ))}

          <li
            onClick={() =>
              pagination(
                currentPage === pageCount ? currentPage : currentPage + 1
              )
            }
            className="select-none cursor-pointer mx-1 px-3 py-2 bg-gray-200 text-gray-500 hover:text-gray-700 rounded-lg"
          >
            <p className="flex items-center font-bold">
              <span className="mx-1">Next</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TableData;
