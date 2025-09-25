import React, { useState } from 'react';
 
import { useNavigate, Link } from 'react-router-dom';
 
import './Signup.css';

 
const API_URL = 'https://stock-trading-backend-pi.vercel.app/api/auth';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch(`${API_URL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Signup failed');
            }

            alert('Signup successful! Please log in.');
            navigate('/login');

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                 
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
                <button type="submit">Sign Up</button>

              
                <div className="login-prompt">
                    <p>Already have an account? <Link to="/login">Log In</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Signup;