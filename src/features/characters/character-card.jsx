import { useNavigate } from "react-router-dom"

export default function CharacterCard({ character }) {
  const navigate = useNavigate()
  return (
    <span
      id={character?.id || ""}
      className="w-[219px] h-[206px] overflow-hidden text-center flex flex-col justify-start items-center gap-5 p-4 bg-white border border-gray-200 rounded-lg shadow my-3 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
      onClick={() => navigate(`/${character?.id}`)}
    >
      <img
        className="w-24 h-24  rounded-full shadow-lg"
        src={character?.image || ""}
        alt={character?.name || ""}
      />
      <div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 text-ellipsis">
          {character?.name || ""}
        </h5>
        <span className="text-sm text-gray-500 ">
          {character?.species || ""}
        </span>
      </div>
    </span>
  )
}
