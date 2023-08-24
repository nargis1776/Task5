import React from 'react'
import {Link, useNavigate } from 'react-router-dom'
function Navbar() {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("signin")
        navigate("/login")
    }
    return (
        <>
            <nav className='navbar navbar-expand-lg text-white h4 bg-secondary'>
            Leave Managment
            {/* <Link Leave Managment to='/'>Leave Managment</Link> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto"></ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-primary my-2 my-sm-0 mr-0" type="button" onClick={() => navigate("/login")}>Login</button>
                        {/* <button className="btn-danger my-2 my-sm-0" type="button" onClick={handleLogout}>Logout</button> */}
                    </form>
                </div>
            </nav>
        </>


    )
}

export default Navbar