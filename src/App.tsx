/* eslint-disable no-unused-vars */
import { useMemo, useState, useEffect } from 'react';
import { BrowserRouter, useParams } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import Header from './Components/Header';
import { AuthProvider } from './Context/AuthContext';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	// const router = useParams();
	const [isLoginPage, setIsLoginPage] = useState(true);
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					type: prefersDarkMode ? 'dark' : 'light',
				},
			}),
		[prefersDarkMode]
	);
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<AuthProvider>
					<Routes />
					<CssBaseline />
					{/* {!isLoginPage && <Header />} */}
					{/* <Header /> */}
					<ToastContainer />
				</AuthProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
