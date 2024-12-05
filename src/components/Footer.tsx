import logo from "../../public/logo.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <main className="w-full h-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-cover bg-center" style={{backgroundImage:`url(/footerbg.png)`}}>
      <div className="grid md:grid-cols-4 grid-cols-1">
        {/* first section */}
        <div>
          <Image src={logo} alt="logo" width={160} height={160} className="text-white flex items-center justify-center"/>
          <p className="text-white md:text-start text-center">Your Amazon, Walmart, eBay Brand Promoter, Sales Booster, and Digital Marketing Service Provider.</p>
          <div className="flex flex-row items-center md:justify-start justify-center gap-4 pt-5 pb-5">
          <FaTwitter size={36} className="text-blue-600 hover:text-white"/>
          <FaFacebook className="hover:text-blue-600 text-white cursor-pointer" size={36} />
          <FaYoutube className="text-red-600 hover:text-red-700 cursor-pointer" size={36} />
          <FaSquareInstagram className="text-orange-500 cursor-pointer" size={36} />
          </div>
        </div>
        {/* secont section */}
        <div className="pt-8 flex flex-col items-center md:justify-start md:items-start justify-center">
          <h2 className="text-2xl text-orange-600">Information</h2>
          <div className="flex flex-col gap-3 pt-2 text-white">
            <Link href={"/about"} className="hover:text-orange-400">About Us</Link>
            <Link href={"/services"} className="hover:text-orange-400">Services</Link>
            <Link href={"/contact"} className="hover:text-orange-400">Contact</Link>
            <Link href={"/termsofservices"} className="hover:text-orange-400">Terms of Services</Link>
            <Link href={"/privacypolicy"} className="hover:text-orange-400">Privacy Policy</Link>
          </div>
        </div>
        {/* third section */}
        <div className="pt-8">
          <div className="">
            <h2 className="text-2xl text-orange-600">Contact Us</h2>
            <p>anisul islam</p>
          </div>
        </div>
        {/* fourth section */}
      </div>
    </main>
  );
};

export default Footer;
