import ContactItems from "./contactItem";
import SectionHeader from "./sectionHeader";
import SectionLayout from "./sectionLayout";

export default function Contact({anchor, title, desc, tel, mail}) {
    return (
        <section className="flex flex-col mt-36">
            <SectionHeader sectionID={anchor} label={title} desc={desc}/>
            <SectionLayout>
                <ContactItems tel={tel} mail={mail}/>
            </SectionLayout>
        </section> 
    )
}