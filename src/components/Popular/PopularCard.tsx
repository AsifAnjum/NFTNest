import Image from "next/image";
import alarmClock from "@/assets/alarm-clock-clock-svgrepo-com.svg";

import { PopularItem } from "@/lib/constants";

const PopularCard = ({ item }: { item: PopularItem }) => {
  return (
    <div className="max-w-[212px] max-h-[504px] space-y-3">
      <Image
        className="w-[212px] h-[355px]"
        src={item.image}
        alt="Fames habitasse risus ultricies tortor sit"
      />
      {/* title  */}
      <p className="text-[16px] text-white tracking-wider line-clamp-2">
        {item.title}
      </p>

      <div className="flex justify-between items-center">
        <p className="text-white/80 text-sm">
          <Image
            src={alarmClock}
            alt="alarm"
            className="inline-block mr-2"
            width={16}
          />
          {item.time}
        </p>
        <div className=" bg-color-purpleLight/15 p-2   rounded">
          <p className=" text-color-purpleLight text-center">
            {item.price} ETH
          </p>
        </div>
      </div>
      <div className="mt- border-b border-color-dark90" />
    </div>
  );
};
export default PopularCard;
