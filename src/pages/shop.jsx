import LinkCard from "../components/linkcard"
import ShopLanding from "../components/shoplanding"

const items = [
    { name: "Donate", description: "Donate to the Dutch Strength foundation and help improving the facility", link: "https://www.dutchstrength.com/donations-to-the-foundation-dutch-strength/" },
    { name: "Memberships", description: "Buy a 1 time pass or become a member, click to see al your options", link: "https://www.dutchstrength.com/entrance-fees/" },
    { name: "Merchandise", description: "Pick and personalise Dutch Strength/Sportquest merchandise", link: "https://shop.spreadshirt.nl/dutch-strength/" },
    { name: "Strength items", description: "Get some items from barbell-shop.nl ", link: "https://www.barbell-shop.nl/" },
    { name: "Keto goods", description: "discount on Keto fit shop", link: "https://ketofitshop.com/?ref=w4og3a9i" },
    { name: "Glucose measurement", description: "Stay healty, check it out", link: "https://www.swisspointofcare.com/en/ref/42/" },
    { name: "VMAX Pro", description: "Get 5% discount by using our code", link: "https://vmaxpro.de/?aw-action=click&log=3386&redirect=https%3A%2F%2Fvmaxpro.de%2Fvmaxpro-referral-programm%2F" },
]
export default function Shop() {
    return (
        <>
            <ShopLanding />
            <div className="mx-auto my-10 max-w-7xl px-6 lg:px-8">
                <div className="inline-flex flex-wrap mx-auto max-w-7xl px-6 lg:px-8">
                    {items.map((item) => (
                        <LinkCard name={item.name} description={item.description} link={item.link} />
                    ))}
                </div>
            </div>

        </>
    )
}