import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCharacters, setPage } from "./characters-list-slice"

export function useCharacters() {
  const characters = useSelector((state) => state.charactersList.characters)
  const currentPage = useSelector((state) => state.charactersList.currentPage)
  const totalPages = useSelector((state) => state.charactersList.totalPages)
  const loading = useSelector((state) => state.charactersList.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCharacters(currentPage))
  }, [currentPage])

  const setCurrentPage = (NewPage) => {
    dispatch(getAllCharacters(currentPage)).then(() => {
      dispatch(setPage(NewPage))
    })
  }

  return { characters, currentPage, totalPages, setCurrentPage, loading }
}
