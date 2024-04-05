import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
// Slice
import { getCharacterInfo } from "./character-detail-slice"
import { useEffect } from "react"

export function useCharacterDetail() {
  const character = useSelector((state) => state.characterDetail.character)
  const loading = useSelector((state) => state.characterDetail.loading)

  const dispatch = useDispatch()
  const { characterId } = useParams()

  useEffect(() => {
    dispatch(getCharacterInfo(characterId))
  }, [dispatch, characterId])

  return { character, loading }
}
