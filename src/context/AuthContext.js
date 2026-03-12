import React, { createContext } from 'react';

const DASHBOARD_URL = 'https://stock-trading-dashboard-wxvf.onrender.com';
const API_URL = 'https://stock-trading-backend-gi24.onrender.com';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const loginAction = async (credentials) => {
        try {
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (response.ok && data.token) {

               
                localStorage.setItem('token', data.token);

                // Redirect to dashboard AuthHandler
                window.location.href = `${DASHBOARD_URL}/auth?token=${data.token}`;
            } 
            else {
                throw new Error(data.message || 'Login failed');
            }

        } catch (err) {
            console.error("Login Error:", err);
            throw err;
        }
    };

    return (
        <AuthContext.Provider value={{ loginAction }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
