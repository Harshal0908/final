import React, { useEffect, useState } from "react";
import _ from "lodash";
import { usePagination, DOTS } from "./pagination/usePagination";
import EditData from "./EditData";
import Axios from "axios";

//pagesize
const pageSize = 10;

const InventoryTableData = ({ searchTerm, title, data }) => {
  const [totalCount, setTotalCount] = useState(data.length);
  // const [data, setData] = useState(MockData);

  //order by which sorting is done
  // const [order, setOrder] = useState("ASC");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [inventoryList,setInventoryList] = useState([]);

  //data on specific page
  const [paginatedData, setPaginatedData] = useState(
    _(filteredData).slice(0).take(pageSize).value()
  );

  //tempdata is data after applying the filter on actual data
  useEffect(() => {
    const tempData = data.filter(
      (val) =>
        val.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.medicine.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(tempData);
    setTotalCount(tempData.length);
    setPaginatedData(_(tempData).slice(0).take(pageSize).value());
  }, [data, searchTerm]);

  useEffect(()=>{
    Axios.get('http://localhost:3001/get/inventory').then((response)=>{
        //console.log(response.data);
        setInventoryList(response.data);
    })
  }) 
  //pagecount=stores dynamic page count
  const pageCount = filteredData
    ? Math.ceil(filteredData.length / pageSize)
    : 0;

  //total no of pages
  // const pages = _.range(1, pageCount + 1);

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
  // const sorting = (col) => {
  //   if (order === "ASC") {
  //     const sorted = [...filteredData].sort((a, b) =>
  //       a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
  //     );
  //     setFilteredData(sorted);
  //     setOrder("DSC");
  //   } else if (order === "DSC") {
  //     const sorted = [...filteredData].sort((a, b) =>
  //       a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
  //     );
  //     setFilteredData(sorted);
  //     setOrder("ASC");
  //   }
  //   pages.map((page) => pagination(page));
  //   // pagination(currentPage);
  // };
  const siblingCount = 1;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  return (
    <div className="container">
      <table className="w-full font-mono">
        {console.log({ filteredData, paginatedData })}
        <thead className="sticky">
          <tr className="w-full text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase ">
            {title.map((t) => {
              return <th className="px-4 py-3  ">{t}</th>;
            })}
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {inventoryList.map((user) => {
            return (
              <tr className="text-gray-700" key={user.idinventory}>
                <td className="px-4 py-3 text-xs font-semibold border">
                  {user.idinventory}
                </td>
                <td className="px-4 py-3 border max-w-xs">
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold text-black">{user.company}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border max-w-xs">
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold text-black">
                        {user.medicine}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-3 text-xs border">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    {user.stock}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs border">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    {user.Dealer_phone}
                  </span>
                </td>
                <td className=" px-6 py-4 whitespace-nowrap text-right text-sm font-medium border">
                  <p className="cursor-pointer text-indigo-600 hover:text-green-700">
                    <EditData
                      header={title}
                      medicineData={user}
                      operation={"edit"}
                    />
                  </p>
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
          {paginationRange.map((page) => {
            if (page === DOTS) {
              return <li className="pagination-item dots">&#8230;</li>;
            }

            return (
              <li
                onClick={() => pagination(page)}
                className={`select-none cursor-pointer mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-gray-200 rounded-lg ${
                  currentPage === page
                    ? "bg-gray-700 text-gray-200"
                    : "page-item"
                }`}
              >
                <p className="font-bold">{page}</p>
              </li>
            );
          })}

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

export default InventoryTableData;
