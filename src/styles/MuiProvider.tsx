import React from 'react'
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      // main: '#3f51b5',
      main: '#673ab7',
    },
    secondary: {
      main: '#40c4ff',
    },
  },
  typography: {
    fontFamily: "'Ubuntu', sans-serif",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
};

const theme = createTheme(themeOptions)

type MuiProviderTypes = {
  children: React.ReactElement
}

function MuiProvider({ children }: MuiProviderTypes) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {children}
      </CssBaseline>
    </ThemeProvider>
  )
}

export default MuiProvider