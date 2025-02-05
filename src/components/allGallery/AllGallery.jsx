import Carousel from '../carousel/Carousel'
import {carouselData} from '../../data/carousel'

const AllGalery = () => {
    
    return (
        // style={{pointerEvents: isPortrait ? '' : 'none'}}
        <div >
            <Carousel direction='left' data={carouselData} />
            <Carousel direction='right' data={carouselData} />
        </div>
    );
};

export default AllGalery;