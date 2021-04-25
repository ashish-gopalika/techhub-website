import Link from 'next/link';
import { useState } from 'react';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
} from 'react-icons/io5';

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const openSidebar = () => {
    setActive(!isActive);
  };
  return (
    <header className="z-30 w-full pl-4 md:px-8 py-4 bg-white sm:px-4">
      <div className="flex items-center justify-between px-4">
        <Link href="/">
          <span className="flex items-center">
            <img
              src="/assets/logo/logo-full-transparent.png"
              alt="TechHub Logo"
              className="h-12"
            />
            <span className="sr-only">TechHub</span>
          </span>
        </Link>
        <div className="hidden ml-[10%] md:flex uppercase tracking-widest gap-7 justify-between cursor-pointer">
          <Link href="/">
            <span className="text-black-600 hover:text-brand-700 hover:text-bold">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="text-black-600 hover:text-brand-700 hover:text-bold">
              About
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-black-600 hover:text-brand-700 hover:text-bold">
              Contact
            </span>
          </Link>
        </div>

        <div className="flex items-center px-4">
          <div className="hidden md:flex">
            <div className="flex flex-row gap-3 place-items-center mr-4">
              <Link href="https://www.facebook.com/official.techhub.community">
                <IoLogoFacebook className="text-xl hover:text-brand-500" />
              </Link>
              <Link href="https://www.instagram.com/techhub_community/">
                <IoLogoInstagram className="text-xl hover:text-brand-500" />
              </Link>
              <Link href="https://www.linkedin.com/company/techhub-community">
                <IoLogoLinkedin className="text-xl hover:text-brand-500" />
              </Link>
              <Link href="https://github.com/techhub-community/">
                <IoLogoGithub className="text-xl hover:text-brand-500" />
              </Link>
            </div>
            <Link href="https://kutt.it/techhub-invite">
              <img
                alt="Discord"
                src="https://img.shields.io/discord/814219041614594078?color=%23c31265&label=Discord&style=for-the-badge"
              />
            </Link>
          </div>

          <div className="inline-flex md:hidden">
            <button
              onClick={openSidebar}
              className="flex-none px-2 btn btn-white btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span className="sr-only">Open Menu</span>
            </button>
          </div>

          <div className="relative flex md:hidden ">
            <div
              className={`${
                isActive ? '' : 'hidden'
              } fixed inset-0 z-10 w-full h-full  opacity-5`}
              onClick={openSidebar}
            ></div>
            <div
              className={`${
                isActive ? '' : 'hidden'
              } fixed z-50 w-5/12 h-auto text-black shadow-lg bg-gray-50 rounded-lg right-4 top-14`}
            >
              <ul className="py-2">
                <Link href="/">
                  <li className="px-6 py-2 bg-gray-50 hover:bg-brand-600 hover:text-white">
                    Home
                  </li>
                </Link>
                <Link href="/about">
                  <li className="px-6 py-2 bg-gray-50 hover:bg-brand-600 hover:text-white">
                    About
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="px-6 py-2 bg-gray-50 hover:bg-brand-600 hover:text-white">
                    Contact
                  </li>
                </Link>
                <Link href="https://kutt.it/techhub-invite">
                  <li className="px-6 py-2 bg-gray-50 hover:bg-brand-600 hover:text-white">
                    Join Discord
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
