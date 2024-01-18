export default function SearchInputCheckbox() {
    return (
        <div className="flex flex-col mb-12">
            <p className="uppercase tracking-[.25em] mb-8">Dodatkowe cechy</p>
            <div className="flex flex-row">
                <label class="checkbox_item me-8">Balkon
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                </label>
                <label class="checkbox_item me-8">Taras
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
    )
}