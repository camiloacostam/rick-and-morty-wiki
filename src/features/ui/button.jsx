export function Button({ label }) {
  return (
    <button className="text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2  transition duration-300 ease-in-out transform hover:scale-105 font-bold">
      {label}
    </button>
  )
}
