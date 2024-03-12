"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
//import Themebutton from "./Themebutton";


export default function Navbar() {

    let pathname = usePathname() || "/";
    return (
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justfiy-between h-16">
                <div className="flex justify-between w-full">
                  <div className="flex items-center">
                    <Link href="/">
                      <h1 className="text-2xl font-medium">
                        Abu Bakar <span className="text-teal-500">Siddique</span>
                      </h1>
                    </Link>
                  </div>

                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                     <Link href="/" prefetch className="{`${}`}">
                     </Link>

                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    );
}