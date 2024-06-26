import { Link } from "react-router-dom"
import { Loading } from "../features/ui"
import { Character, useCharacterDetail } from "../features/characters"

export default function CharacterDetailPage() {
  const { character, loading } = useCharacterDetail()

  return (
    <span className="m-2 p-2 w-auto flex flex-col items-center gap-6">
      {loading ? <Loading /> : <Character character={character} />}
      <Link
        className="text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-lg text-sm px-5 py-2.5  mb-2  transition duration-300 ease-in-out transform hover:scale-105 font-bold"
        to="/"
      >
        Volver al Inicio
      </Link>
    </span>
  )
}
