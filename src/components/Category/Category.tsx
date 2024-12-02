import Image from "next/image";
import image6 from "@/assets/latest/Item6.png";
import image3 from "@/assets/latest/Item2.png";
import alarmClock from "@/assets/alarm-clock-clock-svgrepo-com.svg";
import arrow from "@/assets/Arrow Slide.png";
import hand from "@/assets/hand-removebg-preview.png";
import pleat from "@/assets/Pleat.png";
import { latestItems } from "@/lib/constants";
import HeartSvg from "../ui/HeartSvg";

const Category = () => {
  return (
    <section className="container mx-auto flex gap-6">
      {/* first card */}
      <div className="p-5 !w-[448px] !h-[841px] border-color-dark90 border rounded-2xl flex flex-col justify-center gap-[1.344rem] relative">
        <p className="text-[32px] text-white font-bold tracking-widest">
          Check out the hottest Sale offers
        </p>
        <div className="flex gap-10 overflow-hidden ">
          <div className="min-w-[212px] !h-[504px] space-y-3">
            <Image
              className="w-[212px] h-[355px]"
              src={image6}
              alt="Fames habitasse risus ultricies tortor sit"
            />
            <p className="text-[16px] text-white">
              Fames habitasse risus ultricies tortor sit
            </p>

            <div className="flex justify-between items-center">
              <p className="text-white/80 text-sm">
                <Image
                  src={alarmClock}
                  alt="alarm"
                  className="inline-block mr-2"
                  width={16}
                />
                22:59
              </p>
              <div className=" bg-color-purpleLight/15 p-2   rounded">
                <p className=" text-color-purpleLight text-center">2.55 ETH</p>
              </div>
            </div>
            <div className="mt- border-b border-color-dark90" />
          </div>
          {/* second sub card */}
          <div className="min-w-[212px] !h-[504px] space-y-3 opacity-40">
            <Image
              className="w-[212px] h-[355px]"
              src={image3}
              alt="Fames habitasse risus ultricies tortor sit"
            />
            <p className="text-[16px] text-white">
              Fames habitasse risus ultricies tortor sit
            </p>

            <div className="flex justify-between items-center">
              <p className="text-white/80 text-sm">
                <Image
                  src={alarmClock}
                  alt="alarm"
                  className="inline-block mr-2"
                  width={16}
                />
                22:59
              </p>
              <div className=" bg-color-purpleLight/15 p-2   rounded">
                <p className=" text-color-purpleLight text-center">2.55 ETH</p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={arrow}
          alt="navigation"
          className="absolute right-0 top-64 cursor-pointer "
        />
        <button className="mt-20 secondaryBtn">Show me more</button>
      </div>

      {/* second card */}

      <div className="p-5 !w-[448px] !h-[841px] border-color-dark90 border-t-0 border border-l-0 rounded-2xl rounded-tl-none flex flex-col justify-center gap-[1.344rem] bg-gradient-to-t from-black to-[#1D1D2A] relative">
        {/* border left from top to 14rem */}
        <div className="absolute left-0 top-0 h-[24rem] w-[1.5px] bg-[#1D1D2A]" />

        {/* border left from top-14rem to bottom */}
        <div className="absolute bottom-0 left-0 top-96 border-l border-color-dark90" />
        {/* pleat */}
        <Image
          src={pleat}
          alt="pleat"
          className="absolute -top-[20px] -left-0"
        />

        <figure className="-mt-[7rem] ">
          <Image
            src={hand}
            alt="Get started creating & selling your NFTs"
            className="w-[448px] h-[644px]"
          />
        </figure>

        <div className="">
          <p className="text-[24px] font-semibold text-white">
            Get started creating& selling your NFTs
          </p>
          <p className="text-[14px] text-color-dark90 mt-6">
            Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat.
            Mi est sit.
          </p>
        </div>
        <button className="primaryBtn mt-6">Get Started</button>
      </div>

      {/* third card */}

      <div className="p-5 !w-[448px] !h-[841px] border-color-dark90 border rounded-2xl flex flex-col justify-center gap-[1.344rem]">
        <p className="text-[32px] text-white font-bold tracking-wider">
          Top NFT at a lower price
        </p>

        <div className=" space-y-5">
          {latestItems.slice(0, 4).map((item) => (
            <div className="flex items-center" key={item.id}>
              <figure className="w-1/2">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="!w-[120px] h-[120px] rounded-3xl"
                />
              </figure>
              <div>
                <p className="text-white">{item.title}</p>
                <div className="flex justify-between items-center">
                  <p className="text-white/80 text-sm">
                    <Image
                      src={alarmClock}
                      alt="alarm"
                      className="inline-block mr-2"
                      width={16}
                    />
                    22:59
                  </p>
                  <div className=" bg-color-purpleLight/15 p-2   rounded">
                    <p className=" text-color-purpleLight text-center">
                      2.55 ETH
                    </p>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <HeartSvg isFav={item.isFav} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-20 secondaryBtn">Show me more</button>
      </div>
    </section>
  );
};
export default Category;
