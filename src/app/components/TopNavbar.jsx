"use client";

import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";

import logo from '../../../public/images/truwex_logo.png'
import Image from "next/image";

export default function TopNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" height='full' className="px-2 bg-rose-100">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className='sm:hidden'
                />
                <NavbarBrand>
                    <Image src={logo} alt="logo" width={150} className="object-contain" />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-4'>
                <NavbarItem>
                    <Link className="hover:text-rose-500 text-xl" href='/'>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link className="text-rose-500 hover:text-rose-500 text-xl" href='/shop' aria-current='page'>
                        Shop
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="hover:text-rose-500 text-xl" href='/about'>
                        About Us
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2
                                    ? "primary"
                                    : index === menuItems.length - 1
                                    ? "danger"
                                    : "foreground"
                            }
                            className='w-full'
                            href='#'
                            size='lg'>
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
