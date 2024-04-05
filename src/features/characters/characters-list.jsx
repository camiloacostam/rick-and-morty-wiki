import CharacterCard from "./character-card"

export default function CharactersList({ characters }) {
  return (
    <div className="lg:max-h-[700px] lg:overflow-auto grid grid-cols-1 gap-3 md:grid-cols-3 xl:grid-cols-4 px-5">
      {characters &&
        characters?.map((character) => (
          <CharacterCard key={character?.id} character={character} />
        ))}
    </div>
  )
}
