import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#affff2',
			main: '#7cdfbf',
			dark: '#49ad8f',
			contrastText: '#fff',
		},
		secondary: {
			light: '#95ffb3',
			main: '#5cf482',
			dark: '#00c053',
			contrastText: '#000',
		},
	},
});

export default theme;
