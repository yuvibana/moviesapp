import Header from "./Header";
import { GrNext } from "react-icons/gr";
import AppSlider from "../commonSlider";
// import { SliderImages } from "../SliderImages";
import Banner from '../../assets/images/banner.jpg'

const AppBanner = () => {
    return (
        <section className="AppBanner">
            {/* <AppSlider slides={SliderImages} /> */}
            <figure className="homeBanne">
                <img src={Banner}/>
            </figure>
            <div className="BannerContent">
                <Header />
                <div className="Content_inner">
                    <h1 className="bannerHeading robotoFont">The biggest Indian hits. The best Indian stories.</h1>
                    <h1 className="bannerHeading robotoFont">All streaming here.</h1>
                    <h2 className="bannerSubHeading">Watch anywhere. Cancel anytime.</h2>
                    <div className="bannerInputBox">
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className="inputbox dflex itemsCenter contentCenter">
                            <input type="text" placeholder="Email Address" />
                            <button className="btn dflex itemsCenter">Get Started <GrNext /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AppBanner;

// The biggest Indian hits. The best Indian stories. All streaming here.
// Watch anywhere. Cancel anytime.
// Ready to watch? Enter your email to create or restart your membership.