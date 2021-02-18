import React, { createContext } from 'react';
import { useSelector } from 'react-redux';

export const AuthContext = createContext({
	isLoggedIn: false,
});

const AuthContextProvider = props => {
	const isLoggedIn = useSelector(state => state.auth.token !== null);
	return <AuthContext.Provider value={isLoggedIn}>{props.children}</AuthContext.Provider>;
};

export default AuthContextProvider;
