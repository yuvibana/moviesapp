import { Link } from "react-router-dom";
import { LogoSvg } from "../staticImages";
import { useState } from "react";
import Login from "../Login";
const Header = () => {

    const [loggedIn, setloggedIn] = useState(false);
    const OpnLoginBox = () => setloggedIn(true)

    return (
        <>
            <header className="LoginHeader">
                <div className="headerflex dflex contentBetween itemsCenter">
                    <Link to={'/'} className="logo">
                        <img src={LogoSvg} alt={LogoSvg} />
                    </Link>
                    <button className="headerbtns btn" onClick={OpnLoginBox}>Login/Signin</button>
                </div>
            </header>
            {loggedIn ? <Login loggedIn={setloggedIn} /> : ''}
        </>
    )
}
export default Header;