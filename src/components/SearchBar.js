import React, { useState } from 'react'
import {Paper, Text, TextFieldtField} from "@material-ui/core"
import TextField from '@material-ui/core/TextField/TextField';

const SearchBar = ({onSubmit}) => {
    const [searchItem, setSearchItem] = useState("");
    const handleChange = (event) => {
        setSearchItem(event.target.value)
  }
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchItem);
    }
  }
  return (
    <Paper elevation={6} styling={{ padding: "25px" }}>
          <TextField
              fullWidth
              label="Search.."
              value={searchItem}
        onChange={handleChange}
        onKeyPress= {onKeyPress}
          />
    </Paper>
  )
}

export default SearchBar
