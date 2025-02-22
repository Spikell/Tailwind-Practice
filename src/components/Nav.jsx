import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <div>
      <header className="absolute padding-x py-8 z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="./">
            <img
              src={headerLogo}
              alt="Logo"
              className='m-0 w-[129px] h-[29px]'
            />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-slate-900 "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden max-lg:block">
            <img src = {hamburger} alt="Hamburger" 
            width={25}
            height={25}
            />

          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
