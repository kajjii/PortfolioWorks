import {Carousel} from '../carousel/Carousel'
import {carouselData} from '../../data/carousel'

export const AllGallery = () => {
    
    return (
        // style={{pointerEvents: isPortrait ? '' : 'none'}}
        <div >
            <Carousel direction='left' data={carouselData} />
            <Carousel direction='right' data={carouselData} />
        </div>
    );
};