import SectionHeader from "./sectionHeader";
import SectionLayout from "./sectionLayout";
import TownGallery from "./townGallery";

export default function Town({anchor, title, desc}) {
    return (
        <section className="flex flex-col mt-36">
            <SectionHeader sectionID={anchor} label={title} desc={desc}/>
            <SectionLayout>
                <TownGallery/>
            </SectionLayout>
        </section> 
    )
}