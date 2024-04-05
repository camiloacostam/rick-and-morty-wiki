export default function Character({ character }) {
  return (
    <>
      <div className="flex gap-4 justify-center p-8  bg-white border border-gray-200 rounded-lg shadow">
        <img
          src={character?.image}
          alt={character?.name}
          className="aspect-square h-60 w-60 object-cover rounded-lg shadow-lg"
        />
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl">{character?.name}</h1>
          <p>Status: {character?.status}</p>
          <p>Species: {character?.species}</p>
          <p>Origin: {character?.origin?.name}</p>
          <p>Location: {character?.location?.name}</p>
        </div>
      </div>
    </>
  )
}
