import React from "react";
import { Link } from "react-router-dom";
export default function Landing() {
  // const { width } = useWindowSize();

  return (
    <div className="flex justify-center items-center space-x-40">
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 h-80 px-20">
          <div className="mb-3 w-32 h-32 rounded-full  mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
          </div>
          <h1 className="text-lg text-gray-700"> Vitthal Shinde </h1>
          <h3 className="text-sm text-gray-400 "> Doctor's Login </h3>

          <Link to="/login">
            <button className="inline-flex items-center bg-slate-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide hover:-translate-1 hover:scale-105 hover:bg-indigo-600 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                viewBox="0 0 20 20"
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
              <div className="px-2">Login</div>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 h-80  px-20">
          <div className="mb-3 w-32 h-32 rounded-full  mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-person-workspace"
              viewBox="0 0 16 16"
            >
              <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
            </svg>
          </div>
          <h1 className="text-lg text-gray-700"> {"Reception's Name"} </h1>
          <h3 className="text-sm text-gray-400 "> Reception's Login </h3>

          <Link to="/reception">
            <button className="inline-flex items-center bg-slate-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide hover:-translate-1 hover:scale-105 hover:bg-indigo-600 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
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
              <div className="px-2">Login</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
