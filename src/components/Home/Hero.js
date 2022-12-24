import blocks from "../images/blocks.png";
import token from "../images/token.png";
import fox from "../images/fox.png";
import boat from "../images/boat.png";

const Hero = () => {
  return (
    <>
      <div className=" max-w-md ml-3 mr-2 mt-8 mb-[67px] md:flex md:max-w-none justify-around md:mt-[138px]">
        <div>
          <h1 className="text-[2rem] font-semibold mb-[40px]">
            Rent a <span className="text-[#A02279]">Place</span> away from{" "}
            <br /> <span className="text-[#A02279]">Home</span> in the{" "}
            <span className="text-[#A02279] pb-[48px]">Metaverse</span>
          </h1>
          <p className="mb-[48px] leading-5 text-[#434343] md:leading-6">
            we provide you access to luxury and affordable houses <br /> in the
            metaverse, get a chance to turn your <br /> imagination to reality
            at your comfort zone
          </p>
          <div className=" mb-[40px] text-center">
            <input
              type="text"
              placeholder="Search for location"
              className=" border-4 py-[16px] pl-[15px] pr-auto rounded-l-lg md:w-[350px]"
            />
            <button className="bg-[#A02279] py-[18px] pl-[15px] pr-6 rounded-r-lg text-[#FFFFFF] md:w-[190px]">
              Search
            </button>
          </div>
        </div>
        <div>
          <img src={blocks} alt="blocks" />
        </div>
      </div>

      <div className="flex flex-col items-center mb-[3rem] bg-[#A02279] pb-12 md:flex-row justify-around md:pb-0 md:h-[70px] ">
        <div className="flex items-center mt-12 md:relative bottom-4">
          <img src={token} alt="" />
          <h1 className="text-[38px] text-white ">MBToken</h1>
        </div>
        <div className="mt-12 md:relative bottom-4">
          {" "}
          <img src={fox} alt="" />
        </div>
        <div className="mt-12 md:relative bottom-4">
          {" "}
          <img src={boat} alt="" />
        </div>
      </div>
      <h1 className="text-center font-bold text-[48px]">
        Inspiration for your next adventure
      </h1>
    </>
  );
};

export default Hero;
