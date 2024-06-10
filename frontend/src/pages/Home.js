import React from 'react';

const Home = () => {
    const googleLogin = () => {
        window.open('http://localhost:5000/auth/google', '_self');
    };

    return (
        <div>
            <h1>Welcome to the Feedback Platform</h1>
            <button onClick={googleLogin}>Login with Google</button>
        </div>
    );
};

export default Home;
