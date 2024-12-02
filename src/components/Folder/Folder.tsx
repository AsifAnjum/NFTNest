import Image from "next/image";
import folderImg from "@/assets/Folder Section.png";

const Folder = () => {
  return (
    <section className="container mx-auto">
      <Image src={folderImg} alt="folder" className="w-full" />
    </section>
  );
};
export default Folder;
