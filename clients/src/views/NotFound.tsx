
export default function Error() {
    return (
        <div className="container mx-auto h-screen place-content-center">
            <div className="bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90% p-8 rounded-lg shadow-2xl">
                <h2 className="text-2xl text-center">Error</h2>
                <p className="text-lg text-center">Page not found</p>
                <p className="text-md text-red-500 text-center">Error Code 404</p>
            </div>
        </div>
    )
}