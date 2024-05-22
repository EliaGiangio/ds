export default function LinkCard({ name, description, link }) {
    return (
        <>
            <div className="basis-1/3 flex-grow p-2">
                <a href={link} className="block max-w-sm p-6 border rounded-lg shadow bg-gray-100 border-orange-700 hover:bg-orange-600">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{name}</h5>
                    <p className="font-normal text-gray-700 ">{description}</p>
                </a>
            </div>
        </>
    );
}
