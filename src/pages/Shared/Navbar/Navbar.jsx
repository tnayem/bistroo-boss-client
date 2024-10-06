import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const navItems = <>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li className="px-1"><NavLink to='/contact'>CONTACT US</NavLink></li>
        <li><NavLink to='/dashboard'>DASHBOARD</NavLink></li>
        <li className="px-1"><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/our-shop'>Our Shop</NavLink></li>
    </>
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                           {navItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">BISTRO BOSS</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;