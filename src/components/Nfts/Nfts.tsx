import { nftItems } from "@/lib/constants";
import NftCard from "./NftCard";

const Nfts = () => {
  return (
    <section className="flex gap-5 overflow-hidden">
      {nftItems.map((item) => (
        <NftCard key={item.id} item={item} />
      ))}
    </section>
  );
};
export default Nfts;
