import Link from "next/link";

export default function Footer() {
    const navLinks = [
        { name: "Home", route: "/" },
        { name: "Post", route: "/post" },
        { name: "About", route: "/about" },
        { name: "Contact", route: "/contact" },
    ];
    const socialLinks = [
        { name: "Instagram", route: "https://instagram.com" },
        { name: "Facebook", route: "https://facebook.com" },
        { name: "Twitter", route: "https://x.com" },
    ];

    return (
        <footer className="bg-[#1E2939] border-t-1 border-[#101828] text-white">
            <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row md:justify-between gap-10">
                
                
                <div className="flex flex-col items-start">
                    <a href="/" className="flex flex-col md:flex-row items-center space-x-4">
                        <img src="/TBlogo.png" alt="TerminBuddy Logo" className="w-20 h-20" />
                        <span className="text-4xl font-bold">TerminBuddy</span>
                    </a>
                </div>

                
                <div className="flex flex-col items-start">
                    <h3 className="text-xl font-semibold mb-2">Navigation</h3>
                    <ul className="space-y-2 text-normal">
                        {navLinks.map((el) => (
                            <li className="group text-[#ffffffb4]" key={el.name}>
                                <Link href={el.route} className="group capitalize group-hover:text-white">
                                    {el.name}
                                </Link>
                                <span className="block h-[2px] w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full" />
                            </li>
                        ))}
                    </ul>
                </div>

                
                <div className="flex flex-col items-start">
                    <h3 className="text-xl font-semibold mb-2">Social</h3>
                    <ul className="space-y-2 text-normal">
                        {socialLinks.map((el) => (
                            <li className="group text-[#ffffffb4]" key={el.name}>
                                <a href={el.route} target="_blank" rel="noopener noreferrer" className="group capitalize group-hover:text-white">
                                    {el.name}
                                </a>
                                <span className="block h-[2px] w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className="bg-[#0a0a0a] w-full py-4 text-center text-xs text-[#9f9f9f]">
                Designed & Developed by{" "}
                <a
                    href="https://matijasajin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline transition"
                >
                    matija sajin
                </a>
            </div>
        </footer>
    );
}
