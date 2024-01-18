export default function SearchInputRange({label, desc, min, max}) {
    return (
        <div className="flex flex-col mb-12 z-20 me-auto">
            <div className="me-auto flex flex-col">
                <p className="uppercase tracking-[.25em]">{label}</p>
                {desc ? <small>{desc}</small> : null}
            </div>
            <div className="flex flex-col w-96 mt-8">
                <input type="range" id="volume" name="volume" min={min} max={max} />
                <div className="flex flex-row mt-2">
                    <label for="volume"><small className="uppercase">od</small><br></br>{min}</label>
                    <label for="volume" className="ms-auto text-end"><small className="uppercase">do</small><br></br>{max}</label>
                </div>
            </div>
        </div>
    )
}