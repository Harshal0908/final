import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";

export default function Appoitmnet() {
  /*var [date, setDate] = useState(new Date());
  const [data, setData] = useState({
    name: "",
    number: "",
    date: "",
    time: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }*/

  const [name,setName] = useState('')
  const [number,setNumber] = useState(0)
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  //const [time,setTime] = useState('')
  const time = current.getHours() + ':' + current.getMinutes()+ ':' +current.getSeconds();

  const submitButton = () => {
    //console.log("HHHQQQ");
    console.log(typeof(number))
    Axios.post("http://localhost:3001/appointment",{
      name : name,
      number : number,
      date : date,
      time : time,
    })

  // useEffect(() => {
  //   let timeout = setTimeout(() => {
  //     setDate(new Date());
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [date]);

 /* const submitButton = () => {
    alert(data.name);*/
  };
  return (
    <div>
      <div className="max-w-sm mx-auto">
        <h1 class="font-semibold text-gray-800">New Appoitment</h1>
        <form className="w-auto pt-16">
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              id="name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={name}
              required
            />
            <label
              htmlFor="name"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Patient Name
            </label>
          </div>

          <div class="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              pattern="[0-9]{10}"
              name="number"
              onChange={(e) => setNumber(e.target.value)}
              id="number"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={number}
              required
            />
            <label
              htmlFor="number"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Mobile Number
            </label>
          </div>
          {/* <div class="relative z-0 mb-6 w-full group">
            {date.toLocaleDateString()}
          </div>
          <div class="relative z-0 mb-6 w-full group">
            {date.toLocaleTimeString()}
          </div> */}
          <div className="relative z-10 mb-6 w-full group">
            {date}
          </div>
          <div class="relative z-0 mb-6 w-full group">
            {time}
          </div>
          <button
            onClick={submitButton}
            class="mx-2  bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
