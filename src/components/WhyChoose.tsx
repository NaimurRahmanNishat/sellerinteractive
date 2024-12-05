import React from 'react'
import Image from 'next/image'
import chooseusimg from "../../public/chooseusimg.png";
import whitebg from "../../public/whitebg.png";

const WhyChoose = () => {
  return (
    <div className="w-full h-[1000px] bg-cover bg-center" style={{backgroundImage:`url(${whitebg})`}}>
    <h1 className="flex items-center justify-center md:pt-20 pt-10 font-bold text-4xl text-black/80 md:pb-5 pb-3">
      Why Choose Us
    </h1>
    <p className="text-gray-500 md:text-center">
      We claim to be one of the promising market analysts who understand
      every ins and outs of marketing policy and management of Amazon and
      Walmart services. We can take full care of your FBA, FBM to keep you
      concentrated to your growth. Alongside PPC, we rely on organic boost
      up method to generate sales, profit, reputation and permanence of
      your business, and therefore boost your Amazon business permanently.{" "}
    </p>
    <div className="flex items-center justify-center md:pt-16 pt-8">
      <Image src={chooseusimg} alt="chooseus" width={768} height={600} />
    </div>
  </div>
  )
}

export default WhyChoose;



