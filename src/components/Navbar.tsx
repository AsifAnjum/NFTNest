import Image from "next/image";
import logo from "@/assets/logo.png";
const Navbar = () => {
  return (
    <nav className="">
      <div className="flex items-center justify-between py-4">
        <div className="logo">
          <a href="#">
            <Image
              src={logo}
              alt="logo"
              className="border-none rounded-lg shadow-lg"
            />
          </a>
        </div>

        <ul className="flex gap-10 text-color-grey100 ">
          <li className="hover:text-color-grey100/70 duration-500">
            <a href="#">Auctions</a>
          </li>
          <li className="hover:text-color-grey100/70 duration-500">
            <a href="#">Roadmap</a>
          </li>
          <li className="hover:text-color-grey100/70 duration-500">
            <a href="#">Discover</a>
          </li>
          <li className="hover:text-color-grey100/70 duration-500">
            <a href="#">Community</a>
          </li>
        </ul>

        <div>
          <button className="secondaryBtn">Contact</button>
          <button className="primaryBtn ml-2">My Account</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
