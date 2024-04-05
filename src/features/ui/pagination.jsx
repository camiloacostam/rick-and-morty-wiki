export function Pagination({ currentPage, setPage, totalPages }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 ">
          Showing{" "}
          <span className="font-semibold text-gray-900 ">{currentPage}</span> of{" "}
          <span className="font-semibold text-gray-900 ">{totalPages}</span>{" "}
          pages
        </span>

        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={() => setPage(Number(currentPage) - 1)}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900   "
            disabled={Number(currentPage) === 1}
          >
            Prev
          </button>
          <button
            onClick={() => setPage(Number(currentPage) + 1)}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 "
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}
