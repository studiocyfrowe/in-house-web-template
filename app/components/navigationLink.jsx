import Link from "next/link";

export default function Navigation_Link({label, slug}) {
    return (
        <>
            <Link href={slug} className="my-auto"><div className="uppercase tracking-[.25em] nav_link my-2">{label}</div></Link>
        </>
    )
}