export default function Categories({ onSelectSport }) {
  return (
    <header className="bg-[#1E2939] w-full p-5 flex-col">
      <div className="flex flex-row flex-wrap gap-5 justify-center">
        <CatCard sport="Football" image="/nogomet.jpg" onClick={() => onSelectSport("Football")} />
        <CatCard sport="Basketball" image="/kosarka.png" onClick={() => onSelectSport("Basketball")} />
        <CatCard sport="Tennis" image="/tenis.jpg" onClick={() => onSelectSport("Tennis")} />
        <CatCard sport="Volleyball" image="/odbojka.jpg" onClick={() => onSelectSport("Volleyball")} />
        <CatCard sport="Futsal" image="/futsal.jpg" onClick={() => onSelectSport("Futsal")} />
        <CatCard sport="Padel" image="/padel.jpg" onClick={() => onSelectSport("Padel")} />
      </div>
    </header>
  )
}

function CatCard({ sport, image, onClick }) {
  return (
    <div
      className="w-[200px] h-[150px] rounded-2xl bg-cover bg-center relative shadow-lg cursor-pointer duration-300 hover:scale-110"
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
      <div className="absolute bottom-3 left-3 text-white text-2xl font-bold drop-shadow-lg">
        {sport}
      </div>
    </div>
  )
}
