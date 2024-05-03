import { SliderImages } from "../SliderImages";
import AppHeader from "../appHeader";
import Slider from "../commonSlider";
import DisplayMovie from './displayMovie'


const ListingMain = () => {
    return (
        <section className="ListingPage">
            <AppHeader />
            <div className="bannerSection">
                <Slider slides={SliderImages} />
            </div>
            <div className="moviesCards">
                <DisplayMovie />
            </div>
        </section>
    )
}

export default ListingMain;