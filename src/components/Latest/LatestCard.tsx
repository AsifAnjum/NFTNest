import { LatestItem } from "@/lib/constants";
import alarmClock from "@/assets/alarm-clock-clock-svgrepo-com.svg";
import Image from "next/image";
import HeartSvg from "../ui/HeartSvg";

const LatestCard = ({ item }: { item: LatestItem }) => {
  return (
    <div className="latestCard">
      <figure className="">
        <Image
          src={item.image}
          className="!w-[400px] !h-[520px]"
          alt={item.title}
        />
      </figure>
      <div className="flex ">
        <p className="text-white text-xl">{item.title}</p>
        <div className="w-5/12 bg-color-purpleLight/15 h-10 rounded">
          <p className=" text-color-purpleLight text-center mt-2">
            {item.price} ETH
          </p>
        </div>
      </div>

      <p className="text-white/80 text-sm">
        <Image
          src={alarmClock}
          alt="alarm"
          className="inline-block mr-2"
          width={16}
        />
        {item.time} min left
      </p>

      <div className="border-b border-slate-600 " />

      <div className="flex justify-between text-color-grey100 items-center">
        <div className="">
          {item.avatar.map((avatar, index) => (
            <Image
              key={index}
              src={avatar}
              alt="avatar"
              className={`inline-block ${index != 0 ? "-ml-3" : ""}`}
            />
          ))}
        </div>

        <p>{item.biding} people are biding</p>

        <div className="">
          <HeartSvg isFav={true} />
          <p className="inline">{item.favLength}</p>
        </div>
      </div>
    </div>
  );
};
export default LatestCard;
