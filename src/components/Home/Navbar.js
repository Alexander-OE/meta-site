import header from "../images/header.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <nav>
      <div className="flex md:justify-around items-center pt-5 w-full">
      <div className="mb-8 mt-4">
          <img src={header} alt="mini-house" />
        </div>
        <ul className="hidden md:flex">
          <li className="pl-10">Home</li>
          <li className="pl-10">Place to stay</li>
          <li className="pl-10">NFTs</li>
          <li className="pl-10">Community</li>
        </ul>
        <div className="hidden md:flex">
          <button className="bg-[#A02279] px-4 py-3 rounded-lg text-[#FFFFFF] ">
            Connect wallet
          </button>
        </div>

        <div className="pl-[7.5rem] md:hidden" onClick={()=>{setOpen(!open)}}>
            {!open ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
      </div>

      {/* ########################################## */}
      <div className={!open ? "hidden" : "absolute bg-[#A02279]  w-full px-4"}>
        <ul className="md:hidden">
          <li className="pt-6  pl-5 pb-4 text-2xl text-white font-medium border-b-4">Home</li>
          <li className="pt-6  pl-5 pb-4 text-2xl text-white font-medium border-b-4">Place to stay</li>
          <li className="pt-6  pl-5 pb-4 text-2xl text-white font-medium border-b-4">NFTs</li>
          <li className="pt-6  pl-5 pb-4 text-2xl text-white font-medium border-b-4">Community</li>
        </ul>
        <div className="mt-5 pl-5 pb-4 text-2xl font-medium ">
          <button className="bg-[#A02279] px-4 py-3 rounded-lg border-4 text-[#FFFFFF] md:hidden">
            Connect wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
