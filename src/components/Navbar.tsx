import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
interface NavLinkItem {
  id: number;
  title: string;
  url: string;
}

export const NikeNavbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const navLinks: NavLinkItem[] = [
    { id: 1, title: "Home", url: "#" },
    { id: 2, title: "Men", url: "#" },
    { id: 3, title: "Women", url: "#" },
    { id: 4, title: "Kids", url: "#" },
    { id: 5, title: "Sale", url: "#" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 select-none">
      <nav className="w-full  px-12 h-16 bg-[#343434]/60 flex items-center justify-between">
        <div className="flex items-center ">
          <div className="text-5xl font-extra-bold font-rouge-script-regular  text-teal-400  cursor-pointer">
            Your Steps
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-teal-400 font-medium text-xl">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                className="hover:text-shadow-xl pb-5 border-b-2 border-transparent hover:border-teal-400 transition-all"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="search for products..."
              className="w-70 lg:w-60 bg-[#343434] text-teal-400  text-sm rounded-full border-2 border-cyan-400 pl-4 pr-10 py-2 focus:outline-none focus: focus:border focus:border-teal-400 transition-all text-left"
            />

            <span className="absolute right-3 top-2.5  pointer-events-none "></span>
          </div>

          <button
            className="transition-transform duration-300 hover:scale-125 text-xl text-teal-400  p-1"
            title="favorites"
          >
            <GrFavorite />
          </button>
          <button
            className="transition-transform duration-300 hover:scale-125 text-xl text-teal-400  p-1  relative"
            title="items bag "
          >
            <BsBag />
            <span className="absolute -top-1 -right-1 bg-teal-400 text-slate-900 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center ">
              0
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NikeNavbar;
