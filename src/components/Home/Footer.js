import footer from "../images/white-header.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#1D1D1E] pt-[62px]  pb-[90px] pl-[35px] md:pl-[90px] text-[#F7F7F7] flex  grid grid-cols-2 gap-10  md:grid-cols-4  md:flex-wrap  ">
      <div>
        <div className=" mb-[35px] md:mb-[96px]">
          <img src={footer} alt="" />
        </div>
        <div className="flex mb-[45px] md:mb-[55px]">
          <img src={facebook} alt="" className="pr-[36px]" />
          <img src={instagram} alt="" className="pr-[36px]" />
          <img src={twitter} alt="" className="pr-[36px]" />
        </div>
        <div>
          <span>&#169; 2022 Metabnb</span>
        </div>
      </div>

      {/* ############# */}

      <div>
        <ul>
          <li className="font-bold text-[18px] pb-[23px]">Community</li>
          <li className="pb-[16px]">NFT</li>
          <li className="pb-[16px]">Tokens</li>
          <li className="pb-[16px]">Landlords</li>
          <li >Discord</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="font-bold text-[18px] pb-[23px]">Places</li>
          <li className="pb-[16px]">Castle</li>
          <li className="pb-[16px]">Farms </li>
          <li className="pb-[16px]">Beach</li>
          <li className="pb-[16px]">Learn more</li>
        </ul>{" "}
      </div>
      <div>
        <ul>
          <li className="font-bold text-[18px] pb-[23px]">About us</li>
          <li className="pb-[16px]">Road map</li>
          <li className="pb-[16px]">Creators </li>
          <li className="pb-[16px]">Career</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
