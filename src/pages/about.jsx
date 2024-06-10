import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
const features = [
    {
        name: 'Open Gym',
        description:
            'Already know what to do? Join our open gym slots and follow your own program under the supervision of at least one certified coach',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'FUNdamentals',
        description: 'If you need some extra guidance feel free to join one of our Lifting/Strength FUNdametals class. Learn or solidify the basics with our coaches',
        icon: LockClosedIcon,
    },
    {
        name: 'Competition Team',
        description: 'Ready to take it to the next level? Contact us to become part of our competition team. We train togheter minimum 1xweek.',
        icon: ServerIcon,
    },
]

export default function About() {
    return (
        <>
            <div className="overflow-hidden bg-white py-12 sm:py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-orange-600">Dutch Strength</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lift and grow</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    At Dutch Strength we promote growth (personal, social and physycal) through sport.
                                    Wether you have experience with weightlifting or not, our community will welcome you and help you become the best version of yourself.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <iframe className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" width="951" height="535" src="https://www.youtube.com/embed/GyDe6OADIu4" title="HFAUSTINO Creative MEDIA - DUTCH STRENGTH COMMUNITY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </>
    )
};