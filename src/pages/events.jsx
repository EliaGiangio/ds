import EventCard from "../components/eventcard"
const events = [
    { title: "Workshops / Skills labs", description: "All our skills labs are focussed on pinpointing your technique in a theme. The sessions are limited to appr. 90-120 minutes with a maximum of 8-16 participants. Members have discounts at our ticketshop or can use their credits to reserve a spot. See the announcements at the top." },
    { title: "Clubcompetitions", description: "Members and non-members can try-out their max. lifts. Clubcompetitions are organised as promotional events. We provide for a IWF/IPF set-up with a competition platform and organise it by IWF/IPF rules, but all athletes are also asked to help out. E.g. loading the bar or help as “timer”. Another setup is lifting on your own platform in intervals of 15-20 minutes to get to 2 or 3 maximum lifts judged by a buddy. See the poster announcements at the top." },
    { title: "Dutch Strength NGB Meets", description: "Dutch Strength is co-organisator of NGB offical events. From 11 march 2024 till a duly representive board of the Dutch Weightlifting association has been made responsible we only organise unofficial events. The offical events are posted on the NGB website and you have to comply with the NGB (IWF) rules & regulations (including membership). We organise weightlifting tournaments e.g. the Spring, Summer, Autumn and Winter cup, Lift-off Meets – all info can be found on the specific sublinked pages (see submenu or upper part of this page)." }
]
export default function Events() {
    return (
        <>
            <div className="">
                {events.map((event) => (
                    <EventCard title={event.title} description={event.description} />
                ))}
            </div>
        </>
    )
}