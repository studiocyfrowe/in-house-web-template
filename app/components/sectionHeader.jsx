import Image from "next/image";
import signet_inhouse from '../assets/signet_inhouse.svg'
import SectionHeaderLabel from "./sectionHeaderLabel";
import SectionDescription from "./sectionDescription";

export default function SectionHeader({sectionID, label, desc}) {
    return (
        <div id={sectionID} className="flex-col grid grid-cols-1 lg:grid-cols-5 gap-8 z-30">
            <div className="col-span-1">
                <Image src={signet_inhouse} alt="Logo Signet" height={150}/>
            </div>
            <div className="col-span-4 flex flex-col">
                <div className="flex flex-col lg:px-10 py-12 me-auto lg:mt-24 z-10 lg:w-2/3">
                    <SectionHeaderLabel name={label}/>
                    {desc ? <SectionDescription desc={desc}/> : null}
                </div>
            </div>
        </div>
    )
}