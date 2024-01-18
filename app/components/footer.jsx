import Image from "next/image";
import logo_in_house from '../assets/logo_inhouse.svg'
import Navigation_Link from "./navigationLink";

export default function Footer() {
    return (
        <footer className="flex flex-col px-8 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16">
                <div className="flex">
                    <Image src={logo_in_house} alt='Logo' height={145} className="mx-auto lg:mx-0"/>
                </div>
                <div className="flex flex-col my-auto mx-auto lg:mx-0 text-center lg:text-end lg:ms-auto">
                    <div className="mx-auto lg:mx-0 xl:ms-auto"><Navigation_Link label={`Home`} slug={`#`}/></div>
                    <div className="mx-auto lg:mx-0 xl:ms-auto"><Navigation_Link label={`Znajdź mieszkanie`} slug={`#`}/></div>
                    <div className="mx-auto lg:mx-0 xl:ms-auto"><Navigation_Link label={`Dostępne oferty`} slug={`#`}/></div>
                    <div className="mx-auto lg:mx-0 xl:ms-auto"><Navigation_Link label={`Poznaj okolicę`} slug={`#`}/></div>
                    <div className="mx-auto lg:mx-0 xl:ms-auto"><Navigation_Link label={`Kontakt`} slug={`#`}/></div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4">
                <div className="flex mx-auto lg:mx-0">
                    <small>2024 / example project of osiedle inhouse real estate</small>
                </div>
                <div className="flex text-center mx-auto lg:mx-0 lg:text-end lg:ms-auto">
                    <small className="ms-auto">design & dev - studiocyfrowe</small>
                </div>
            </div>
        </footer>
    )
}