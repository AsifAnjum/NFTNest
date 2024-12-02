import Image from "next/image";
import thinking from "@/assets/thinking.png";
import painterIcon from "@/assets/painterIcon.png";
import multipleIcon from "@/assets/multipleIcon.png";
const Thinking = () => {
  return (
    <section className="container mx-auto -mt-10">
      <div className="flex justify-between flex-row-reverse items-center">
        <div className="w-2/5 ">
          <p className="text-[15px] text-color-grey100">Overline</p>
          <p className="text-[64px] leading-none font-bold text-white mt-2">
            Habitant tristique aliquam in vel scelerisque
          </p>
          <p className="text-[16px] text-color-grey100 mt-8">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          <div>
            <div className="flex gap-10 mt-14">
              <div>
                <Image src={painterIcon} alt="brush" />
                <p className="text-white font-semibold text-[20px] mt-5">
                  Sollicitudin sapien
                </p>

                <p className="text-color-grey100">Cursus fermentum</p>
              </div>
              <div>
                <Image src={multipleIcon} alt="brush" />
                <p className="text-white font-semibold text-[20px] mt-5">
                  Pulvinar metus
                </p>

                <p className="text-color-grey100">Nunc sed</p>
              </div>
            </div>

            <div className="mt-14">
              <button className="primaryBtn">Get started</button>
              <button className="secondaryBtn ml-2">Learn more </button>
            </div>
          </div>
        </div>

        <div className="">
          <Image src={thinking} alt="default" />
        </div>
      </div>
    </section>
  );
};
export default Thinking;
