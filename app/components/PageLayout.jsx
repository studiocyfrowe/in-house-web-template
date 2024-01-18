export default function PageLayout({ children }) {
    return (
        <main className="flex min-h-screen flex-col px-8 lg:px-24 py-12 lg:py-0">
            <div className="mt-32"></div>
            { children }
            <div className="mb-32"></div>
        </main>
    )
}