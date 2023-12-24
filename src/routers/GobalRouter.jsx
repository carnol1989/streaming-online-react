import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Overview from '../views/Overview'

import NotFound from '../components/ui/NotFound'

import FilmScreen from '../components/films/FilmScreen'
import FilmDetail from '../components/films/FilmDetail'
import SearchScreen from '../components/search/SearchScreen'
import {Header} from "../components/ui/Header";
import Navbar from "../components/ui/Navbar";

function GlobalRouter () {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout><Overview /></Layout>} />
                    <Route path="/films" element={<Layout><FilmScreen /></Layout>} />
                    <Route path="/films/:filmId" element={<Layout><FilmDetail /></Layout>} />
                    <Route path="/search" element={<Layout><SearchScreen /></Layout>} />
                    <Route path="*" element={<Layout><NotFound /></Layout>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        <Navbar />
        {children}
    </>
);

export default GlobalRouter;