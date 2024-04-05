import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getAllCharacters,
  setPage,
  setCharacters,
} from "./characters-list-slice"
import { sortByNameAsc, sortByNameDesc } from "../../utils/sorter"

export function useCharacters() {
  const characters = useSelector((state) => state.charactersList.characters)
  const currentPage = useSelector((state) => state.charactersList.currentPage)
  const totalPages = useSelector((state) => state.charactersList.totalPages)
  const loading = useSelector((state) => state.charactersList.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCharacters(currentPage)).then((res) => {})
  }, [currentPage])

  const setCurrentPage = (NewPage) => {
    dispatch(getAllCharacters(currentPage)).then(() => {
      dispatch(setPage(NewPage))
    })
  }

  const sortCharactersAsc = ({ characters }) => {
    const sortedCharacters = sortByNameAsc(characters)
    return dispatch(setCharacters(sortedCharacters))
  }

  const sortCharactersDesc = ({ characters }) => {
    const sortedCharacters = sortByNameDesc(characters)
    return dispatch(setCharacters(sortedCharacters))
  }

  return {
    characters,
    currentPage,
    totalPages,
    setCurrentPage,
    loading,
    sortCharactersAsc,
    sortCharactersDesc,
  }
}
