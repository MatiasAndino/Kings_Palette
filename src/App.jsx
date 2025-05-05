import { PaletteProvider } from "./core/palette-context/PaletteContext"
import HomeView from "./feature/home/view/HomeView"

function App() {

  return (
    <PaletteProvider>
      <HomeView />
    </PaletteProvider>
  )
}

export default App
