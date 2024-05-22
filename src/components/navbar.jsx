import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import NavbarItem from './navbarItems'
import NavbarItemMobile from './navbarItemsMobile'

const events = [
    { name: 'Competitions', link: "/competition-schedule" },
    { name: 'All events', link: "/events" }
]

const projects = [
    { name: 'Kids Club', link: "/kids-club" },
    { name: 'Junior Lifting', link: "/junior-lifting" }
]

const info = [
    { name: 'General', link: "/info" },
    { name: 'Warm Ups', link: "/warm-ups" },
    { name: 'WL Programs', link: "/wl-programs" },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://res.cloudinary.com/dggfjc8rb/image/upload/v1716289397/Dutch%20Strength/DutchStrengthbar_logo_aqx3gy.png" alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <NavbarItem title="Events" products={events} />
                    <NavbarItem title="Projects" products={projects} />
                    <NavbarItem title="Free Info" products={info} />
                    <a href="/shop" className="text-sm font-semibold leading-6 text-gray-900">
                        Shop
                    </a>
                    <a href="/contacts" className="text-sm font-semibold leading-6 text-gray-900">
                        Contact
                    </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <NavbarItemMobile title="Events" products={events} />
                                <NavbarItemMobile title="Projects" products={projects} />
                                <NavbarItemMobile title="Free Info" products={info} />
                                <a
                                    href="/shop"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Shop
                                </a>
                                <a
                                    href="/contact"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact
                                </a>
                            </div>
                            <div className="py-6">
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
