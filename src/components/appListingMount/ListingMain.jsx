import { SliderImages } from "../SliderImages";
import AppHeader from "../appHeader";
import Slider from "../commonSlider";
import DisplayMive from './displayMovie'


const ListingMain = () => {
    return (
        <section className="ListingPage">
            <AppHeader />
            <div className="bannerSection">
                <Slider slides={SliderImages} />
            </div>
            <div className="moviesCards">
                <DisplayMive />
            </div>
        </section>
    )
}

export default ListingMain;