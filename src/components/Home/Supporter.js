import blocks from "../images/side-block.png"

const Supporter = () => {
  return (
    <div className="bg-[#A02279]">
      <div className="grid md:grid-cols-2 pt-[189px] md:flex items-start">
        <div className=" mr-4 md:ml-32 md:mt-28 text-center">
            <h1 className="text-[48px] font-bold text-[#FFFFFF] mb-[20px] ">Metabnb NFTs</h1>
            <p className="text-[18px] text-[#FFFFFF] mb-[21px] md:w-[25rem] leading-8">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <div className="relative md:right-[5rem]">
                <button className="text-[#A02279] bg-white py-3 px-10 rounded hover:cursor-pointer hover:bg-[#A02279] hover:border-solid hover:border-2 hover:text-white duration-100 delay-100">Learn more</button>
            </div>
        </div> 
        <div className="mt-12 w-[20rem] pl-8 mb-32 md:w-full">
            <img src={blocks} alt="side-block" />
        </div>
      </div>
    </div>
  );
};

export default Supporter;
