//Wiki Features
import { useCharacters, CharactersList } from "../features/wiki"
//Ui Components
import { Pagination } from "../features/ui"

export default function HomePage() {
  const { characters, currentPage, totalPages, setCurrentPage } =
    useCharacters()

  return (
    <main className="flex flex-col gap-4 items-center w-full h-full px-4 py-4">
      <h1 className="font-bold text-3xl">Rick and Morty - Characters</h1>
      <CharactersList characters={characters || []} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setPage={setCurrentPage}
      />
    </main>
  )
}
