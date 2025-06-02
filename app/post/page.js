"use client"

import { useState } from "react"
import { addPost } from "../utils/addPost"
import { v4 as uuidv4 } from "uuid"

const sportImages = {
    Football: "/nogomet.jpg",
    Basketball: "/kosarka.png",
    Tennis: "/tenis.jpg",
    Volleyball: "/odbojka.jpg",
    Futsal: "/futsal.jpg",
    Padel: "/padel.jpg",
    TableTennis: "/stolni-tenis.jpg",
}

const locations = ["Mostar", "Sarajevo", "Split", "Zagreb"]

export default function Post() {
    const [formData, setFormData] = useState({
        sport: "",
        image: "",
        description: "",
        time: "",
        date: "",
        location: "",
        peopleMissing: "",
        author: ""
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === "sport") {
            setFormData(prev => ({
                ...prev,
                sport: value,
                image: sportImages[value] || ""
            }))
        } else {
            setFormData(prev => ({ ...prev, [name]: value }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== '');
        if (!allFieldsFilled) {
            alert('Molimo ispunite sva polja.');
            return;
        }

        setLoading(true);
        setError('');
        setSuccess(false);

        const postWithId = { ...formData, id: uuidv4() };

        try {
            const newPost = await addPost(postWithId);

            if (newPost && newPost.length > 0) {
                setSuccess(true);
            }

            setFormData({
                sport: '',
                image: '',
                description: '',
                time: '',
                date: '',
                location: '',
                peopleMissing: '',
                author: ''
            });
        } catch (error) {
            setError('Greška pri dodavanju objave. Pokušajte ponovno.');
        } finally {
            setLoading(false);
        }
    };

    const currentDate = new Date().toISOString().split("T")[0];

    return (
        <div className="min-h-screen bg-[#1E2939] text-white py-10 px-4 flex justify-center items-center">
            <div className="w-full max-w-7xl">
                <h1 className="text-4xl font-bold mb-8 text-center">Kreiraj novu objavu</h1>
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-900 p-8 rounded-2xl shadow-xl"
                >
                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold uppercase">Autor</label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            required
                            placeholder="Unesite svoje ime"
                            className="p-3 bg-transparent border-b border-white text-white focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold uppercase">Sport</label>
                        <select
                            name="sport"
                            value={formData.sport}
                            onChange={handleChange}
                            required
                            className="p-3 bg-transparent border-b border-white text-white focus:outline-none"
                        >
                            <option value="" className="text-black">Odaberite sport</option>
                            {Object.keys(sportImages).map(sport => (
                                <option key={sport} value={sport} className="text-black">
                                    {sport}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold uppercase">Opis</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            placeholder="Kratki opis"
                            className="p-3 bg-transparent border-b border-white text-white focus:outline-none resize-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold uppercase">Vrijeme</label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="p-3 bg-transparent border-b border-white text-white focus:outline-none [&::-webkit-calendar-picker-indicator]:invert"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold uppercase">Datum</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            min={currentDate}
                            className="p-3 bg-transparent border-b border-white text-white focus:outline-none [&::-webkit-calendar-picker-indicator]:invert"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold uppercase">Lokacija</label>
                        <select
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="p-3 bg-transparent border-b border-white text-white focus:outline-none"
                        >
                            <option value="" className="text-black">Odaberite lokaciju</option>
                            {locations.map(loc => (
                                <option key={loc} value={loc} className="text-black">
                                    {loc}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold uppercase">Nedostaje igrača</label>
                        <input
                            type="number"
                            name="peopleMissing"
                            value={formData.peopleMissing}
                            onChange={handleChange}
                            required
                            min="1"
                            placeholder="1"
                            className="p-3 bg-transparent border-b border-white text-white focus:outline-none"
                        />
                    </div>

                    {formData.image && (
                        <div className="col-span-1 md:col-span-2">
                            <label className="mb-2 block font-semibold uppercase">Pregled slike</label>
                            <div
                                className="w-full h-64 rounded-lg bg-cover bg-center"
                                style={{ backgroundImage: `url(${formData.image})` }}
                            />
                        </div>
                    )}

                    <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-500 px-8 py-3 rounded-lg font-semibold transition"
                            disabled={loading}
                        >
                            {loading ? "Slanje..." : "Objavi"}
                        </button>
                    </div>
                </form>

                {error && <p className="text-red-500 mt-4">{error}</p>}
                {success && <p className="text-green-500 mt-4">Objava je uspješno dodana!</p>}
            </div>
        </div>
    )
}
