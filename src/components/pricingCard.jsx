
export default function PricingCard({ name, description, price }) {
    return (
        <>

            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                        <p className="text-base font-semibold text-gray-600">{name}</p>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                            <span className="text-5xl font-bold tracking-tight text-gray-900">€{price}</span>
                            <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">EUR</span>
                        </p>
                        <a
                            href="#"
                            className="mt-10 block w-full rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                        >
                            Join
                        </a>
                        <p className="mt-6 text-xs leading-5 text-gray-600">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}