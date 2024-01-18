import Link from "next/link";
import NavFavoritesFlatsBtn from "./navigationFavoritesFlatsButton";
import Navigation_Link from "./navigationLink";
import icon_burger_close from '../assets/icon_burger_close.svg'
import Image from "next/image";

export default function Navigation() {
    return (
        <>
            <div className="lg:flex flex-col lg:flex-row navigation px-8 lg:px-24 pt-16 pb-4 z-30 w-full h-full lg:h-auto hidden">
                <div className="me-12 my-auto"><Navigation_Link label={`Home`} slug={`/`}/></div>
                <div className="me-12 my-auto"><Navigation_Link label={`Znajdź mieszkanie`} slug={`#searchFlats`}/></div>
                <div className="me-12 my-auto"><Navigation_Link label={`Dostępne oferty`} slug={`#town`}/></div>
                <div className="me-12 my-auto"><Navigation_Link label={`Poznaj okolicę`} slug={`#discover-town`}/></div>
                <div className="me-12 my-auto"><Navigation_Link label={`Kontakt`} slug={`#contact`}/></div>
                <Link href={`/favorites`} className="ms-auto"><NavFavoritesFlatsBtn/></Link>
            </div>
        </>
    )
}