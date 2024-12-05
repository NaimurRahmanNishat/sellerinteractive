"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo.png";
import { FaAngleDown } from "react-icons/fa";

interface SubMenu {
  label: string;
  url: string;
}

interface Navlink {
  label: string;
  url?: string;
  icon?: JSX.Element;
  subMenu?: SubMenu[];
}

const navlink: Navlink[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Amazon",
    icon: <FaAngleDown />,
    subMenu: [
      { label: "Amazon FBA Wholesale Service Provider", url: "/amazonfba" },
      { label: "Amazon Sales Promotion", url: "/amazonsell" },
      { label: "Amazon Listing Optimization", url: "/amazonlist" },
      { label: "Enhanced Brand Content (EBC)", url: "/enhancedbrand" },
      { label: "Amazon Ratings Service (No Text)", url: "/amazonrating" },
      { label: "Amazon Review Management", url: "/amazonreview" },
      { label: "Amazon Bad Review Management", url: "/amazonbadreview" },
      { label: "Amazon Helpful Votes", url: "/amazonhelp" },
      { label: "Keyword Rank Management", url: "/keywordrank" },
      { label: "Standard Amazon Listing Copy", url: "/standardlist" },
    ],
  },
  {
    label: "Walmart",
    icon: <FaAngleDown />,
    subMenu: [
      { label: "Walmart Marketplace Management Service", url: "/walmartmarketplace" },
      { label: "Walmart Reviews Syndication", url: "/walmartreview" },
      { label: "Walmart Ratings Service", url: "/walmartrating" },
      { label: "Walmart Seller Feedback Service", url: "/walmartseller" },
    ],
  },
  { label: "eBay", url: "/ebay" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full md:h-[100px] h-[60px] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-between z-50 ${
        open ? "bg-slate-600" : ""
      } ${isScroll ? "bg-[#c0c0c0] top-0 h-[66px] md:h-[96px] shadow-md text-[#2b133f]" : "bg-[#dddddd] text-[#0f0f0f]"}`}
    >
      {/* Logo */}
      <Link href="/" onClick={() => setOpen(false)}>
        <Image src={logo} alt="logo" width={200} height={200} priority={true} />
      </Link>
      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8">
        {navlink.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {item.url ? (
              <Link
                href={item.url}
                className={`hover:text-orange-600 font-semibold font-secondery uppercase ${
                  pathname === item.url ? "text-orange-600" : ""  //  when url and icon active pathname 
                }`}
                onClick={() => setHoverIndex(null)}
              >
                {item.label}
                {item.icon && <span className="ml-1">{item.icon}</span>}
              </Link>
            ) : (
              <span className="hover:text-orange-600 font-semibold font-secondery uppercase cursor-pointer flex items-center">
                {item.label}
                {item.icon && <span className="ml-1 hover:rotate-180">{item.icon}</span>}
              </span>
            )}
            {item.subMenu && hoverIndex === index && (
              <div className="absolute left-0 top-[24px] flex flex-col bg-white shadow-lg py-2 z-20">
                {item.subMenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.url}
                    onClick={() => setHoverIndex(null)}
                    className={`px-4 py-2 hover:bg-slate-600 hover:text-white whitespace-nowrap ${
                      pathname === subItem.url ? "bg-slate-600 text-white" : ""
                    }`}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>{open ? <IoClose size={28} /> : <IoMenu size={28} />}</button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className={`fixed inset-0 top-[60px] bg-gray-800 bg-opacity-10 z-10 flex justify-end ${isScroll ? "top-[66px]":""}`}>
          <nav className="bg-gray-300 w-full h-full p-5 space-y-4 overflow-auto">
            {navlink.map((item, index) => (
              <div key={index} className="relative">
                {item.url ? (
                  <Link
                    href={item.url}
                    className={`hover:text-orange-600 font-semibold font-secondery uppercase ${
                      pathname === item.url ? "text-orange-600" : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="w-full text-left hover:bg-gray-300 flex items-center justify-between"
                      onClick={() =>
                        setActiveMenu((prev) => (prev === item.label ? null : item.label))
                      }
                    >
                      <span className="hover:text-orange-600 font-semibold font-secondery uppercase cursor-pointer">
                        {item.label}
                      </span>
                      {item.icon}
                    </button>
                    {activeMenu === item.label && item.subMenu && (
                      <div className="flex flex-col space-y-2 mt-2">
                        {item.subMenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.url}
                            className={`text-sm hover:bg-slate-600 hover:text-white py-2 px-4 ${
                              pathname === subItem.url ? "bg-slate-600 text-white" : ""
                            }`}
                            onClick={() => setOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
