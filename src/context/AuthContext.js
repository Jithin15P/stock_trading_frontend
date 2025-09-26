import React, { createContext } from 'react';

 
const DASHBOARD_URL = 'https://stock-trading-dashboard-tau.vercel.app';  
const API_URL = 'https://stock-trading-backend-nu.vercel.app/api/auth'; 
 
const AuthContext = createContext();

 
export const AuthProvider = ({ children }) => {

    
    const loginAction = async (credentials) => {
        try {
            
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            
            if (response.ok && data.token) {
                
                window.location.href = `${DASHBOARD_URL}/auth?token=${data.token}`;
            } else {
                 
                throw new Error(data.message || 'Login failed');
            }
        } catch (err) {
            console.error(err);
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