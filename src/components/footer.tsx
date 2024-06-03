import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./ui/navlinks";

const Footer = () => {
  const links: NavLink[] = [
    { text: "Home", href: "/#hero" },
    { text: "About", href: "/about" },
    { text: "Problem", href: "/#problem-statement" },
    { text: "Solution", href: "/#solution" },
    { text: "Team", href: "/#team" },
  ];

  return (
    <section className="p-4 px-8 dark bg-primary-2 text-text text-center md:text-left">
      <div className="mb-3 flex flex-col md:flex-row justify-around gap-3">
        <div className=" flex flex-col items-center md:items-start">
          <Image alt="logo" src="/aquatwin-logo.png" height={200} width={200} />
        </div>
        <div>
          <h3 className=" font-bold text-lg mb-1">Links</h3>
          <ul className="flex flex-row justify-between md:flex-col">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className="hover:text-btn hover:font-[11px]"
                  href={link.href}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex flex-col  items-center">
          <h3 className=" font-bold text-lg mb-1">Partners</h3>
          <div className=" flex mt-3">
            <span className=" mr-3 min-w-14">
              <a href="https://jhubafrica.com/" target="_blank" aria-label="Jhub Web Link">
                <Image
                  alt="JHUB"
                  src="/partners/jhub.png"
                  height={40}
                  width={50}
                  className="bg-white rounded-md"
                />
              </a>
            </span>
            <ul className=" flex gap-3 items-center">
              <li>
                <a href="https://www.facebook.com/JHUBAfrica/" target="_blank" aria-label="Jhub facebook Link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-[20px] w-[20px] fill-[#809cce]"
                  >
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://x.com/JHUBAfrica" target="_blank" aria-label="Jhub X Link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-[20px] w-[20px] fill-[#809cce]"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/jhubafrica/"
                  target="_blank" aria-label="Jhub Linked In Link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-[20px] w-[20px] fill-[#809cce]"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <Separator /> */}
      <hr className="fill-whey-[#809cce]ite bg-title block h-[2px]" />
      <footer className="mt-3 flex justify-between flex-col md:flex-row items-center gap-2">
        {/* <div className="text-sm underline flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-5">
          <Link href="#">Privacy policy</Link>
          <Link href="#">Terms of Service</Link>
        </div> */}
        <div className="mt-3 text-sm ">
          <p>&copy; 2024. All rights reserved.</p>
        </div>
        <div className=" flex gap-3">
          <span className="text-sm">Follow us on:</span>
          <a href="https://github.com/AquaTwin" target="_blank" aria-label="AquaTwin Github Link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-[20px] w-[20px] fill-[#809cce]"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
          <a href="mailto:aquatwin254@gmail.com" target="_blank" aria-label="aquatwin email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-[20px] w-[20px] fill-[#809cce]"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
