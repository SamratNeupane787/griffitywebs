"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  const navtoServices = () => {
    router.push("/services");
  };
  return (
    <div className="navbar  bg-transparent text-white font-monst font-semibold  ">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menumenu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Work</a>
            </li>
            <li>
              <a>Carrer</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a onClick={navtoServices}>Services</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
      </div>
      <a className="btn btn-ghost navbar-start text-xl z-20">
        Griffity Studios
      </a>

      <div className="navbar-center text-3xl hidden lg:flex navbar-end pr-5">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Work</a>
          </li>
          <li>
            <a>Carrer</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a onClick={navtoServices}>Services</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
