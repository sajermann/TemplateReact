/* eslint-disable no-unused-vars */
import { useMemo, useState, useEffect } from 'react';
import { BrowserRouter, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import Header from './Components/Header';
import { AuthProvider } from './Context/AuthContext';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
	const [darkMode, setDarkMode] = useState(true);
	// const router = useParams();
	const [isLoginPage, setIsLoginPage] = useState(true);
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					type: darkMode ? 'dark' : 'light',
				},
			}),
		[darkMode]
	);
	return (
		<AuthProvider darkMode={darkMode} setDarkMode={setDarkMode}>
			<ThemeProvider theme={theme}>
				<Routes />
				<CssBaseline />
				{/* {!isLoginPage && <Header />} */}
				{/* <Header /> */}
				<ToastContainer />
			</ThemeProvider>
		</AuthProvider>
	);
}

export default App;
