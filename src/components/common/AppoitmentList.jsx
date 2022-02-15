import React, { Component } from "react";

import data from "./data.json";

export default class AppoitmentList extends Component {
  state = {
    appoitmentList: [],
  };
  componentDidMount() {
    fetch("./data.json")
      .then((resonse) => resonse.json())
      .then((data) => {
        this.setState({ appoitmentList: data });
      });
  }
  render() {
    return (
      <div>
        <div class="container flex mx-auto w-full items-center justify-center">
          <section class="container mx-auto p-6 ">
            <h1 class="font-semibold text-gray-800 pb-10">Appoitments</h1>
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
