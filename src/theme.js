import { Roboto, Lato, Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Montserrat({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#b37400',
      dark: '#ffffff',
      contrastText: '#fff1bf',
    },
    secondary: {
      main: '#fff1bf',
      dart: '#ffe380',
      contrastText: '#b37400',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
    text: {
      primary: '#212121',
    },
    grey: '#b3b3b3',
    success: {
      main: '#96b300',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
