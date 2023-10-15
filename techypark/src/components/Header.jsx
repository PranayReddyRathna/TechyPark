import React from 'react'
//import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link";

const Header = () => {
  return (
    <>
    <nav>
    <h1>TechPark</h1>
    <div>
        <HashLink to={"/"}>Home</HashLink>
        <HashLink to={"/#about"}>About US</HashLink>
        <HashLink to={"/query"}>Query</HashLink>
        <HashLink to={"/service"}>Service</HashLink>
    </div>
    </nav>
    </>
   
  )
}

export default Header