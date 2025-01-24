import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#8f887a", dark: "#292814", light: "#f7f7f7", },
    secondary: { main: "#706b61", light: "#afaca3" },
    success: { main: "#659739", dark: "#9e6849" },
    error: { main: "#F44336" },
    warning: { main: "#e0ac5b" },
    info: { main: "#706b61" }
  }
})

export default theme