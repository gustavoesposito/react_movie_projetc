import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"


import  "./Navbar.css" ;
const Navbar = () => {
const [search, setSearch] = useState("")
const navigate = useNavigate();

const handleSubmit =(e) => {
  console.log(e)
}

    return (
        <nav id="navbar">
        <h2>
            <Link to="/"><BiCameraMovie/>EspoFlix</Link>
        </h2>
         <form >
             <input  type="text" placeholder="Busque um filme"
             onChange={(e) => setSearch(e.target.value)}
             value={search}
             />
             <button type="submit">
                <BiSearchAlt2/>
             </button>
         </form>
        
        </nav>
    )
}

 
export default Navbar;