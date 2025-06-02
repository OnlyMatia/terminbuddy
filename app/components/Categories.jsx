export default function Categories({ onSelectSport }) {
  return (
    <header className="bg-[#1E2939] w-full p-0 sm:p-5 overflow-hidden">
      <h2 className="text-white text-lg sm:text-xl font-bold uppercase p-3 flex sm:justify-center">Najpopularnije kategorije:</h2>
      <div className="flex gap-2 sm:gap-5 py-3 px-2 sm:justify-center overflow-x-auto scrollbar-hide whitespace-nowrap">
        {[
          { sport: "Nogomet", label: "Football", image: "/nogomet.jpg" },
          { sport: "Tenis", label: "Tennis", image: "/tenis.jpg" },
          { sport: "Padel", label: "Padel", image: "/padel.jpg" },
          { sport: "Košarka", label: "Basketball", image: "/kosarka.png" },
          { sport: "Odbojka", label: "Volleyball", image: "/odbojka.jpg" },
        ].map(({ sport, label, image }) => (
          <CatCard
            key={sport}
            sport={sport}
            image={image}
            onClick={() => {
              onSelectSport(label);
              const el = document.getElementById("main");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        ))}
      </div>
    </header>
  )
}

function CatCard({ sport, image, onClick }) {
  return (
    <div
      className="inline-block w-[150px] h-[100px] sm:w-[200px] sm:h-[150px] rounded-2xl bg-cover bg-center relative shadow-lg cursor-pointer duration-300 hover:scale-110 flex-shrink-0"
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
      <div className="absolute bottom-3 left-3 text-white text-lg sm:text-2xl font-bold drop-shadow-lg">
        {sport}
      </div>
    </div>
  )
}
