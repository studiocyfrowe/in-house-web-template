import Image from "next/image";
import location_icon from '../assets/location_icon.svg'
import MainButton from "./mainButton";

export default function BuildingDetails({title, street}) {
    return (
        <div className="flex flex-col border_brown p-8 w-full bg-black z-10 mx-auto">
            <Image src={location_icon} alt="Lokalizacja"/>
            <h4 className="mb-4 uppercase text-xl tracking-[.25em] mt-8">{title}</h4>
            <small className="uppercase">{street}</small>
            <small className="mt-8 uppercase">dostępność</small>
            <h6 className="text-2xl mt-2">15 <sub>/20</sub></h6>
            <div className="me-auto mt-8"> <MainButton/></div>
        </div>
    )
}