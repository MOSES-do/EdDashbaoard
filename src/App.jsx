import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Routes, Route } from 'react-router-dom'
import { MyProSidebarProvider } from "./scenes/global/sidebar/sidebarContext"
import Topbar from './scenes/global/Topbar'
import Sidebar from "./scenes/global/sidebar/Sidebar"
import Dashboard from "./scenes/dashboard/Dashboard"
import Team from "./scenes/team/Team"
import Invoices from "./scenes/invoices/Invoices"
import Contacts from "./scenes/contacts/Contacts"
import Bar from "./scenes/bar/Bar"
import Form from "./scenes/form/Form"
import Line from "./scenes/line/Line"
import Pie from "./scenes/pie/Pie"
import FAQ from "./scenes/faq/FAQ"
import Geography from "./scenes/geography/Geography"
import Calendar from "./scenes/calendar"
import { useState, useEffect } from 'react'
import { mockData } from "./data/mockData"


function App() {
  const [theme, colorMode] = useMode();



  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    const filteredData = mockData.filter(data => ((data.firstName).toLowerCase()).includes(search.toLowerCase())
      || ((data.lastName).toLowerCase()).includes(search.toLowerCase()) || ((data.email).toLowerCase()).includes(search.toLowerCase()) || ((data.phone).toLowerCase()).includes(search.toLowerCase()) || ((data.access).toLowerCase()).includes(search.toLowerCase()))

    setSearchResult(filteredData)
  }, [mockData, search])
  console.log(searchResult)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <MyProSidebarProvider >
            <div style={{ height: "100%", width: "100%" }}>
              <main className="content">
                <Topbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/team" element={<Team search={search} setSearch={setSearch} searchResult={searchResult} />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/form" element={<Form searchResult={searchResult} setSearchResult={setSearchResult} />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/geography" element={<Geography />} />
                  <Route path="/calendar" element={<Calendar />} />
                </Routes>
              </main>
            </div>
          </MyProSidebarProvider>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
