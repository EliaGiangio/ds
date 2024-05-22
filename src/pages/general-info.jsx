import LinkCard from "../components/linkcard";
const items = [
    { name: "DS Games", description: "If you want to have some fun with our Dutch Strength Games!", link: "https://www.dutchstrength.com/dutchstrengthgames/" },
    { name: "At the office", description: "The first part is a daily health program to do @ your workplace use your breaks or plan one session and adapt it to your capacity and spirit.", link: "https://www.dutchstrength.com/keep-fit-at-home-or-the-office/" },
    { name: "Strength & Conditioning at Home", description: "General workouts including self treatment.", link: "https://www.dutchstrength.com/at-home-general-strength-co/" },
    { name: "Movements Progressions", description: "To be done in a gym - progress your movements", link: "https://www.dutchstrength.com/learn-to-lift/" },
    { name: "BASIC Olympic + Strength Training", description: "This part consists of combinations of OLY & Strength Lifting Programs – advanced lifters only or supervised by a trainer!", link: "https://www.dutchstrength.com/strength-lifting-programs/" },
    { name: "WODS", description: "This part consists of short challenging workouts of Dutch Strength.", link: "https://www.dutchstrength.com/wods/" },
    { name: "Olympic Weightlifting", description: "This part relates to the specific expertise of Dutch Strength related to Olympic Weightlifting.", link: "https://www.dutchstrength.com/olympic-weightlifting/" },
]
export default function GeneralInfo() {
    return (
        <>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="inline-flex flex-wrap mx-auto max-w-7xl px-6 lg:px-8">
                    {items.map((item) => (
                        <LinkCard name={item.name} description={item.description} link={item.link} />
                    ))}
                </div>
            </div>

        </>
    )
}