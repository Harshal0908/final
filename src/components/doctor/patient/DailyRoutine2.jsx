import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import Select from "react-select";

// import Collapsible from "react-collapsible";
import useCollapse from "react-collapsed";

export default function DailyRoutine2() {
  const [isExpanded, setExpanded] = useState(false);

  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const मांसाहार = [
    { value: "अंडी ", label: "अंडी " },
    { value: "चिकन ", label: "चिकन " },
    { value: "मटण ", label: "मटण " },
    { value: "मासे ", label: "मासे " },
    { value: "बोंबील ", label: "बोंबील " },
  ];
  const तेल = [
    { value: "शिंगदाणे ", label: "शिंगदाणे " },
    { value: "तीळ ", label: "तीळ " },
    { value: "मोहरी ", label: "मोहरी " },
    { value: "सूर्यफूल ", label: "सूर्यफूल " },
  ];

  const सुकामेवा = [
    { value: "काजू ", label: "काजू " },
    { value: "अक्रोड ", label: "अक्रोड " },
    { value: "खजूर ", label: "खजूर " },
    { value: "पिस्ता  ", label: "पिस्ता  " },
    { value: "मनुके ", label: "मनुके " },
    { value: "अंजीर  ", label: "अंजीर  " },
  ];
  const थंडपदार्थ = [
    { value: "फ्रिजवॉटर  ", label: "फ्रिजवॉटर  " },
    { value: "शीतपेय ", label: "शीतपेय " },
    { value: "आईस्क्रीम  ", label: "आईस्क्रीम  " },
  ];

  const धान्य = [
    { value: "गहू  ", label: "गहू  " },
    { value: "ज्वारी ", label: "ज्वारी " },
    { value: "बाजरी  ", label: "बाजरी" },
    { value: "नाचणी  ", label: "नाचणी  " },
    { value: "तांदूळ   ", label: "तांदूळ " },
  ];
  const जलसेवन = [
    { value: "तहान लागल्यावर ", label: "तहान लागल्यावर " },
    { value: " तहानेशिवाय", label: " तहानेशिवाय" },
    { value: "जेवणापूर्वी  ", label: "जेवणापूर्वी  " },
    { value: "जेवणामध्ये  ", label: "जेवणामध्ये  " },
    { value: "जेवणानंतर   ", label: "जेवणानंतर   " },
  ];
  const मलप्रवृत्ती = [
    { value: "समाधानकारक   ", label: "समाधानकारक " },
    { value: "असमाधानकारक  ", label: "असमाधानकारक  " },
    { value: "सकफ़   ", label: "सकफ़ " },
  ];
  const मूत्रप्रवृत्ती = [
    { value: "प्राकृत ", label: "प्राकृत " },
    { value: "सदाह ", label: "सदाह " },
    { value: "सगंध ", label: "सगंध " },
    { value: "सफेन ", label: "सफेन " },
  ];
  const स्वेदप्रवृत्ती = [
    { value: "प्राकृत ", label: "प्राकृत " },
    { value: "अति ", label: "अति " },
    { value: "हीन ", label: "हीन " },
  ];
  const रजप्रवृत्ती = [
    { value: "नियमित ", label: "नियमित " },
    { value: "अनियमित ", label: "अनियमित " },
    { value: " सकष्ट ", label: " सकष्ट " },
    { value: " काष्ठरहित  ", label: " काष्ठरहित  " },
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
          Daily Routine 2 {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </div>

        <section {...getCollapseProps()} className="pt-2">
          <form>
            <div className="grid xl:grid-cols-2 xl:gap-6 mt-2">
              <div className="relative mt-2 w-full group text-md">
                मांसाहार{" "}
              </div>
              <div className="relative  mb-2 w-full group">
                <Select isMulti={true} options={मांसाहार} />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">तेल </div>
              <div className="relative  mb-2 w-full group">
                <Select isMulti={true} options={तेल} />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">
                सुकामेवा{" "}
              </div>
              <div className="relative  mb-2 w-full group">
                {" "}
                <Select isMulti={true} options={सुकामेवा} />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <label className="relative mt-2 w-full group text-md">फळे </label>
              <div className="relative  mb-2 w-full group">
                <input
                  type="text"
                  name="फळे"
                  id="फळे"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
              </div>
            </div>

            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">
                थंडपदार्थ{" "}
              </div>
              <div className="relative  mb-2 w-full group">
                <Select isMulti={true} options={थंडपदार्थ} />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <label className="relative mt-2 w-full group text-md">
                पालेभाज्या{" "}
              </label>
              <div className="relative  mb-2 w-full group">
                <input
                  type="text"
                  name="पालेभाज्या"
                  id="पालेभाज्याs"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <label className="relative mt-2 w-full group text-md">
                फळभाज्या{" "}
              </label>
              <div className="relative  mb-2 w-full group">
                <input
                  type="text"
                  name="फळभाज्या"
                  id="फळभाज्या"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
              </div>
            </div>

            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">धान्य</div>
              <div className="relative  mb-2 w-full group">
                <Select isMulti={true} options={धान्य} />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <label className="relative mt-2 w-full group text-md">इतर </label>
              <div className="relative  mb-2 w-full group">
                <input
                  type="text"
                  name="इतर "
                  id="इतर "
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">जलसेवन</div>
              <div className="relative  mb-2 w-full group">
                <Select isMulti={true} options={जलसेवन} />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6 mt-6">
              <div className="relative mt-2 w-full group text-md">
                मलप्रवृत्ती{" "}
              </div>
              <div className="relative  mb-2 w-full group">
                <Select options={मलप्रवृत्ती} />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">
                मूत्रप्रवृत्ती
              </div>
              <div className="relative  mb-6 w-full group">
                <Select options={मूत्रप्रवृत्ती} />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">
                स्वेदप्रवृत्ती
              </div>
              <div className="relative  mb-6 w-full group">
                <Select
                  //   isMulti={true}
                  options={स्वेदप्रवृत्ती}
                  className="overflow"
                />
              </div>
            </div>

            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">
                रजप्रवृत्ती
              </div>
              <div className="relative  mb-6 w-full group">
                <Select
                  //   isMulti={true}
                  options={रजप्रवृत्ती}
                  className="overflow"
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <label className="relative mt-2 w-full group text-md">
                रजप्रवृत्ती काल (दिवस ){" "}
              </label>
              <div className="relative  mb-2 w-full group">
                <input
                  type="number"
                  name="रजप्रवृत्ती काल "
                  id="रजप्रवृत्ती काल "
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6 mb-4">
              <label className="relative mt-2 w-full group text-md">
                अन्य लक्षण{" "}
              </label>
              <div className="relative  mb-2 w-full group">
                <input
                  type="text"
                  name="अन्य लक्षण "
                  id="अन्य लक्षण"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
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
