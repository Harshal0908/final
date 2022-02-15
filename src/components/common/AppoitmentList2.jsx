import React, { Component } from "react";

import data from "./data.json";

export default class AppoitmentList2 extends Component {
  state = {
    appoitmentList: [],
  };

  render() {
    return (
      <div>
        <div class="container flex mx-auto w-full items-center justify-center">
          <section class="container mx-auto p-6 ">
            <h1 class="font-semibold text-gray-800 pb-10">Appoitments</h1>
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                pattern="[0-9]{10}"
                name="floating_phone"
                // onChange={inputsHandler}
                id="floating_phone"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                // value={inputField.number}
                required
              />
              <label
                for="floating_phone"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Search
              </label>
            </div>
            <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
              <div class="w-full overflow-auto md:overflow-auto h-screen">
                <table class="w-full  font-mono">
                  <thead>
                    <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                      <th class="px-4 py-3">No.</th>
                      <th class="px-4 py-3">Name</th>
                      <th class="px-4 py-3">Number</th>
                      <th class="px-4 py-3">Date</th>
                      <th class="px-4 py-3">Time</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white">
                    {data.map((entry, i) => {
                      return (
                        <tr class="text-gray-700">
                          <td class="px-4 py-3 text-xs font-semibold border">
                            {i + 1}
                          </td>
                          <td class="px-4 py-3 border">
                            <div class="flex items-center text-sm">
                              <div>
                                <p class="font-semibold text-black">
                                  {entry.company}
                                </p>
                                <p class="text-xs text-gray-600">Developer</p>
                              </div>
                            </div>
                          </td>

                          <td class="px-4 py-3 text-ms font-semibold border">
                            {entry.stockPrice}
                          </td>
                          <td class="px-4 py-3 text-xs border">
                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                              {" "}
                              {entry.ticker}{" "}
                            </span>
                          </td>
                          <td class="px-4 py-3 text-sm border">
                            {entry.timeElapsed}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
