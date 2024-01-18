import HeaderImage from "./header_image";
import SearchForm from "./searchForm";
import SectionHeader from "./sectionHeader";
import SectionLayout from "./sectionLayout";

export default function SearchFlats({anchor, title, desc}) {
    return (
        <section className="min-h-screen flex flex-col my-36 relative">
            <SectionHeader sectionID={anchor} label={title} desc={desc}/>
            <div className="z-10">
                <SectionLayout>
                    <SearchForm/>
                </SectionLayout>
            </div>
            <div className="lg:flex flex-row hidden lg:absolute">
                <div className="relative top-96"><HeaderImage/></div>
                <div className="relative top-96 left-60 scale-125 translate-y-80"><HeaderImage/></div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:hidden mt-16">
                <HeaderImage/>
                <HeaderImage/>
            </div>
        </section> 
    )
}