export default function Categories({ onSelectSport }) {
  return (
    <header className="bg-[#1E2939] w-full p-0 sm:p-5 overflow-hidden">
      <h2 className="text-white text-lg sm:text-2xl font-bold p-3 flex sm:justify-center">Most popular:</h2>
      <div className="flex gap-2 sm:gap-5 py-3 px-2 sm:justify-center overflow-x-auto scrollbar-hide whitespace-nowrap">
        <CatCard sport="Football" image="/nogomet.jpg" 
        onClick={() => {onSelectSport("Football")
          const el = document.getElementById("main");
          if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }}} />
        <CatCard sport="Tennis" image="/tenis.jpg" onClick={() => onSelectSport("Tennis")} />
        <CatCard sport="Padel" image="/padel.jpg" onClick={() => onSelectSport("Padel")} />
        <CatCard sport="Basketball" image="/kosarka.png" onClick={() => onSelectSport("Basketball")} />
        <CatCard sport="Volleyball" image="/odbojka.jpg" onClick={() => onSelectSport("Volleyball")} />
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
