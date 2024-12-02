import { statsItems } from "@/lib/constants";
import StatsCard from "./StatsCard";

const Stats = () => {
  return (
    <section className="container mx-auto -mt-14">
      <div className="flex justify-center gap-24">
        {/* Stats Card */}
        {statsItems.map((item) => (
          <StatsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
export default Stats;
