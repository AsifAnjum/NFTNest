import { NftItem } from "@/lib/constants";
import Image from "next/image";

const NftCard = ({ item }: { item: NftItem }) => {
  return (
    <div className="">
      <Image
        src={item.img}
        className="max-w-[89px] max-h-[89px] rounded-2xl"
        alt="NFT"
      />
      <p className="text-color-grey100 text-center mt-2">{item.value} ETH</p>
    </div>
  );
};
export default NftCard;
