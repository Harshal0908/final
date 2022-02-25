import React from "react";
import { Link } from "react-router-dom";

const data = [
  { name: "Vitthal Shinde", role: "Doctor", link: "/login" },
  { name: "Receptionist Name", role: "Receptionist", link: "/reception" },
];

export default function Landing() {
  return (
    <div className="flex justify-center items-center ">
      <div className=" items-center justify-center h-screen py-20">
        <div className="flex items-center justify-center py-10 ">
          <p className="text-xl md:text-2xl font-sans font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black">
            Bramha Ayurvedic Clinic
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {data.map((entry, i) => {
            return (
              <div className="px-24 pb-10">
                <div className="p-8 max-w h-auto bg-white font-semibold text-center rounded-3xl border shadow-lg">
                  <div className="mb-3 max-w-60 max-h-32 rounded-full  mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-person"
                      viewBox="-2 0 20 20"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                  </div>
                  <h1 className="text-lg text-gray-700"> {entry.name} </h1>
                  <h3 className="w-auto text-sm text-gray-400 ">
                    {" "}
                    {entry.role} Login{" "}
                  </h3>
                  <Link to={{ pathname: entry.link, state: { role: "Hel" } }}>
                    <button className="w-auto inline-flex items-center bg-slate-600 px-4 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide hover:-translate-1 hover:scale-105 hover:bg-indigo-600 duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 "
                        viewBox="0 0 22 20"
                        fill="currentColor"
                        textAnchor="Login"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                          textAnchor="Login"
                        />
                      </svg>
                      <div className="px-2 text-sm">Login</div>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
