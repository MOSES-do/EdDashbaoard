import React from 'react'
import { useTheme } from "@mui/material"
import { tokens } from "../theme"


const Tablesearch = ({ search, setSearch }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <input placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}
            style={{ backgroundColor: colors.greenAccent[600], outline: 'none', border: 'none', padding: '8px', borderRadius: "3px", color: "white", }}
        />)
}

export default Tablesearch