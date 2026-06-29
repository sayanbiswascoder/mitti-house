"use client"
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { MdHome, MdShoppingBag } from "react-icons/md";
import { FaUsers, FaInfo } from "react-icons/fa";
import Link from "next/link";


const Navbar = () => {
    // const navItems = ["HOME", "STORE", "ARTISTS", "ABOUT"];
    const pathname = usePathname();

    const navItems = [
        {
            "name": "HOME",
            "link": "/",
            icon: <MdHome />
        },
        {
            "name": "STORE",
            "link": "/store",
            icon: <MdShoppingBag />
        },
        {
            "name": "ARTISTS",
            "link": "/artists",
            icon: <FaUsers />
        },
        {
            "name": "ABOUT",
            "link": "/about",
            icon: <FaInfo />
        }
    ];

    // detect scroll up or down change and store in state to change the navbar style accordingly
    const [isOpen, setIsOpen] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        let lastIndex = 0;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number((entry.target as HTMLElement).getAttribute("data-index"));
                        console.log("Current Section Index:", index);
                        // First section = open
                        // Others = closed (example)
                        setIsOpen(index > lastIndex ? false : true);
                        lastIndex = index;

                        // or whatever logic you want
                    }
                });
            },
            {
                threshold: 0.7,
            }
        );

        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (Math.abs(currentScrollY - lastScrollY) < 10) return;

            if (currentScrollY < lastScrollY) {
                // Scrolling down
                setIsOpen(true);
            } else {
                // Scrolling up
                setIsOpen(false);
            }

            lastScrollY = currentScrollY;
        };

        if (pathname === "/") {
            sections.forEach((section) => observer.observe(section));

            return () => observer.disconnect();
        } else {
            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }

    }, [pathname]);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isOpen) {
            setShowContent(true);
        } else {
            timer = setTimeout(() => {
                setShowContent(false);
            }, 280); // wait for width animation
        }

        return () => clearTimeout(timer);
    }, [isOpen]);

    const currentItem = navItems.find(item => item.link === pathname) || navItems[0];

    return (
        <nav
            onClick={() => !isOpen && setIsOpen(true)}
            className={`fixed left-1/2 -translate-x-1/2 bg-[#0D1A57] transition-all duration-500 ease-in-out shadow-lg overflow-hidden ${isOpen ? "w-100 rounded-full px-4 py-3 bottom-4" : "w-16 h-16 rounded-t-full rounded-b-xl flex items-center justify-center cursor-pointer bottom-0"}`}
        >
            {showContent ? (
                <ul className="flex items-center justify-between">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.link}>
                            <div className={`px-4 py-4 rounded-full transition-all duration-500 ${pathname === item.link ? "bg-[#EFE7C8] text-[#0D1A57]" : "text-white hover:bg-white/10" }`}>
                                {item.name}
                            </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <button className="text-white text-4xl">
                    {currentItem.icon}
                </button>
            )}
        </nav>
    );
};

export default Navbar;