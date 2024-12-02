import Category from "@/components/Category/Category";
import Folder from "@/components/Folder/Folder";
import Hero from "@/components/Hero/Hero";
import Latest from "@/components/Latest/Latest";
import Nfts from "@/components/Nfts/Nfts";
import Paint from "@/components/Paint/Paint";
import Popular from "@/components/Popular/Popular";
import Stats from "@/components/Stats/Stats";
import Thinking from "@/components/Thinking/Thinking";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 md:gap-60 text-">
      <Hero />
      <Latest />
      <Paint />
      <Category />
      <Thinking />
      <div className="border-b border-color-dark90" />
      <Popular />
      <div className="container mx-auto border-b border-color-dark90 -mt-10" />
      <Stats />
      <Folder />
      <Nfts />
    </div>
  );
}
