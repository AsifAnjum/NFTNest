import Image from "next/image";
import hero1 from "@/assets/hero1.svg";
import hero2 from "@/assets/hero2.svg";
import searchIcon from "@/assets/Search Icon.png";
import vector1 from "@/assets/Vector1.png";
import vector2 from "@/assets/Vector2.png";
import vector3 from "@/assets/Vector3.png";
import vector4 from "@/assets/Vector4.png";
import square1 from "@/assets/Square 01.png";
import square2 from "@/assets/Square 02.png";
import square3 from "@/assets/Square 03.png";
import square4 from "@/assets/Square 04.png";
import square5 from "@/assets/Square 05.png";
import square6 from "@/assets/Square 06.png";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      {/* <!-- orbit/circle  --> */}

      <div className="absolute ">
        <div className="absolute top-1/2 left-1/2 w-[81rem] h-[81rem] aspect-square bg-gradient-to-t from-black  via-[#0B0B21]  to-black   rounded-full -translate-x-1/2 -translate-y-1/2"></div>

        <div className="absolute top-1/2 left-1/2 w-[80rem] aspect-square border-[0.5px] rounded-full -translate-x-1/2 -translate-y-1/2 border-color-dark90/30" />
        <div className="absolute top-1/2 left-1/2 w-[75rem] aspect-square border rounded-full -translate-x-1/2 -translate-y-1/2 border-color-dark90/40" />
        <div className="absolute top-1/2 left-1/2 w-[70rem] aspect-square border-2 rounded-full -translate-x-1/2 -translate-y-1/2 border-color-dark90/40" />
        <div className="absolute top-1/2 left-1/2 w-[60rem] aspect-square border-2 border-dashed rounded-full -translate-x-1/2 -translate-y-1/2 border-color-dark90/40" />
        <div className="absolute top-1/2 left-1/2 w-[50rem] aspect-square border rounded-full -translate-x-1/2 -translate-y-1/2 border-color-dark90/40" />
        <div className="absolute top-1/2 left-1/2 w-[40rem] aspect-square border rounded-full -translate-x-1/2 -translate-y-1/2 border-color-dark90/50" />
        <div className="absolute top-1/2 left-1/2 w-[35rem] aspect-square border rounded-full -translate-x-1/2 -translate-y-1/2 border-color-dark90/50" />
        <div className="absolute top-1/2 left-1/2 w-[25rem] aspect-square border rounded-full -translate-x-1/2 -translate-y-1/2 border-color-dark90/50" />
      </div>

      <div className="relative z-50 mt-36">
        <div className="ml-14">
          <p className="ml-44 text-color-grey100">Non Fungible Tokens</p>
          <p className="inline-block text-white text-8xl">A new NFT</p>
          <Image src={hero1} alt="hero" className="inline -mt-10" />
          <br />
          <Image src={hero2} alt="hero" className="inline -mt-10" />
          <p className="inline text-white text-8xl">Experience</p>
          <p className="mt-10 ml-44 text-color-grey100">
            Discover, collect and sell
          </p>

          <div className="flex items-center justify-between px-4 py-4 mt-10 ml-16 space-x-2 bg-white border-2 rounded-lg w-[28rem]">
            <input
              type="text"
              name="search"
              placeholder="items, collections and creators"
              className="focus:outline-none"
            />
            <select
              name=""
              className="border-l text-slate-600/85 focus:outline-none border-l-slate-500"
              id=""
            >
              <option value="">Category</option>
              <option value="">Collections</option>
              <option value="">Creators</option>
            </select>
            <Image src={searchIcon} alt="search" className="inline-block w-4" />
          </div>

          <div className="flex justify-between mt-48 ml-16">
            <Image src={vector1} alt="" className="w-[85px] h-[45px]" />
            <Image src={vector2} alt="" className="w-[85px] h-[45px]" />
            <Image src={vector3} alt="" className="w-[85px] h-[45px]" />
            <Image src={vector4} alt="" className="w-[66px] h-[45px]" />
          </div>
        </div>
      </div>

      <div className="">
        <Image
          src={square1}
          alt="eth"
          className="absolute top-36 right-[17rem] h-[120px] w-[120px]"
        />
        <Image
          src={square2}
          alt="eth"
          className="absolute left-[17rem] top-56 h-[120px] w-[120px]"
        />
        <Image
          src={square3}
          alt="eth"
          className="absolute top-96 right-64 h-[120px] w-[120px]"
        />
        <Image
          src={square4}
          alt="eth"
          className="absolute left-[29rem] top-[30rem] h-[120px] w-[120px]"
        />
        <Image
          src={square5}
          alt="eth"
          className="absolute top-[71%] right-[25%] h-[120px] w-[120px]"
        />
        <Image
          src={square6}
          alt="eth"
          className="absolute -left-2 top-[38rem] h-[120px] w-[120px]"
        />
      </div>
    </section>
  );
};
export default Hero;
