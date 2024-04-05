//Wiki Features
import { useCharacters, CharactersList } from "../features/characters"
//Ui Components
import { Pagination, Loading } from "../features/ui"

export default function HomePage() {
  const { characters, currentPage, totalPages, setCurrentPage, loading } =
    useCharacters()

  return (
    <main className="flex flex-col gap-4 items-center w-full h-full px-4 py-4">
      <h1 className="font-bold text-3xl">Rick and Morty - Characters</h1>
      {loading ? <Loading /> : <CharactersList characters={characters} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setPage={setCurrentPage}
      />
    </main>
  )
}
