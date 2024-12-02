import Image from "next/image";
import logo from "@/assets/logo.png";
const Footer = () => {
  return (
    <div className="container mx-auto border border-color-dark90 rounded-2xl ">
      <div className="grid grid-cols-3 divide-x divide-color-dark90 h-[397px]">
        <div className="p-8 flex gap-5 ">
          <Image src={logo} alt="NFT" className="w-[34px] h-[34px]" />
          <p className="text-white  font-bold text-3xl">NFT Market</p>
        </div>
        <div className="p-8 text-white space-y-4">
          <p>Auctions</p>
          <p>Roadmap</p>
          <p>Discover</p>
          <p>Community</p>
          <button className="primaryBtn !p-4 !mt-14">My account</button>
        </div>
        <div className="p-10 flex place-items-end justify-center">
          <div className="bg-white border-2 rounded-lg p-3 ">
            <input
              type="text"
              placeholder="Newsletter"
              className="focus:outline-none w-[20rem]"
            />
            <p className="text-color-purpleLight font-semibold inline">
              Sign in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
