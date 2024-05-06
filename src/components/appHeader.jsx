import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./staticImages";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";


const AppHeader = () => {
    const [isDrpUer, setIsDrpUser] = useState('')
    return (
        <div className="appHeader conatainerFluid conatainerFluid">
            <div className="flexheader dflex itemsCenter contentBetween">
                <Link to={'/'} className="logo">
                    <img src={Logo} alt={Logo} />
                </Link>

                <ul className="navItem dflex">
                    <li><Link to={'/'} className="navlink">Home</Link></li>
                    <li><Link to={'/'} className="navlink">Tv Shows</Link></li>
                    <li><Link to={'/'} className="navlink">Movies</Link></li>
                    {/* <li><Link to={'/'} className="navlink">News & Popular</Link></li>
                    <li><Link to={'/'} className="navlink">My List</Link></li> */}
                </ul>
                <div className="userProfile dflex itemsCenter">
                    {/* <span className="icons"><FaSearch /></span> */}
                    {/* <span className="icons"><IoMdNotificationsOutline /></span> */}
                    <button className="profileIcon" onClick={() => isDrpUer ? setIsDrpUser('') : setIsDrpUser('active')}><CgProfile /></button>
                    <div className={`drpUser ${isDrpUer}`}>
                        <span>Edit</span>
                        <span>Log Out</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;