"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import herofirstimg from "../../public/herofirstimg.png";
import chooseusimg from "../../public/chooseusimg.png";
import herorelative1 from "../../public/herorelative1.png";
import herorelative2 from "../../public/herorelative2.png";
import herorelative3 from "../../public/herorelative3.png";
import Poe from "../../public/Poe.png";
import nity from "../../public/nity.png";
import wells from "../../public/wells.png";
import faqimg from "../../public/faqimg.png";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import Link from "next/link";
const Page = () => {
  // open text
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "Can I get monthly services?",
      answer:
        "We have both one-time and monthly basis services. You can choose whatever your preference is.",
    },
    {
      question: "Do you provide services other than Amazon?",
      answer:
        "Yes, we provide multi-platform services like Amazon, Walmart, eBay.",
    },
    {
      question: "How much time does it take to start any process?",
      answer: "We start as soon as you confirm the work order.",
    },
  ];

  // Our services button.
  const servicesRef = useRef<HTMLDivElement>(null);

  const handleViewServicesClick = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // background image start
  const [bgIndex, setBgIndex] = useState<number>(0);
  const heroBgImage = ["/bg1.png", "/bg2.jpg"];
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % heroBgImage.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [heroBgImage.length]);
  // background image end

  // hero text show down start
  const herotext = "Permanently Boost Your Amazon, Walmart, eBay Business";
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [visibleWords, setVisibleWords] = useState<string>("");
  const [isClearing, setIsClearing] = useState<boolean>(false);
  useEffect(() => {
    if (isClearing) {
      const clearTimeoutId = setTimeout(() => {
        setVisibleWords("");
        setCurrentWordIndex(0);
        setIsClearing(false);
      }, 500);
      return () => clearTimeout(clearTimeoutId);
    }
    const words = herotext.split("");
    const wordInterval = setInterval(() => {
      setVisibleWords((prev) => prev + words[currentWordIndex]);
      setCurrentWordIndex((prevIndex) =>
        prevIndex + 1 < words.length ? prevIndex + 1 : 0
      );
      if (currentWordIndex + 1 === words.length) {
        setIsClearing(true);
        clearInterval(wordInterval);
      }
    }, 100);
    return () => clearInterval(wordInterval);
  }, [currentWordIndex, isClearing, herotext]);
  // hero text show down end

  return (
    <main
      style={{ backgroundImage: `url(${heroBgImage[bgIndex]})` }}
      className="bg-cover bg-center w-full h-full"
    >
      {/* hero top section start */}
      <div className="pt-[60px] md:pt-[100px] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full">
        <div className="">
          <h3 className="flex items-center justify-center md:pt-20 pt-10 text-white font-bold pb-1 md:pb-6 text-xl md:text-3xl">
            Now is The Time
          </h3>
          <div className="pt-2 pb-5 h-[140px] w-full">
            <h1 className="flex-col md:flex-row font-bold text-center text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-600 ">
              {visibleWords}
            </h1>
          </div>
          <div className="flex items-center justify-center gap-10 pt-5">
            <a
              // href="/#"
              onClick={handleViewServicesClick}
              className="px-3 py-2 bg-black text-white rounded-md hover:bg-orange-600 cursor-pointer"
            >
              <span>View Services</span>
            </a>
            <Link
              href="/contact"
              className="px-3 py-2 bg-black text-white rounded-md hover:bg-orange-600 cursor-pointer"
            >
              <span>Contact Us</span>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={herofirstimg}
              alt="heroimg"
              width={768}
              height={400}
              className="pt-10 md:pt-20"
            />
          </div>
        </div>
      </div>
      {/* hero top section end */}

      {/* Why Choose Us section start */}
      <div
        className="w-full h-full bg-cover bg-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pb-16 pt-5"
        style={{ backgroundImage: `url(/whitebg.png)` }}
      >
        <h1 className="flex items-center justify-center md:pt-20 pt-10 font-bold text-4xl text-black/80 md:pb-5 pb-3">
          Why Choose Us
        </h1>
        <p className="text-gray-500 md:text-center">
          We claim to be one of the promising market analysts who understand
          every ins and outs of marketing policy and management of Amazon and
          Walmart services. We can take full care of your FBA, FBM to keep you
          concentrated to your growth. Alongside PPC, we rely on organic boost
          up method to generate sales, profit, reputation and permanence of your
          business, and therefore boost your Amazon business permanently.{" "}
        </p>
        <div className="flex items-center justify-center md:pt-16 pt-8">
          <Image src={chooseusimg} alt="chooseus" width={768} height={600} />
        </div>
      </div>
      {/* Why Choose Us section end */}

      {/* Our Services section start */}
      <div
        className="w-full h-full bg-cover bg-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pb-16 pt-5"
        style={{ backgroundImage: `url(/whitebg.png)` }}
      >
        <div
          ref={servicesRef}
          className="shadow-2xl shadow-black rounded-md mt-12 relative h-full"
        >
          <h1 className="flex items-center justify-center pt-10 md:pt-20 text-3xl md:text-5xl font-bold md:pb-6 pb-3 text-black/75">
            Our Services
          </h1>
          <p className="text-center px-2 text-gray-600 pb-5 md:pb-10">
            We have a wide array of services. Choose one, choose all.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 px-3">
            <div className="relative shadow-2xl rounded-md z-10">
              <div className="flex items-center justify-center pt-4 pb-4">
                <Image
                  src={herorelative1}
                  alt="herorelative1image"
                  width={56}
                  height={56}
                />
              </div>
              <h3 className="flex items-center justify-center text-xl text-center font-semibold pb-2 text-blue-950">
                Amazon Seller Account Management
              </h3>
              <p className="text-gray-500 text-center px-2 pb-4">
                Seller Account Management service liberates you from keeping an
                ever open eye on your Amazon Seller Account. We can take care of
                that. From sales promotion to dispute management, we can
                virtually be your eyes and brain. Let us take charge of your
                store and get steady up moving profit while you plan your next
                big thing.
              </p>
              <div className="flex items-center justify-center pb-4">
                <Link
                  href="/amazonsell"
                  className="flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white"
                >
                  See More
                </Link>
              </div>
            </div>
            <div className="relative shadow-2xl rounded-md z-10">
              <div className="flex items-center justify-center pt-4 pb-4">
                <Image
                  src={herorelative2}
                  alt="herorelative1image"
                  width={56}
                  height={56}
                />
              </div>
              <h1 className="flex items-center justify-center text-xl text-center font-semibold pb-2 text-blue-950">
                Amazon Sales Promotions
              </h1>
              <p className="text-gray-500 text-center px-2 pb-4">
                Customers like sellers offering promotional offers. We at
                sellerssoft know how and when is the right time to do so. Our
                team can generate the sales metrics to figure out the best sales
                promotion options for different products. Sales Promotion can
                attract great traffic and with a combined effort they can
                convert. Lets get to it now!
              </p>
              <div className="flex items-center justify-center pb-4">
                <Link
                  href="/amazonsell"
                  className="flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white"
                >
                  See More
                </Link>
              </div>
            </div>
            <div className="relative shadow-2xl rounded-md z-10">
              <div className="flex items-center justify-center pt-4 pb-4">
                <Image
                  src={herorelative3}
                  alt="herorelative1image"
                  width={56}
                  height={56}
                />
              </div>
              <h1 className="flex items-center justify-center text-xl text-center font-semibold pb-2 text-blue-950">
                Amazon Listing Optimization
              </h1>
              <p className="text-gray-500 text-center px-2 pb-4">
                We infuse the best visibility and performance mechanics to
                optimize your product description to an alluring level that will
                make potential customers to feel the insatiable thirst to buy
                your products, and not others. With the most relevant keyword
                research, optimized title, attribute, Q&A we show the best pose
                of your product that makes money for you.
              </p>
              <div className="flex items-center justify-center pb-4">
                <Link
                  href="/amazonlist"
                  className="flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white"
                >
                  See More
                </Link>
              </div>
            </div>
            <div className="relative shadow-2xl rounded-md z-10">
              <div className="flex items-center justify-center pt-4 pb-4">
                <Image
                  src={herorelative2}
                  alt="herorelative1image"
                  width={56}
                  height={56}
                />
              </div>
              <h1 className="flex items-center justify-center text-xl text-center font-semibold pb-2 text-blue-950">
                Amazon Enhanced Brand Content
              </h1>
              <p className="text-gray-500 text-center px-2 pb-4">
                A+ content description offer the service of enhancing your
                product description to a more promising and lucrative level with
                more info, HD images, infographics, charts, videos. More
                description means more relevant info that you cannot add to your
                bullet points but want to. Now is your chance.
              </p>
              <div className="flex items-center justify-center pb-4">
                <Link
                  href="/enhancedbrand"
                  className="flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white"
                >
                  See More
                </Link>
              </div>
            </div>
            <div className="relative shadow-2xl rounded-md z-10">
              <div className="flex items-center justify-center pt-4 pb-4">
                <Image
                  src={herorelative1}
                  alt="herorelative1image"
                  width={56}
                  height={56}
                />
              </div>
              <h1 className="flex items-center justify-center text-xl text-center font-semibold pb-2 text-blue-950">
                Amazon PPC Management
              </h1>
              <p className="text-gray-500 text-center px-2 pb-4">
                With our dedicated team of Amazon Market Specialists, get a
                planned sponsored advertisement plan show yourself everywhere on
                Amazon. We provide Product Advertising Suggestions, Campaign
                Strategy Development, Campaign Setup, Negative Keyword Research,
                Ad Creation, Management of both Automatic and Manual Campaigns.
              </p>
              <div className="flex items-center justify-center pb-4">
                <Link
                  href="/ppccampaign"
                  className="flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white"
                >
                  See More
                </Link>
              </div>
            </div>
            <div className="relative shadow-2xl rounded-md z-10">
              <div className="flex items-center justify-center pt-4 pb-4">
                <Image
                  src={herorelative3}
                  alt="herorelative1image"
                  width={56}
                  height={56}
                />
              </div>
              <h1 className="flex items-center justify-center text-xl text-center font-semibold pb-2 text-blue-950">
                Amazon Keyword Rank Management
              </h1>
              <p className="text-gray-500 text-center px-2 pb-4">
                Make your amazing product page visible on top search result with
                our Amazon Listing Optimization services. We provide the best
                service to increase your product visibility, Click Through
                Rate(CTR), Conversion Rate (CR) and so on. No gimmick; we do
                things the hard and permanent way. Get your product to show on
                top. Guaranteed.
              </p>
              <div className="flex items-center justify-center pb-4">
                <Link
                  href="/keywordrank"
                  className="flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-10 flex items-center justify-center pb-10">
            <Link
              href="/services"
              className="flex items-center justify-center text-white bg-blue-600 md:px-8 md:py-4 px-4 py-2 rounded-lg"
            >
              View Full List
            </Link>
          </div>
        </div>
      </div>
      {/* Our Services section end */}

      {/* What Clients Say section start */}
      <div className="">
        <div
          className="w-full h-full bg-cover bg-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64"
          style={{ backgroundImage: `url(/bg6.png)` }}
        >
          <h1 className="md:pt-12 pt-6 text-[#9434ac] md:text-4xl text-3xl font-bold text-center">
            What Clients Say
          </h1>
          <p className="text-white text-xl pt-2 text-center">
            Some of our happy customers shared their views about services.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-2">
            {/* left side */}
            <div className="bg-white rounded-md md:mt-10 md:mb-10 mt-5">
              <i className="px-3 text-center flex items-center justify-center mt-2">
                `After getting this team, my sales problems lessened visibly.
                They are very polite and professional. Support is great!`
              </i>
              <div className="flex items-center justify-center mt-5 mb-5">
                <Image src={Poe} alt="wellsimg" width={70} height={70} />
              </div>
              <h3 className="flex items-center justify-center font-secondery text-xl">
                Otis Poe
              </h3>
              <p className="flex items-center justify-center text-gray-400 mb-6 mt-1">
                Amazon Seller
              </p>
            </div>
            {/* middle */}
            <div className="bg-white rounded-md md:mt-10 md:mb-10 mt-5">
              <i className="text-center flex items-center justify-center px-2 pt-2">
                `Very open to negotiation. Service was as promised. Their
                forecast about my next big thing was exact.`
              </i>
              <div className="flex items-center justify-center mt-5 mb-5">
                <Image src={nity} alt="wellsimg" width={70} height={70} />
              </div>
              <h3 className="flex items-center justify-center font-secondery text-xl">
                Unity Andrews
              </h3>
              <p className="flex items-center justify-center text-gray-400 mb-6 mt-1">
                Amazon Seller
              </p>
            </div>
            {/* right side */}
            <div className="bg-white rounded-md md:mt-10 md:mb-10 mt-5 mb-10">
              <i className="text-center flex items-center justify-center px-2 pt-2">
                `Rapid service. Great output. Before starting they gave me a
                free audit that was helpful.`
              </i>
              <div className="flex items-center justify-center mt-5 mb-5">
                <Image src={wells} alt="wellsimg" width={70} height={70} />
              </div>
              <h3 className="flex items-center justify-center font-secondery text-xl">
                Christian Wells
              </h3>
              <p className="flex items-center justify-center text-gray-400 mb-6 mt-1">
                Amazon Seller
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* What Clients Say section end */}

      {/* FAQ section start */}
      <div
        style={{ backgroundImage: `url(/whitebg.png)` }}
        className="w-full h-full bg-cover bg-center"
      >
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <Image src={faqimg} alt="faqimage" width={545} height={490} />
            <div className="md:pt-20">
              <h1 className="text-4xl text-center md:text-left">FAQ</h1>
              <p className="text-gray-400 md:pt-4 pt-2">
                We know customers have different questions that pop up
                sometimes. Please, refer to this section.
              </p>
              <div>
                {faqs.map((faq, index) => (
                  <div
                    className="relative flex flex-col border-b pt-4 pb-4"
                    key={index}
                  >
                    <button
                      onClick={() => handleToggle(index)}
                      className="flex items-center justify-between w-full"
                    >
                      <p
                        className={`text-left ${
                          openIndex === index ? "text-orange-600" : "text-black"
                        }`}
                      >
                        {faq.question}
                      </p>
                      {openIndex === index ? (
                        <FiMinus className="text-orange-600" />
                      ) : (
                        <GoPlus className="text-orange-600" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                        openIndex === index
                          ? "max-h-[200px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                      style={{ transitionProperty: "max-height, opacity" }}
                    >
                      <p className="text-slate-400 pt-4">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:pt-2 pt-4">
            <Link
              href="/contact"
              className="items-center justify-center px-6 py-3 bg-slate-500 hover:bg-slate-700 text-white rounded mb-5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      {/* FAQ section end */}
    </main>
  );
};

export default Page;
