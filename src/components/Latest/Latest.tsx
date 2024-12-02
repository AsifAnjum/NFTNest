import { latestItems } from "@/lib/constants";

import LatestCard from "./LatestCard";

const Latest = () => {
  return (
    <section className="">
      <p className="text-white text-center text-4xl">Latest live auctions</p>
      {/* card w-448 h-767 img[w-400 h-520] */}
      <div className="mt-20 flex  overflow-hidden  gap-4">
        {latestItems.map((item) => (
          <LatestCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
export default Latest;
