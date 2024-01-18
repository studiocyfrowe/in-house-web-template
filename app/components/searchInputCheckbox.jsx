export default function SearchInputCheckbox() {
    return (
        <div className="flex flex-col mb-12">
            <p className="uppercase tracking-[.25em] mb-8">Dodatkowe cechy</p>
            <div className="flex flex-row">
                <div className="me-8">
                    <input type="checkbox" id="scales" name="scales"/>
                    <label for="scales" className="ms-2">Balkon</label>
                </div>
                <div className="me-8">
                    <input type="checkbox" id="scales" name="scales" checked/>
                    <label for="scales" className="ms-2">Taras</label>
                </div>
            </div>
        </div>
    )
}