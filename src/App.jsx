// React Router
import { Routes, Route } from "react-router-dom"
// Pages  (components)
import { ErrorNotFoundPage, HomePage, CharacterDetailPage } from "./pages"

function App() {
  return (
    <div className="w-full">
      <main className="w-full">
        <Routes>
          <Route path="*" element={<ErrorNotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/:characterId" element={<CharacterDetailPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
