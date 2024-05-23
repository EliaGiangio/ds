import PricingCard from "./pricingCard"

const subs = [
    { name: "Off Peak", description: "Off-peak is limited to gym entrances from monday till friday at available time slots after 9:00 till 16:00", price: "43,50" },
    { name: "Full Membership", description: "Monthly: unlimited training per week, juniors and students with a validation on appointment", price: "86" },
    { name: "8 x Entrance", description: "Valid 4 months, juniors and students discounts to be arranged on appointment.", price: "80" },
    { name: "1 Time Entrance", description: "Contact us to reserve a spot in advance!", price: "15" },
]
export default function Pricing() {
    return (
        <div className="bg-white py-12 sm:py-16" id="pricing">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 border border-gray-300 rounded-lg shadow-md">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Memberships</h2>
                    <p className="mt-6 text-m leading-8 text-gray-600">
                        We offer discounts for Under 23, students and "stadspashouders". Email us for more info.
                        You can stop or change your subscription monthly.
                        Our small group classes can be joined without extra charge if you are a member.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {subs.map((sub) => (
                        <PricingCard name={sub.name} description={sub.description} price={sub.price} />
                    ))}
                </div>
            </div>
        </div>

    )
}
