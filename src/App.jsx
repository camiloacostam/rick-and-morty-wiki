// React Router
import { Routes, Route } from "react-router-dom"
// Pages  (components)
import { ErrorNotFoundPage, HomePage } from "./pages"
import { Header } from "./features/ui"

function App() {
  return (
    <div className="w-full">
      <Header />
      <main className="w-full">
        <Routes>
          <Route path="*" element={<ErrorNotFoundPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
