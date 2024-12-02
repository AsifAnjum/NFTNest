import Image from "next/image";
import paint1 from "@/assets/paint1.png";
import paint2 from "@/assets/paint2.png";
const Paint = () => {
  return (
    <section className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="w-2/5 mt-10">
          <p className="text-[15px] text-color-grey100">Overline</p>
          <p className="text-[64px] leading-none font-bold text-white mt-2">
            Sapien ipsum scelerisque convallis fusce
          </p>
          <p className="text-[16px] text-color-grey100 mt-8">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          <div>
            <div className="mt-8">
              <button className="primaryBtn">Get started</button>
              <button className="secondaryBtn ml-2">Nothing </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image src={paint1} alt="default" />
          <Image
            src={paint2}
            alt="default"
            className="absolute top-48 right-72"
          />
        </div>
      </div>
    </section>
  );
};
export default Paint;
