import Link from "next/link";
import NavFavoritesFlatsBtn from "./navigationFavoritesFlatsButton";
import Navigation_Link from "./navigationLink";

export default function Navigation() {
    return (
        <>
            <div className="lg:flex flex-col lg:flex-row navigation px-8 lg:px-24 pt-16 pb-4 z-30 w-full h-full lg:h-auto hidden">
                {/* <Image src={icon_burger_close} height={25} className="mb-16 cursor-pointer"/> */}
                <div className="me-12 my-auto"><Navigation_Link label={`Home`} slug={`/`}/></div>
                <div className="me-12 my-auto"><Navigation_Link label={`Znajdź mieszkanie`} slug={`#`}/></div>
                <div className="me-12 my-auto"><Navigation_Link label={`Dostępne oferty`} slug={`#`}/></div>
                <div className="me-12 my-auto"><Navigation_Link label={`Poznaj okolicę`} slug={`#`}/></div>
                <div className="me-12 my-auto"><Navigation_Link label={`Kontakt`} slug={`#`}/></div>
                <Link href={`/favorites`} className="ms-auto"><NavFavoritesFlatsBtn/></Link>
            </div>
        </>
    )
}