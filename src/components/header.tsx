"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/redux/hook";

const Header = () => {
  const [status, setStatus] = useState<string>("hidden");
  const [header, setHeader] = useState<string>("bg-transparent");

  const dispatch = useAppDispatch();

  const { isAuthenticate } = useAppSelector((state) => state.auth);

  const openMobileMenu = () => {
    setStatus("visible");
  };
  const closeMobileMenu = () => {
    setStatus("hidden");
  };

  const listenScrollEvent = () => {
    if (window.scrollY < 35) {
      return setHeader("bg-transparent");
    } else if (window.scrollY > 35) {
      return setHeader("bg-white shadow-md");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  console.log(isAuthenticate);

  return (
    <>
      <header className={`inset-x-0 top-0 z-50 sticky ${header}`}>
        <nav
          className="flex items-center justify-between p-6 lg:px-8 "
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Company</span>
              <Image
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                width={200}
                height={100}
                alt="awd awd"
              />
            </Link>
          </div>
          <div onClick={openMobileMenu} className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Product
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Features
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </a>
            <Link
              href="/auth/register"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Register
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
            {isAuthenticate ? (
              <Link href="/">
                <Image
                  className="lg:w-12 lg:h-12 rounded-full border-2 border-blue-600 hover:border-red-500 transition-all"
                  src="http://127.0.0.1:8000/uploads/img/Asset_4524x-100.jpg"
                  width={50}
                  height={50}
                  alt="text"
                ></Image>
              </Link>
            ) : (
              <Link
                href="/auth/login/"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log in <span aria-hidden="true"></span>
              </Link>
            )}
          </div>
        </nav>
        <div className={`lg:hidden ${status}`}>
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Company</span>
                <Image
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  width={200}
                  height={100}
                  alt="awd awd"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={closeMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <Link
                    href="/auth/login/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/auth/register/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
