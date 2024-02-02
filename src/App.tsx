import React from 'react';
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";


function App() {
    return (
        <div className='container mx-auto'>
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    );
}

export default App;
