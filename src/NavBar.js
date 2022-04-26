import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './App.css';


function NavBar() {
return (
    <div className="App">

    	<div class="navbar-row">
        	<div className="title"> 🎨 Palette </div>
        	
        	<Link to="/login"> 
        		<div className= "title-small"> 
        			LOGIN
        		</div> 
			</Link>


        </div>

    </div>
        );
    }

export default NavBar; 