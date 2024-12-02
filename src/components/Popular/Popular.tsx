import { popularItems } from "@/lib/constants";
import PopularCard from "./PopularCard";

const Popular = () => {
  return (
    <section className="container mx-auto -mt-10">
      <div className="flex flex-col justify-center items-center">
        <p className="text-color-grey100">OVERLINE</p>
        <p className="text-white text-4xl mt-10">Most popular live auctions</p>
        <div className="mt-10 space-x-4">
          <button className="secondaryBtn !text-color-grey100">
            Architecture
          </button>
          <button className="secondaryBtn !text-color-grey100 !border-2 !border-color-grey100">
            Photography
          </button>
          <button className="secondaryBtn !text-color-grey100">Games</button>
          <button className="secondaryBtn !text-color-grey100">Music</button>
        </div>
      </div>

      {/* card  */}

      <div className="grid grid-cols-6 mt-14">
        {popularItems.map((item) => (
          <PopularCard key={item.id} item={item} />
        ))}
      </div>

      {/* button  */}

      <button className="secondaryBtn mt-24 flex mx-auto">Show me more</button>
    </section>
  );
};
export default Popular;
