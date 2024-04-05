//Wiki Features
import { useCharacters, CharactersList } from "../features/characters"
//Ui Components
import { Pagination, Loading } from "../features/ui"

export default function HomePage() {
  const {
    characters,
    currentPage,
    totalPages,
    setCurrentPage,
    loading,
    sortCharactersAsc,
    sortCharactersDesc,
  } = useCharacters()

  return (
    <main className="flex flex-col gap-4 items-center w-full h-full px-4 py-4">
      <h1 className="font-bold text-3xl">Rick and Morty - Characters</h1>
      {characters.length > 0 && (
        <div className="flex flex-row-reverse gap-4 items-center ">
          <button
            onClick={() => sortCharactersAsc({ characters })}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sort by Name Asc
          </button>
          <button
            onClick={() => sortCharactersDesc({ characters })}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sort by Name Desc
          </button>
        </div>
      )}
      {loading ? <Loading /> : <CharactersList characters={characters} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setPage={setCurrentPage}
      />
    </main>
  )
}
