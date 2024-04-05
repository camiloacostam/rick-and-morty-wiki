import { test, assert } from "vitest"
import { sortByNameAsc, sortByNameDesc } from "../../utils/sorter"

// Array de ejemplo
const characters = [
  {
    id: 1,
    name: "Rick Sanchez",
  },
  {
    id: 2,
    name: "Morty Smith",
  },
  {
    id: 3,
    name: "Summer Smith",
  },
]

// Prueba para la función de ordenamiento ascendente
test("Ordenar ascendente por nombre", () => {
  const sorted = sortByNameAsc(characters)
  assert.deepEqual(sorted, [
    { id: 2, name: "Morty Smith" },
    { id: 1, name: "Rick Sanchez" },
    { id: 3, name: "Summer Smith" },
  ])
})

// Prueba para la función de ordenamiento descendente
test("Ordenar descendente por nombre", () => {
  const sorted = sortByNameDesc(characters)
  assert.deepEqual(sorted, [
    { id: 3, name: "Summer Smith" },
    { id: 1, name: "Rick Sanchez" },
    { id: 2, name: "Morty Smith" },
  ])
})
