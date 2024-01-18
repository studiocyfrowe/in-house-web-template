"use client"
import { useState } from "react";
import PageLayout from "../components/PageLayout";
import SectionHeader from "../components/sectionHeader";
import SectionLayout from "../components/sectionLayout";
import TableFlats from "../components/tableFlats";

const favoritesInfo = {
    id: '#town',
    title: 'ulubione',
    desc: 'Sprawdź Twoje ulubione mieszkania',
    items: [
      {
        id: 1,
        name: 'a1.01',
        area: 55.23,
        balcony: 10.12,
        terrace: false,
        rooms: 3,
        available: 'TRUE'
      },
      {
        id: 2,
        name: 'a1.02',
        area: 58.23,
        balcony: 13.12,
        terrace: true,
        rooms: 3,
        available: 'WAITING'
      },
      {
        id: 3,
        name: 'a1.03',
        area: 60.23,
        balcony: 10.12,
        terrace: false,
        rooms: 3,
        available: 'FALSE'
      },
      {
        id: 4,
        name: 'a1.04',
        area: 55.23,
        balcony: false,
        terrace: 12.12,
        rooms: 3,
        available: 'TRUE'
      },
    ]
  }

export default function Favorites() {
    const [favDetails, setFavDetails] = useState(favoritesInfo)
    return (
        <PageLayout>
            <SectionHeader sectionID={`#`} label={favDetails.title} desc={favDetails.desc}/>
            <div className="z-10">
                <SectionLayout>
                    <TableFlats flats={favoritesInfo.items}/>
                </SectionLayout>
            </div>
        </PageLayout>
    )
}