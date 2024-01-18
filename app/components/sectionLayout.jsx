export default function SectionLayout({ children }) {
    return (
        <div className="flex-col grid grid-cols-1 lg:grid-cols-5 gap-8 z-30">
            <div className="col-span-1">
                
            </div>
            <div className="col-span-4 flex flex-col lg:px-10 lg:py-12">
                {children}
            </div>
        </div>
    )
}