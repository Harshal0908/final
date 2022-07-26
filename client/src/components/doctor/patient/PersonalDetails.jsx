import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import drop1Data from "./drop1.json";
import Select from "react-select";
import Axios from "axios";

// import Collapsible from "react-collapsible";
import useCollapse from "react-collapsed";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";
// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function PersonalDetails() {
  const [startDate, setStartDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState(null);
  const [drop1, setdrop1] = useState("");
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const वैवाहिकजीवन = [
    { value: "विवाहित ", label: "विवाहित " },
    { value: "अविवाहित ", label: "अविवाहित " },
  ];

  const [first_name,setFirst_name] = useState('')
  const [last_name,setLast_name] = useState('')
  const [phone,setPhone] = useState('')
  const [occupation,setOccupation] = useState('')
  const [age,setAge] = useState(0)
  const [email,setEmail] = useState('')
  const [address,setAddress] = useState('')
  const [vaivahik,setVaivahik] = useState("विवाहित")
  

  const submitButton = () => {
    //console.log("HHHQQQ");
    Axios.post("http://localhost:3001/personal/insert",{
      first_name:first_name,
      last_name:last_name,
      phone:phone,
      occupation:occupation,
      age:age,
      email:email,
      address:address,
      startDate:startDate,
      birthDate:birthDate,
      drop1:drop1,
      vaivahik:vaivahik.value
    })
  };
  return (
    <div className="flex justify-center items-center py-4 ">
      <div className="block p-4 w-1/2 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div
          className="flex items-center justify-between "
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          Personal Details {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        <section {...getCollapseProps()} className="pt-2">
          <form>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div>
                <div className="relative mt-2 w-full group text-md font-semibold">
                  Today's Date
                </div>
              </div>
              <div className="relative  mb-6 w-full group">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  peekNextMonth
                  dateFormat="dd/MM/yyyy"
                  isClearable
                  placeholderText="Date"
                  dropdownMode="select"
                  className="block z-10 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange ={(e) => {setFirst_name(e.target.value)}}
                />
                <label
                  for="first_name"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange ={(e) => {setLast_name(e.target.value)}}
                />
                <label
                  for="last_name"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="phone"
                  id="phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange ={(e) => {setPhone(e.target.value)}}
                />
                <label
                  for="phone"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="occupation"
                  id="occupation"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange ={(e) => {setOccupation(e.target.value)}}
                />
                <label
                  for="occupation"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Occupation
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative  mb-6 w-full group">
                {/* <input
                  type="date"
                  name="birthDate"
                  id="birthDate"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="birthDate"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Birth Date
                </label> */}
                <DatePicker
                  selected={birthDate}
                  onChange={(date) => setBirthDate(date)}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dateFormat="dd/MM/yyyy"
                  isClearable
                  placeholderText="Date of Birth"
                  dropdownMode="select"
                  className="block z-10 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="age"
                  id="age"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange ={(e) => {setAge(e.target.value)}}
                />
                <label
                  for="age"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Age
                </label>
              </div>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <input
                type="email"
                name="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange ={(e) => {setEmail(e.target.value)}}
              />
              <label
                for="email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">
                वैवाहिक जीवन
              </div>
              <div className="relative  mb-6 w-full group">
              <Select
                  //   isMulti={true}
                  options={वैवाहिकजीवन}
                  className="z-20"
                  value={vaivahik}
                  onChange ={(e) => {setVaivahik(e)}}
                  //onSelect ={(e) => {setVaivahik(e.target.value)}}
                />
              </div>
            </div>
            {/* <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">
                वर्तमान व्याधी
              </div>
              <div className="relative  mb-6 w-full group">
                <Select
                  //   isMulti={true}
                  options={वैवाहिकजीवन}
                  className="overflow"
                />
              </div>
            </div> */}
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">
                {" "}
                वर्तमान व्याधी
              </div>
              <div className="relative z-10 mb-2 w-full group">
                <Dropdown
                  placeholder="Select an option"
                  options={drop1Data}
                  value={drop1}
                  onChange={(value) => setdrop1(value)}
                  className="text-sm"
                />
              </div>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <label
                for="address"
                className="block mb-2 text-sm text-gray-500 dark:text-gray-400"
              >
                Address
              </label>
              <textarea
                id="address"
                rows="2"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange ={(e) => {setAddress(e.target.value)}}
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={submitButton}
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
