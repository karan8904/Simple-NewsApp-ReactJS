import { useState } from "react"
import { Navbar } from "./components/Navbar"
import { NewsFeed } from "./components/NewsFeed"
import { Footer } from "./components/Footer"

function App() {
  const [category, setCategory] = useState("general")
  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsFeed category={category} />
      <Footer />
    </>
  )
}

export default App
