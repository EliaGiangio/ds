import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function CompSchedule() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-orange-600">2024 Dutch Strength</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Weightlifting
                                Tournaments 13+yr</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                Every seaon (spring, summer, autumn and winter) we organise at sundays a Dutch Strength Seasonal Cup 13+yr ( -18yr athletes need to be guided by their parents/caretakers). And in between also Lift-offs.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="https://res.cloudinary.com/dggfjc8rb/image/upload/v1716366230/Dutch%20Strength/2024_COMPETITION_CALENDAR_jyrugy.png"
                        alt=""
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>Events are livestreamed, links are on our broadcasting page. Due to limited space (see map below), only invited supporters can enter the gym during competitions. </p>
                            <p> For parking info, search "P+R Amsterdam" online.</p>
                            <p> Ticket sales start 4-6 weeks before the event and end 2 weeks prior.</p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">NGB Membership</strong> If you don't have a NGB membership yet, you have to start one on the NGB site. It's valid for 1 year from the start.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Dresscode and extras</strong> It is mandatory to wear a singlet during competition. Athletes are not allowed to use straps for the competition lifts.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Bring a volunteer</strong> The competition is made possible by our volunteers, we try to provvide some but we kindly ask to bring a helper that can give a hand to our team.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                After payment you have to add data in a seperate google-form like NGB License, name of coach and/or helper.
                                The data are all checked at the end of the period of subscription.
                                Because of limited space in our gym we organise this event only with limited public.


                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Don't want to compete in an official comp? No problem.</h2>
                            <p className="mt-6">
                                From this year the first group of every competititon will be "unofficial". This means that the rules above do not apply (except for the volunteer).
                                Instead of 3 judges only 1 official will be present. This means that the athletes competiting in this group will not be put in the national ranking and any national recor would not be valid.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
