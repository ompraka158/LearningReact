import React from 'react';

const NavBar = ({totalCounters}) => {
    return ( 
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                Navbar 
                   <span
                    className="badge badge-pill bg-light"
                   >
                   {totalCounters}
                </span>
            </a>
        </nav>        
    );
}
 
export default NavBar;