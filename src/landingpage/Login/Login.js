 // frontend/src/landingpage/Login/Login.js

import React, { useState } from 'react';
// 1. Import Link from react-router-dom
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// 2. Import the external CSS file
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { loginAction } = useAuth();

    // The handleSubmit logic remains the same
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await loginAction({ email, password });
        } catch (err) {
            // This error message is more specific now, coming from the AuthContext
            setError(err.message || 'Login failed. Please check your credentials.');
            console.error(err);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                {/* 3. Replaced inline style with a className */}
                {error && <p className="error-message">{error}</p>}
                
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>

                {/* 4. Added the "Don't have an account?" prompt with a Link */}
                <div className="signup-prompt">
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Login;