import { StatsItem } from "@/lib/constants";
import Image from "next/image";

const StatsCard = ({ item }: { item: StatsItem }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Image src={item.icon} alt={item.title} />
      <p className="text-white text-5xl font-[500]">{item.value}</p>
      <p className="text-color-grey100">{item.title}</p>
    </div>
  );
};
export default StatsCard;
