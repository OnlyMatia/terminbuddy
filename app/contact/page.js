export default function Contact() {
    return (
        <section className="bg-[#1E2939] text-white min-h-screen py-16 px-4 flex items-center">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
                {/* Lijeva strana */}
                <div className="flex-1 space-y-6 ">
                    <h2 className="text-4xl font-bold">Get in Touch</h2>
                    <p className="text-[#d1d5db] text-lg">
                        Contact us anytime via email or follow us on social media to stay updated!
                    </p>

                    <div className="space-y-5 text-xl">
                        <p className="">
                            Email: 
                            <a href="mailto:info@terminbuddy.com" className="text-blue-400 hover:underline">
                                info@terminbuddy.com
                            </a>
                        </p>

                        <div className="space-y-1 ">
                            <p className="text-2xl font-bold pb-2">Follow us:</p>
                            <ul className="flex gap-4 flex-col">
                                {[
                                    { name: "Instagram", url: "https://instagram.com" },
                                    { name: "LinkedIn", url: "https://linkedin.com" },
                                    { name: "GitHub", url: "https://github.com" },
                                ].map((social) => (
                                    <li key={social.name} className="group">
                                        <a
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#ffffffb4] hover:text-white transition relative"
                                        >
                                            {social.name}
                                            
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Desna strana - Forma */}
                <div className="flex-1 w-full">
                    <form className="bg-[#101828] p-6 rounded-xl shadow-xl space-y-4">
                        <div>
                            <label className="block mb-1 text-sm">Your Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded bg-[#1e1e2f] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 rounded bg-[#1e1e2f] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm">Message</label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-2 rounded bg-[#1e1e2f] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write your message here..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
