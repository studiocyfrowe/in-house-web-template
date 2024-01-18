export default function ContactItems({tel, mail}) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <p className="uppercase tracking-[.25em]">Napisz do nas</p>
                <a href={`mailto:` + mail} className="my-4 text-3xl uppercase">{mail}</a>
            </div>
            <div className="flex flex-col mt-8">
                <p className="uppercase tracking-[.25em]">Zadzwoń do nas</p>
                <a href={`tel:+48` + tel} className="my-4 text-3xl uppercase">{tel}</a>
            </div>
        </div>
    )
}
