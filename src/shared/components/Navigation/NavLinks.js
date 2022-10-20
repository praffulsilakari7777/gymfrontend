import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../FormElements/Button';

import { AuthContext } from  '../../context/auth-context';

import './NavLinks.css';
import { AiOutlineUserAdd } from'react-icons/ai';
import { AiOutlineAppstoreAdd } from'react-icons/ai';
import { RiHome3Line } from'react-icons/ri';
import { GrLogin } from'react-icons/gr';

const NavLinks = props => {
     
    const auth = useContext(AuthContext);

    return <ul className="nav-links">
        
        {/* <li> <NavLink to="/" exact>Upsc Archive</NavLink> </li> */}
        {/* <li>
            <NavLink to="/blog" exact>Blog</NavLink> 
        </li> */}
        {/* {auth.isLoggedIn && (<li>
            <NavLink to="/places/new">ADD PLACES</NavLink>
        </li>)} */}
          {/* <li>
            <NavLink to="/" exact>About Us</NavLink> 
        </li> */}
        {/* {auth.isLoggedIn && (<li>
            <NavLink to={`/user/chapter/${auth.userId}`}>Favourites</NavLink>
        </li>)} */}
{/*         
        {!auth.isLoggedIn && (<li>
            <NavLink to="/auth">Login</NavLink>
        </li>) } */}

        {/* {auth.isLoggedIn && (
            <li>
                <button onClick={auth.logout}>Logout</button>
            </li>
        )} */}


{auth.role==='admin' && props.e==='o' && (<li><b>Admin Panel</b></li>)}
        {auth.role==='admin' && (<li><NavLink to={`/pages`}>Pages</NavLink></li>)}
        {auth.role==='admin' && (<li><NavLink to={`/categories`}>Categories</NavLink></li>)}
        {auth.role==='admin' && props.e==='o' && (<li><b></b></li>)}
        {auth.role==='admin' && props.e==='o' && (<li><b>Users Panel</b></li>)}
        <li className="secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Home"><NavLink to="/" exact><RiHome3Line /></NavLink></li>
        <li className="secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add Member"><NavLink to="/addmember" exact><AiOutlineUserAdd /></NavLink></li>
        <li className="secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Manage Packages"><NavLink to="/addpackage" exact><AiOutlineAppstoreAdd /></NavLink></li>
        <li className="secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Queries"><NavLink to="/addmember" exact><AiOutlineUserAdd /></NavLink></li>
        <li className="secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="User access"><NavLink to="/addpackage" exact><AiOutlineAppstoreAdd /></NavLink></li>

                {/* {auth.isLoggedIn && (<li><NavLink to="/places/new">ADD PLACES</NavLink></li>)} */}
        {/* <li><NavLink to="/about" exact>About Us</NavLink></li> */}
          {/* {auth.isLoggedIn && (<li><NavLink to={`/user/chapter/${auth.userId}`}>Favourites</NavLink></li>)} */}
          {!auth.isLoggedIn && (<li  data-bs-toggle="tooltip" data-bs-placement="bottom" title="login/signup"><NavLink to="/user/auth">Login</NavLink></li>)}
          {auth.isLoggedIn && (<li><button onClick={auth.logout}>Logout</button></li>)}
        
    </ul>
};

export default NavLinks;
