import React, { Component } from "react";
import AppoitmentList from "../common/AppoitmentList";
import Navbar from "../common/Navbar";

export default class DoctorHome extends Component {
  render() {
    return (
      <div>
        {/* <nav class="relative select-none bg-grey lg:flex lg:items-stretch w-full ">
          <div class="flex flex-no-shrink items-stretch h-12">
            <a
              href="#"
              class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark"
            >
              Tailwind
            </a>
            <a
              href="#"
              class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark"
            >
              Css
            </a>
            <button class="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
              <svg
                class="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                class="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
          <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
            <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
              <a
                href="#"
                class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark"
              >
                Item 1
              </a>
              <a
                href="#"
                class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark"
              >
                Item 2
              </a>
              <a
                href="#"
                class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark"
              >
                Item 3
              </a>
            </div>
          </div>
        </nav> */}
        <Navbar />
        <AppoitmentList />
        <AppoitmentList />
        <AppoitmentList />
        <AppoitmentList />
        <AppoitmentList />
      </div>
    );
  }
}
