import Image from "next/image";
import HeaderImage from "./header_image";
import HeaderTitle from "./header_title";
import MainButton from "./mainButton";
import SectionDescription from "./sectionDescription";
import logo_in_house from '../assets/logo_inhouse.svg'
import shape_outline from '../assets/shape_outline.svg'
import header_group_shape from '../assets/header_group_shape.svg'
import Link from "next/link";

export default function Header({img, title, desc, btnLink}) {
    return (
        <section className="min-h-screen flex-col grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col my-auto z-30 lg:w-3/5">
                <Image src={logo_in_house} alt='Logo' height={145}/>
                <HeaderTitle label={title}/>
                {desc ? <SectionDescription desc={desc}/> : null}
                <a href="#searchFlats" className="me-auto mt-12"><MainButton/></a>
            </div>
            <div className='flex z-30'>
                <HeaderImage/>
            </div>
            <div className="lg:flex flex-row hidden lg:absolute">
                <Image src={shape_outline} className='fixed -bottom-52 -left-48' alt="Shape outline"/>
                <Image src={header_group_shape} className='fixed top-20 right-10 scale-75' alt="Shape outline 2"/>
            </div>
        </section>
    )
}