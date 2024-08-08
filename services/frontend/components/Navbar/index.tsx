"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 py-2 z-10 transition-colors duration-300 ">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/where-what-quest.png"
            alt="where-what-quest"
          />
        </Link>
        <div className="flex flex-row gap-8 items-center">
          <a
            href="/MuhammedGumusResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="lg"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
