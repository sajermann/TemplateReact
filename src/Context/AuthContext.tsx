/* eslint-disable no-unused-vars */
import { useHistory } from 'react-router-dom';
import { createContext, useContext, ReactNode, useState } from 'react';

type authContextType = {
	user: boolean;
	authentication: boolean;
	authorization: boolean;
	login: () => void;
	login2: () => void;
	logout: () => void;
};

const authContextDefaultValues: authContextType = {
	user: false,
	authentication: false,
	authorization: false,
	login: () => {},
	login2: () => {},
	logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
	return useContext(AuthContext);
}

type Props = {
	children: ReactNode;
};

export function AuthProvider({ children }: Props) {
	const history = useHistory();
	const [user, setUser] = useState<boolean>(false);
	const [authentication, setAuthentication] = useState<boolean>(false);
	const [authorization, setAuthorization] = useState<boolean>(false);

	const login = () => {
		console.log('Realizou Login');
		setUser(true);
		setAuthorization(true);
		history.push('/all/home');
	};

	const login2 = () => {
		console.log('Realizou Login Sem Autorização');
		setUser(true);
		setAuthorization(false);
		history.push('/all/home');
	};

	const logout = () => {
		console.log('Realizou Logout');
		setUser(true);
	};

	const value = {
		user,
		authentication,
		authorization,
		login,
		login2,
		logout,
	};

	return (
		<>
			<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
		</>
	);
}
