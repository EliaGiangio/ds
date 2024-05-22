export default function EventCard({ title, description }) {
    return (
        <>
            <div className="mx-auto max-w-7xl px-6 my-6 lg:px-8 py-12 border border-gray-300 rounded-lg shadow-md bg-orange-500">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
                <p className="font-normal text-gray-100">{description}</p>
            </div>
        </>
    );
}
