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
          <ul class="flex flex-col bg-gray-300 p-4">
            <h1 className="p-4 flex justify-center">Appoitment List</h1>
            {data.map((entry, i) => {
              return (
                <div className="p-1">
                  <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                      {i + 1}
                    </div>
                    <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium">{entry.company}</div>
                      <div class="text-gray-600 text-sm">{entry.ticker}</div>
                    </div>
                    <div class="text-gray-600 text-xs">{entry.timeElapsed}</div>
                  </div>
                </div>
              );
            })}
            {/* {this.state.appoitmentList.map((entry) => (
              <li class="border-gray-400 flex flex-row mb-2">
                <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                  <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                    💧
                  </div>
                  <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium">{entry.company}</div>
                    <div class="text-gray-600 text-sm">{entry.ticker}</div>
                  </div>
                  <div class="text-gray-600 text-xs">{entry.timeElapsed}</div>
                </div>
              </li>
            ))}
            <li class="border-gray-400 flex flex-row mb-2">
              <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                  💧
                </div>
                <div class="flex-1 pl-1 mr-16">
                  <div class="font-medium">Cup of water</div>
                  <div class="text-gray-600 text-sm">200ml</div>
                </div>
                <div class="text-gray-600 text-xs">6:00 AM</div>
              </div>
            </li>
            <li class="border-gray-400 flex flex-row mb-2">
              <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                  ⚽️
                </div>
                <div class="flex-1 pl-1 mr-16">
                  <div class="font-medium">Training</div>
                  <div class="text-gray-600 text-sm">1h</div>
                </div>
                <div class="text-gray-600 text-xs">10:00 AM</div>
              </div>
            </li>
            <li class="border-gray-400 flex flex-row mb-2">
              <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
                  📖
                </div>
                <div class="flex-1 pl-1 mr-16">
                  <div class="font-medium">Study</div>
                  <div class="text-gray-600 text-sm">4h</div>
                </div>
                <div class="text-gray-600 text-xs">1:00 PM</div>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}
