import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import Select from "react-select";

// import Collapsible from "react-collapsible";
import useCollapse from "react-collapsed";

export default function DailyRoutine() {
  const [isExpanded, setExpanded] = useState(false);
  const [state, setstate] = useState(null);
  const handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const { selectedOption } = this.state;
  return (
    <div className="flex justify-center items-center pb-4">
      <div className="block p-4 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div
          className="flex items-center justify-between w-96"
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          Daily Routine {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        <section {...getCollapseProps()} className="pt-2">
          <form>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <label className="relative mt-2 w-full group text-md">
                सकाळी उठण्याची वेळ{" "}
              </label>
              <div className="relative  mb-2 w-full group">
                <input
                  type="time"
                  name="wakeuptime"
                  id="wakeuptime"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">
                रात्री झोपायची वेळ{" "}
              </div>
              <div className="relative  mb-2 w-full group">
                <input
                  type="time"
                  name="sleeptime"
                  id="sleeptime"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">स्नान </div>
              <div className="relative  mb-2 w-full group">
                <Dropdown
                  placeholder="Select an option"
                  options={["शीत ", "कोष्ण", "उष्ण "]}
                  value=""
                  className="text-sm"
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">व्यायाम </div>
              <div className="relative  mb-2 w-full group">
                <Dropdown
                  placeholder="Select an option"
                  options={[
                    "चंकमन",
                    "प्राणायाम",
                    "योग",
                    "सूर्यनमस्कार ",
                    "Gym",
                  ]}
                  value=""
                  className="text-sm"
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-sm">आहार </div>
              <div className="relative  mb-2 w-full group"></div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">
                पेयपदार्थ{" "}
              </div>
              <div className="relative  mb-2 w-full group">
                {" "}
                <Dropdown
                  placeholder="Select an option"
                  options={["चहा", "दूध", "कॉफी", "लिंबूपाणी", "ज्युस"]}
                  value=""
                  className="text-sm"
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-sm">
                नाश्ता वेळ{" "}
              </div>
              <div className="relative  w-full group"></div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <label className="relative mt-2 w-full group text-md">
                सकाळ{" "}
              </label>
              <div className="relative  mb-2 w-full group">
                <input
                  type="time"
                  name="wakeuptime"
                  id="wakeuptime"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">संध्या </div>
              <div className="relative  mb-2 w-full group">
                <input
                  type="time"
                  name="sleeptime"
                  id="sleeptime"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-sm">
                जेवण वेळ{" "}
              </div>
              <div className="relative  w-full group"></div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <label className="relative mt-2 w-full group text-md">
                सकाळ{" "}
              </label>
              <div className="relative  mb-2 w-full group">
                <input
                  type="time"
                  name="wakeuptime"
                  id="wakeuptime"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">संध्या </div>
              <div className="relative  mb-2 w-full group">
                <input
                  type="time"
                  name="sleeptime"
                  id="sleeptime"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-sm">पदार्थ </div>
              <div className="relative  w-full group"></div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">
                पेयपदार्थ{" "}
              </div>
              <div className="relative  mb-2 w-full group">
                {" "}
                <Dropdown
                  placeholder="Select an option"
                  options={["चहा", "दूध", "कॉफी", "लिंबूपाणी", "ज्युस"]}
                  value=""
                  className="text-sm"
                />
                {/* <Select
                 isMulti={true}
          value={selectedOption}
          onChange={this.handleChange}
                  options={["चहा", "दूध", "कॉफी", "लिंबूपाणी", "ज्युस"]}
                /> */}
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
