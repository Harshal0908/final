import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import Collapsible from "react-collapsible";
import useCollapse from "react-collapsed";
import Select from "react-select";
import Axios from "axios";

export default function MedicalHistory() {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const निद्रा = [
    { value: "सम्यक  ", label: "सम्यक  " },
    { value: "असम्यक  ", label: "असम्यक  " },
    { value: "विपर्याय  ", label: "विपर्याय  " },
    { value: "खंडित  ", label: "खंडित  " },
  ];
  const व्यसन = [
    { value: "तंबाखू", label: "तंबाखू" },
    { value: "मिश्री", label: "मिश्री" },
    { value: "सिगारेट   ", label: "सिगारेट" },
    { value: "मद्य", label: "मद्य" },
    { value: "गुटखा", label: "गुटखा" },
  ];

  const [purvavrut,setPurvavrut] = useState('');
  const [shastra,setShastra] = useState('');
  const [kulvrutant,setKulvrutant] = useState('');
  const [pratidin,setPratidin] = useState('');
  const [pratisaptah,setPratisptah] = useState('');
  const [vyasan,setVyasan] = useState();

  const select1 = (e)=>{
    setVyasan(Array.isArray(e)?e.map(x=>x.label):[]);
  }

  const submitButton = () => {
    console.log("HHHQQQ");
    Axios.post("http://localhost:3001/medical/insert",{
      purvavrut:purvavrut,
      shastra:shastra,
      kulvrutant:kulvrutant,
      pratidin:pratidin,
      pratisaptah:pratisaptah,
      vyasan:vyasan
    })
  };
  return (
    <div className="flex justify-center items-center pb-4">
      <div className="block p-4 w-1/2 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div
          className="flex items-center justify-between "
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          Medical History {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        <section {...getCollapseProps()}>
          <form>
            <div className="grid xl:grid-cols-2 xl:gap-6 my-4">
              <label className="relative mt-2 w-full group text-md">
                पूर्ववृत{" "}
              </label>
              <div className="relative  mb-2 w-full group">
                <input
                  type="text"
                  name="पूर्ववृत"
                  id="पूर्ववृत"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange ={(e) => {setPurvavrut(e.target.value)}}
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6 mb-4">
              <label className="relative mt-2 w-full group text-md">
                शस्त्रकर्म इतिहास{" "}
              </label>
              <div className="relative  mb-2 w-full group">
                <input
                  type="text"
                  name="शस्त्रकर्मइतिहास"
                  id="शस्त्रकर्मइतिहास"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange ={(e) => {setShastra(e.target.value)}}
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6 mb-4">
              <label className="relative mt-2 w-full group text-md">
                कुलवृत्तांत{" "}
              </label>
              <div className="relative  mb-2 w-full group">
                <input
                  type="text"
                  name="कुलवृत्तांत "
                  id="कुलवृत्तांत"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange ={(e) => {setKulvrutant(e.target.value)}}
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">निद्रा</div>
              <div className="relative  mb-6 w-full group">
                <Select
                  //   isMulti={true}
                  options={निद्रा}
                  className="overflow"
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-md">व्यसन</div>
              <div className="relative  mb-6 w-full group">
                <Select isMulti={true} options={व्यसन} className="overflow" onChange = {select1} />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative mt-2 w-full group text-sm">
                दिवास्वाप{" "}
              </div>
              <div className="relative  w-full group"></div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <label className="relative mt-2 w-full group text-md">
                प्रतिदिन (तास ){" "}
              </label>
              <div className="relative  mb-2 w-full group">
                <input
                  type="number"
                  name="प्रतिदिन"
                  id="प्रतिदिन"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange ={(e) => {setPratidin(e.target.value)}}
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6 mb-6">
              <label className="relative mt-2 w-full group text-md">
                प्रतिसाप्ताह (तास ){" "}
              </label>
              <div className="relative  mb-2 w-full group">
                <input
                  type="number"
                  name="प्रतिसाप्ताह"
                  id="प्रतिसाप्ताह"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange ={(e) => {setPratisptah(e.target.value)}}
                />
              </div>
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
