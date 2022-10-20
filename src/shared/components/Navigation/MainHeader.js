import React from 'react';
import IndexNavbar from "../../../Gym/components/Navbars/IndexNavbar";

import './MainHeader.css';

const MainHeader = props => {
    // return (<header className="main-header">
    //     {props.children}
    // </header>)
       return ( <IndexNavbar fixed />)
};


export default MainHeader;