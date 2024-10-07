// import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="banner bg-gray-300 h-64 flex items-center justify-center">
                <h1 className="text-4xl">Welcome to Mijan Training Institute</h1>
            </div>
            <div className="instructions p-4">
                <h2>How It Works</h2>
                <p>Guidelines on how to use the website...</p>
            </div>
            <div className="contact p-4">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Your Name" />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="about p-4">
                <h2>About Us</h2>
                <p>Md. Mijanur Rahman Howlader</p>
            </div>
            <footer className="p-4">
                <p>Contact details...</p>
            </footer>
        </div>
    );
};

export default Home;
