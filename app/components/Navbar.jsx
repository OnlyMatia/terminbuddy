"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const links = [
    { name: "home", route: "/" },
    { name: "about", route: "/about" },
    { name: "contact", route: "/contact" },
    { name: "post", route: "/post" },
]

export default function Navbar() {
    const [isMobile, setMobile] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleResize = () => {
        const mobile = window.innerWidth
        setMobile(mobile <= 600)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <nav className="w-full bg-[#101828] p-3 text-white flex justify-center items-center z-50 fixed">
        <div className="flex justify-between items-center max-w-7xl w-full text-xl">
            <Link href="/" className="font-bold flex flex-row items-center z-50">
            <Image src={"/TBlogo.png"} alt="Logo" width={50} height={50} />
            <h2>TerminBuddy</h2>
            </Link>

            
            <ul className="hidden md:flex flex-row gap-5 items-center">
            {links.map((el) => {
                const isActive = pathname === el.route
                return (
                <li className="group" key={el.name}>
                    <Link href={el.route} className="group capitalize">
                    {el.name}
                    </Link>
                    <span
                    className={`block h-[2px] ${
                        isActive ? "w-full" : "w-0"
                    } bg-white rounded-full transition-all duration-300 group-hover:w-full`}
                    />
                </li>
                )
            })}
            </ul>

            
            <button
            className="md:hidden flex flex-col justify-center gap-1.5 rounded z-50 cursor-pointer"
            onClick={() => setOpen(!isOpen)}
            >
            <span
                className={`block w-7 h-0.5 bg-white rounded transition-transform duration-200 ease-out ${
                isOpen ? "rotate-45 translate-y-1" : ""
                }`}
            ></span>
            <span
                className={`block w-7 h-0.5 bg-white rounded transition-transform duration-200 ease-out ${
                isOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
            ></span>
            </button>
        </div>

        
        {isOpen && (
            <div className="md:hidden fixed top-0 left-0 w-full bg-[#101828] z-40">
                <ul className="flex flex-col min-h-screen justify-center items-center gap-6 p-5">
                    {links.map((item, i) => {
                    const isActive = pathname === item.route
                    return (
                        <li key={i}>
                        <Link
                            onClick={() => setOpen(false)}
                            href={item.route}
                            className={`text-7xl font-bold capitalize `}
                        >
                            {item.name}
                        </Link>
                        </li>
                    )
                    })}
                </ul>

                <p className="bottom-0 fixed w-full text-center p-5 text-[#ffffff9c]">
                    Designed and Developed by{" "}
                    <a
                    href="https://portfolio-three-wine-42.vercel.app/"
                    target="_blank"
                    className="text-[#21c2218b] hover:text-[#21c221]"
                    >
                    Matija
                    </a>
                </p>
            </div>
        )}
        </nav>
    )
}
