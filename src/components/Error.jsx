import { Link } from "react-router-dom";
import { img_404 } from "./staticImages";
import { IoPlaySkipBack } from "react-icons/io5";

const ErrPage = () => {
    return (
        <div className="Page404" style={{ textAlign: 'center' }}>
            <img src={img_404} alt="" />
            <Link className="btn dflex itemsCenter" to={'/'}><IoPlaySkipBack /> Go Back</Link>
        </div>
    )
}
export default ErrPage;