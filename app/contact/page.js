export default function Contact() {
    return (
        <section className="bg-[#1E2939] text-white min-h-screen py-16 px-4 flex items-center">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start pt-6">
                <div className="flex-1 space-y-6">
                    <h2 className="text-4xl font-bold">Kontaktirajte nas</h2>
                    <p className="text-[#d1d5db] text-lg">
                        Slobodno nas kontaktirajte putem e-maila ili nas zapratite na društvenim mrežama kako biste ostali u tijeku!
                    </p>

                    <div className="space-y-5 text-xl">
                        <p>
                            E-mail:{" "}
                            <a href="mailto:info@terminbuddy.com" className="text-blue-400 hover:underline">
                                info@terminbuddy.com
                            </a>
                        </p>

                        <div className="space-y-1">
                            <p className="text-2xl font-bold pb-2">Pratite nas:</p>
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

                <div className="flex-1 w-full">
                    <form className="bg-[#101828] p-6 rounded-xl shadow-xl space-y-4">
                        <div>
                            <label className="block mb-1 text-sm">Vaše ime</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded bg-[#1e1e2f] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Ivan Horvat"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm">E-mail</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 rounded bg-[#1e1e2f] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="ivan@primjer.com"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm">Poruka</label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-2 rounded bg-[#1e1e2f] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Napišite svoju poruku ovdje..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition"
                        >
                            Pošalji poruku
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
