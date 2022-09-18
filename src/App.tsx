import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPageLayz";
import {MainPageLazy} from "./pages/MainPage/MainPageLazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Togle</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                      <Route path={'/about'} element={<AboutPageLazy />}/>
                      <Route path={'/'} element={<MainPageLazy />}/>
                  </Routes>
            </Suspense>
        </div>
    );
};

export default App;