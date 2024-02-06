import React from 'react';
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import {useNavigate} from "react-router-dom";


function App() {
    return (
        <div className='w-[1150px] mx-auto '>
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    );
}

export default App;
