import React from 'react';
import Navbar from './Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;