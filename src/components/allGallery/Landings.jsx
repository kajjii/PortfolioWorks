import { useState } from "react";
import { carouselData } from "../../data/carousel";
import './landings.scss'

const Banners = () => {

    const [visibleRows, setVisibleRows] = useState(2)
    const [selectedImage, setSelectedImage] = useState(null)
    const imagesPerRow = 4
    
    const closeModal = () => {
        setSelectedImage(null);
    };

    const showMoreImages = () => {
        setVisibleRows(visibleRows + 2)
    }

    const renderImages = () => {
        const visibleImages = carouselData.slice(0, visibleRows * imagesPerRow)
        return visibleImages.map(({src, href}) => (
            <a href={href} key={href} target='_blank'>
                <img 
                    key={href} 
                    src={src} 
                    className="gallery-image"
                    // onClick={() => setSelectedImage(image)} 
                    />

            </a>
        ))
    }

    return (
        <div className="image-gallery" style={{ padding: "0 0 30px 0" }}>
            <div className="image-grid">
                {renderImages()}
            </div>
            {visibleRows * imagesPerRow < carouselData.length && (
                <button className="show-more-button" onClick={showMoreImages}>
                Больше работ <p className="more-icon"></p>
                </button>
            )}

            {selectedImage && (
                <div className="modal-window-image" onClick={closeModal}>
                    <div style={{ display: "flex" }} onClick={(e) => e.stopPropagation()}>
                    <img src={selectedImage} alt=""
                        className="modal-image" />
                    <p><button onClick={closeModal}
                        className="modal-image-close-button"></button></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Banners;