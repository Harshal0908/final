import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import Select from "react-select";

// import Collapsible from "react-collapsible";
import useCollapse from "react-collapsed";

export default function DailyRoutine() {
  const [isExpanded, setExpanded] = useState(false);

  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const पेयपदार्थ = [
    { value: "चहा", label: "चहा" },
    { value: "दूध", label: "दूध" },
    { value: "कॉफी", label: "कॉफी" },
    { value: "लिंबूपाणी", label: "लिंबूपाणी" },
    { value: "ज्युस", label: "ज्युस" },
  ];
  const कडधान्य = [
    { value: "मटकी", label: "मटकी" },
    { value: "वाटाणा", label: "वाटाणा" },
    { value: "हरभरा", label: "हरभरा" },
    { value: "चवळी", label: "चवळी" },
    { value: "राजमा", label: "राजमा" },
  ];

  const व्यायाम = [
    { value: "चंकमन", label: "चंकमन" },
    { value: "प्राणायाम", label: "प्राणायाम" },
    { value: "योग", label: "योग" },
    { value: "सूर्यनमस्कार ", label: "सूर्यनमस्कार " },
    { value: "Gym", label: "Gym" },
  ];
  const स्नान = [
    { value: "शीत ", label: "शीत " },
    { value: "कोष्ण", label: "कोष्ण" },
    { value: "उष्ण ", label: "उष्ण " },
  ];

  const बेसनाचेपदार्थ = [
    { value: "भाजी ", label: "भाजी " },
    { value: "फरसाण", label: "फरसाण" },
    { value: "पिठले ", label: "पिठले " },
  ];
  const बेकरीपदार् = [
    { value: "खारी ", label: "खारी " },
    { value: "टोस्ट", label: "टोस्ट" },
    { value: "ब्रेड ", label: "ब्रेड " },
    { value: "पाव ", label: "पाव " },
  ];
  const दुग्धजन्यपदार्थ = [
    { value: "ताक  ", label: "ताक" },
    { value: "दही ", label: "दही " },
    { value: "पनीर  ", label: "पनीर" },
    { value: "चीज  ", label: "चीज " },
    { value: "श्रीखंड   ", label: "श्रीखंड" },
    { value: "आईस्क्रीम   ", label: "आईस्क्रीम " },
  ];
  const आंबवलेलेपदार्थ = [
    { value: "इडली", label: "इडली" },
    { value: "डोसा", label: "डोसा" },
    { value: "उत्तप्पा", label: "उत्तप्पा" },
    { value: "ढोकळा", label: "ढोकळा" },
  ];
  const मसाला = [
    { value: "आद्रक", label: "आद्रक" },
    { value: "लसूण", label: "लसूण" },
    { value: "सुंठ", label: "सुंठ" },
    { value: "दालचिनी  ", label: "दालचिनी  " },
    { value: "मिरे   ", label: "मिरे   " },
  ];
  const विरुद्धार = [
    { value: "दूध+फळे", label: "दूध+फळे" },
    { value: "दूध+मीठ", label: "दूध+मीठ" },
    { value: " दूध+मांसाहार", label: " दूध+मांसाहार" },
  ];
  return (
    <div className="flex justify-center items-center pb-4">
      <div className="block p-4 w-1/2 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div
          className="flex items-center justify-between"
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          Daily Routine 1 {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
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
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">स्नान </div>
              <div className="relative  mb-2 w-full group">
                <Select isMulti={true} options={स्नान} />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">व्यायाम </div>
              <div className="relative  mb-2 w-full group">
                <Select isMulti={true} options={व्यायाम} />
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
                <Select isMulti={true} options={पेयपदार्थ} />
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
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-sm">पदार्थ </div>
              <div className="relative  w-full group"></div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">कडधान्य </div>
              <div className="relative  mb-2 w-full group">
                <Select isMulti={true} options={कडधान्य} />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">
                बेसनाचे पदार्थ
              </div>
              <div className="relative  mb-2 w-full group">
                <Select isMulti={true} options={बेसनाचेपदार्थ} />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">
                बेकरी पदार्थ
              </div>
              <div className="relative  mb-2 w-full group">
                <Select isMulti={true} options={बेकरीपदार्} />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">
                दुग्धजन्य पदार्थ
              </div>
              <div className="relative  mb-2 w-full group">
                <Select isMulti={true} options={दुग्धजन्यपदार्थ} />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">
                आंबवलेले पदार्थ
              </div>
              <div className="relative  mb-2 w-full group">
                <Select isMulti={true} options={आंबवलेलेपदार्थ} />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">मसाला</div>
              <div className="relative  mb-2 w-full group">
                <Select isMulti={true} options={मसाला} />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">
                विरुद्धार
              </div>
              <div className="relative  mb-6 w-full group">
                <Select
                  isMulti={true}
                  options={विरुद्धार}
                  className="overflow"
                />
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
