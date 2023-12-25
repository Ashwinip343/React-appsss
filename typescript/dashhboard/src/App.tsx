import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { ThemeProvider } from "@emotion/react"
import { Box, CssBaseline } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"

// import Navbar from './scenes/dashboard' 

function App() {
  // const [count, setCount] = useState(0)
  const theme = useMemo(()=>createTheme(themeSettings), [])
  return (
   <div>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>

    <Box width='100%' height='100%' padding='1rem 2rem 4rem 2rem '></Box>
    {/* <Navbar></Navbar> */}
      <Routes>
        <Route path='/' element={<div>Dashboard Page</div>}></Route>
        <Route path='/predictions' element={<div>Prediction Page</div>}> </Route>
      </Routes>
    </ThemeProvider></BrowserRouter>
   </div>
  )
}

export default App
