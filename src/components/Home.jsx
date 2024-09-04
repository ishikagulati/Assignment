import AboutCard from "./About";
import Gallery from "./GalleryWidget";


export default function Home() {

    return (
        <div className="w-full flex flex-row gap-8 justify-between">
            <div className=" font-semibold w-1/2 bg-[#616161D1] border border-[#96BEE7] rounded-[27px]"></div>
        <div className="w-1/2 flex flex-col gap-10">
        <AboutCard/>
        <Gallery/>
        </div>
        </div>
    );
};


