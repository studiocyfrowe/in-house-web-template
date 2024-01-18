import { useState } from "react";
import BuildingDetails from "./buildingDetails";
import BuildingItemPhoto from "./buildingItemPhoto";
import BuildingsGrid from "./buildingsGrid";
import SectionHeader from "./sectionHeader";
import SectionLayout from "./sectionLayout";

export default function Buildings({anchor, title, desc, items}) {
    return (
        <section className="min-h-screen flex flex-col my-36">
            <SectionHeader sectionID={anchor} label={title} desc={desc}/>
            <SectionLayout>
                <BuildingsGrid items={items}/>
            </SectionLayout>
        </section> 
    )
}