import Image from "next/image";
import signet_inhouse from '../assets/signet_inhouse.svg'
import SearchInputRange from "./searchInputRange";
import MainButton from "./mainButton";
import SearchInputCheckbox from "./searchInputCheckbox";

export default function SearchForm() {
    return (
        <div className="flex flex-col px-12 py-12 me-auto z-10 border_brown bg-black">
            <SearchInputRange label={`Pow. użytkowa`} min={30} max={80}/>
            <SearchInputRange label={`Liczba pokoi`} min={2} max={5}/>
            <SearchInputRange label={`Poziom`} min={0} max={5}/>
            <SearchInputCheckbox/>
            <div className="me-auto"><MainButton/></div>
        </div>
    )
}