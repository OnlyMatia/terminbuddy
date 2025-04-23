import Image from "next/image"
import Link from "next/link"



const links = [{name:"home", route:"/"}, {name:"Post", route:"/post"}, {name:"about", route:"/about"}, {name:"contact", route:"/contact"} ]


export default function Navbar () {

    return (
        <nav className="w-full bg-[#101828] p-3 text-white flex justify-center items-center">
            <div className="flex justify-between items-center max-w-7xl w-full text-xl">
                <Link href="/" className=" font-bold flex flex-row items-center">
                    <Image src={"/TBlogo.png"} alt="Logo" width={50} height={50} />
                    <h2>TerminBuddy</h2>
                </Link>

                <ul className="flex flex-row gap-5 items-center">
                {links.map((el) => {
                    return (
                        <li className="group " key={el.name}>
                            <Link href={el.route} className="group capitalize">
                                {el.name}
                            </Link>
                            <span className="block h-[2px] w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full" />
                        </li>
                    )
                })}
                
                    <button className=" rounded-xl py-2 px-4 bg-green-600 text-white font-semibold hover:scale-[1.1] transition-all duration-300 cursor-pointer">Login</button>
                </ul>

                
            </div>
        </nav>
    )
}