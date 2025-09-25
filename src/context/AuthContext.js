import React, { createContext } from 'react';

// --- Configuration ---
// Make sure these URLs are correct for your setup
const DASHBOARD_URL = 'http://localhost:3001'; // The URL for your SEPARATE dashboard app
const API_URL = 'http://localhost:3002/api/auth'; // The URL for your backend API

// 1. Create the context
const AuthContext = createContext();

// 2. Create the provider component
export const AuthProvider = ({ children }) => {

    // This is the function the Login component will call
    const loginAction = async (credentials) => {
        try {
            // Call your backend's /login endpoint
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            // Check if the login was successful and a token was received
            if (response.ok && data.token) {
                // If successful, redirect the entire browser to the dashboard,
                // passing the token in the URL.
                window.location.href = `${DASHBOARD_URL}/auth?token=${data.token}`;
            } else {
                // If the backend returned an error, throw it to be caught by the Login component
                throw new Error(data.message || 'Login failed');
            }
        } catch (err) {
            console.error(err);
            throw err; // Re-throw the error so the Login component's UI can react to it
        }
    };

    // The value provided to the context contains the loginAction function
    return (
        <AuthContext.Provider value={{ loginAction }}>
            {children}
        </AuthContext.Provider>
    );
};

// 3. Export the context itself
export default AuthContext;