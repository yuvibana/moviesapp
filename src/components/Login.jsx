import { useState } from "react";
import { useNavigate } from "react-router";
import { IoMdClose } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";


const Login = ({ loggedIn }) => {

    const [typePass, setTypePass] = useState('password');
    const [formdata, setFromData] = useState({
        email: '', password: ''
    });

    const hndlChange = (e) => {
        const { name, value } = e.target;
        setFromData((prevData) => ({ ...prevData, [name]: value }));
    }

    const Navigate = useNavigate();

    const HndlLogin = () => {
        if (!formdata.email || !formdata.password) {
            alert("Please Enter Valid Email and Password");
            return;
        }

        if (formdata.email === "admin" && formdata.password === "admin") {
            localStorage.setItem("email", formdata.email);
            localStorage.setItem("password", formdata.password);
            Navigate("/movieslist");
        } else {
            alert("Wrong credentials");
        }
    };
    const hndlClose = () => loggedIn(false)

    const togglePasswordVisibility = () => {
        setTypePass((prevType) => (prevType === "password" ? "text" : "password"));
    };

    return (
        <div className="Login">
            <button className="closebtn" onClick={hndlClose}><IoMdClose /></button>
            <div className="heading">Sign In</div>
            <div className="login-inputbox">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    onChange={hndlChange}
                />
            </div>
            <div className="login-inputbox" style={{ position: 'relative' }}>
                <input
                    type={typePass}
                    name="password"
                    placeholder="Enter Password"
                    onChange={hndlChange}
                />
                <span
                    onClick={togglePasswordVisibility}
                    style={{ position: 'absolute', top: '25%', right: '15px', fontSize: '25px', cursor: 'pointer' }}>
                    {typePass === "password" ? <IoEyeSharp /> : <FaEyeSlash />}
                </span>
            </div>
            <button
                className="btn"
                style={{ textAlign: 'center' }}
                onClick={HndlLogin}
            >Sign In</button>
        </div>
    )
}

export default Login;