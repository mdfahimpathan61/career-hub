import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-lg">
        <li> <NavLink to={'/'}  >Home</NavLink> </li>
       
        <li>
        <NavLink to={'/appliedjobs'}>Applied Jobs</NavLink>
          
        </li> 
        
        <li><a>Blog</a></li>
      </ul>
    </div>
    <h1 className="text-3xl font-bold">Career Hub</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold text-lg">
    <li> <NavLink to={'/'}>Home</NavLink> </li>
      
      <li  >
       <NavLink to={'/appliedjobs'}>Applied Jobs</NavLink>
      </li>
      <li><a>Blog</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#7E90FE] text-white">Start Applying</a>
  </div>
</div>
            
        </div>
    );
};

export default Header;